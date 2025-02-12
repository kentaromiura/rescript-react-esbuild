// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Html from "./Html.res.mjs";
import * as State from "./State.res.mjs";
import * as Jotai from "jotai";
import * as Button from "./Button.res.mjs";
import * as Footer from "./Footer.res.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as JsxRuntime from "react/jsx-runtime";

function str(prim) {
  return prim;
}

var make = Html.styled({
      TAG: "Dom",
      _0: "h1"
    }, Html.css(["\n    font-weight:500;\n"], []));

var WhatsThis = {
  make: make
};

var make$1 = Html.styled({
      TAG: "Component",
      _0: make
    }, Html.css(["color:red"], []));

var RedWhatsThis = {
  make: make$1
};

function make$2(props) {
  return Html.styled({
                TAG: "Component",
                _0: make
              }, Html.css([
                    "\n        color:",
                    ";\n        transition: color 4.5s\n    "
                  ], [props.color]))(props);
}

var ColoredWhatsThis = {
  make: make$2
};

function App(props) {
  var match = Jotai.useAtom(State.counter);
  var setCount = match[1];
  var count = match[0];
  var color = count > 2 ? "purple" : "lightsteelblue";
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx(make$1, {
                              children: "What is this about"
                            }),
                        JsxRuntime.jsx(make$2, {
                              children: "This will change color after 3 clicks...",
                              color: color
                            }),
                        JsxRuntime.jsx("p", {
                              children: "This is a simple template for an ESBuild project using Rescript, Emotion CSS and Jotai."
                            }),
                        JsxRuntime.jsx(Button.make, {
                              children: Caml_option.some("Clicked " + count.toString() + " times"),
                              onClick: (function (param) {
                                  setCount(function (count) {
                                        return count + 1 | 0;
                                      });
                                })
                            })
                      ],
                      className: Html.css(["background-color: #f3f4f6;padding:20px"], [])
                    }),
                JsxRuntime.jsx(Footer.make, {})
              ]
            });
}

var styled = Html.styled;

var make$3 = App;

export {
  styled ,
  str ,
  WhatsThis ,
  RedWhatsThis ,
  ColoredWhatsThis ,
  make$3 as make,
}
/* make Not a pure module */
