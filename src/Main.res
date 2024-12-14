// mostly from https://github.com/kentaromiura/cristian.tokyo/blob/afa431cf0d1cb4f96b805509e74f6a38b0eba9e4/blog/src/Index.re
/* App state definition */
module State = {
    type t = {
        iterations: int,
        name: string,
    };
    let make = (name, iterations) => {iterations, name}
}

// define all actions here.
type actionType = 
    | Update; /* | Action2 ... */

module Action = {
    type t = {kind: actionType}
    let ofType = actionType => {kind: actionType}
}

type stateupdater = (State.t, Action.t) => State.t
type dispatcher = Action.t => unit;
/* End of App State */

/* JS World glue  */
type element;
type document;
@val external document: document = "document";
@send external getElementById: (document, string) => Js.nullable<element> = "getElementById";

// define all possible types to pass to uhtml literal template here:
type hyperTemplate = (array<string>, array<[
    | #Str(string)
    | #Int(int)
    | #Procedure(() => unit)
]>) => unit;

@module("./html")
external getRendererFor: (Js.nullable<element>) => hyperTemplate = "render";
/* end of JS glue */

let initialState = State.make("world", 0);
let mutatedState = ref(initialState)
let unref = refState => refState.contents;

let updateState: stateupdater = (previous, action) => {
    switch (action.kind) {
        | Update => mutatedState := State.make("updated 世界", previous.iterations +1)
    };
    mutatedState.contents;
}

let refRoot = ref(None);

let rec render = (state: State.t, root: hyperTemplate) => {
    root`<div onclick=${#Procedure(onClicked)}>
    Hello, ${#Str(state.name)}, clicked: ${#Int(state.iterations)} times.
    </div>`;
} and let dispatch = action => {
    let root = unref(refRoot);
    let state = updateState(unref(mutatedState), action);
    switch root {
    | Some(root) => render(state, root)
    | None => ()
    };
    ();
} and let onClicked: unit => unit = () => dispatch(Action.ofType(Update));

let main = () => {
    let renderer = getRendererFor(document->getElementById("root"))
    refRoot := Some(renderer)
    ignore(render(initialState, renderer))
}

/* entry point */
%%raw("window.onload=main");