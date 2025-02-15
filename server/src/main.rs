use actix_files::{Files, NamedFile};
use actix_web::HttpRequest;
use actix_web::{middleware, HttpResponse};
use notify::{Event, RecursiveMode, Result, Watcher};

use std::path::PathBuf;
use std::sync::mpsc;
// from https://github.com/kentaromiura/Hooker/blob/main/src/main.rs
extern crate hyper_sse;
#[macro_use]
extern crate lazy_static;
const SSE_SERVER_PORT: u16 = 35729;

lazy_static! {
    static ref SSE: hyper_sse::Server<u8> = hyper_sse::Server::new();
}

async fn index_dev() -> String {
    let file = NamedFile::open_async("../index.one.html").await;
    match file {
        Err(_) => "404 : File not found".to_string(),
        Ok(file) => {
            let contents = std::fs::read_to_string(file.path());
            match contents {
                Err(_) => "404 : File not found".to_string(),
                Ok(text) => text.to_string().replace(
                    "</body>",
                    &(format!("\
            <script>
            var evtSource = new EventSource('http://[::1]:{}/push/0?", SSE_SERVER_PORT).to_owned()
            // Generate Auth token for SSE EventSource
            + SSE.generate_auth_token(Some(0)).unwrap().as_str()
            + "');
            evtSource.addEventListener('reload', event => {
                globalThis.location.reload()
            });
            </script>
        </body>"),
                ),
            }
        }
    }
}

async fn index(_req: HttpRequest) -> actix_web::Result<NamedFile> {
    let mut path = PathBuf::new();
    path.push("../index.one.html");
    Ok(NamedFile::open(path)?)
}

async fn app(_req: HttpRequest) -> actix_web::Result<NamedFile> {
    let mut path = PathBuf::new();
    path.push("../out.js");
    Ok(NamedFile::open(path)?)
}

async fn style(_req: HttpRequest) -> actix_web::Result<NamedFile> {
    let mut path = PathBuf::new();
    path.push("../out.css");
    Ok(NamedFile::open(path)?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{web, App, HttpServer};

    SSE.spawn(format!("[::1]:{}", SSE_SERVER_PORT).parse().unwrap());

    std::thread::spawn(|| {
        let (tx, rx) = mpsc::channel::<Result<Event>>();

        // Use recommended_watcher() to automatically select the best implementation
        // for your platform. The `EventHandler` passed to this constructor can be a
        // closure, a `std::sync::mpsc::Sender`, a `crossbeam_channel::Sender`, or
        // another type the trait is implemented for.
        let watcher = notify::recommended_watcher(tx);
        match watcher {
            Err(_) => (),
            Ok(mut watcher) => {
                // Add a path to be watched. All files and directories at that path and
                // below will be monitored for changes.
                let w = watcher.watch(
                    std::path::Path::new("../.HASH"),
                    RecursiveMode::NonRecursive,
                );
                match w {
                    Err(_) => (),
                    Ok(_) => {
                        for res in rx {
                            match res {
                                Ok(_event) => {
                                    let msg = "";
                                    let _ = SSE.push(0, "reload", &msg);
                                }
                                Err(e) => println!("watch error: {:?}", e),
                            }
                        }
                    }
                }
            }
        }
    });

    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Compress::default())
            .route("/", web::get().to(index))
            .route("/out.js", web::get().to(app))
            .route("/out.css", web::get().to(style))
            .route(
                "/index.html", // usign index.html for dev
                web::get()                    
                    .to(|| async {
                        HttpResponse::Ok()
                            .content_type("text/html")
                            .body(index_dev().await)
                    }),
            )
            .service(Files::new("/assets", "../assets").show_files_listing())
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
