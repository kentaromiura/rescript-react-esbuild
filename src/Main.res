@val external window: {..} = "window"

let store = Jotai.Store.make()
let start = () => 
  switch ReactDOM.querySelector("#root") {
    | Some(domElement) =>
      ReactDOM.Client.createRoot(domElement) -> ReactDOM.Client.Root.render(
        <React.StrictMode>
          <Jotai.Provider store={store}>
            <App />
          </Jotai.Provider>
        </React.StrictMode>
      )
      |None => ()
  }

// Entry point
window["addEventListener"]("DOMContentLoaded", start)