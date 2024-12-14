// mostly from https://github.com/kentaromiura/cristian.tokyo/blob/afa431cf0d1cb4f96b805509e74f6a38b0eba9e4/blog/src/Index.re
open State;

let unref = refState => refState.contents;


let refRoot = ref(None);

let rec render = (state: State.t, root: Html.hyperTemplate) => {
    root`<div onclick=${Procedure(onClicked)}>
    Hello, ${String(state.name)}, clicked: ${Int(state.iterations)} times.
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
    let renderer = Html.getRendererFor(Html.document->Html.getElementById("root"))
    refRoot := Some(renderer)
    ignore(render(initialState, renderer))
}

/* entry point */
%%raw("window.onload=main");