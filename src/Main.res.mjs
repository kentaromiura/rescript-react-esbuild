// Generated by ReScript, PLEASE EDIT WITH CARE

import * as App from "./App.res.mjs";
import * as Jotai from "jotai";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Client from "react-dom/client";
import * as JsxRuntime from "react/jsx-runtime";

var store = Jotai.createStore();

function start() {
  var domElement = document.querySelector("#root");
  if (!(domElement == null)) {
    Client.createRoot(domElement).render(JsxRuntime.jsx(React.StrictMode, {
              children: JsxRuntime.jsx(Jotai.Provider, {
                    children: JsxRuntime.jsx(App.make, {}),
                    store: Caml_option.some(store)
                  })
            }));
    return ;
  }
  
}

window.addEventListener("DOMContentLoaded", start);

export {
  store ,
  start ,
}
/* store Not a pure module */
