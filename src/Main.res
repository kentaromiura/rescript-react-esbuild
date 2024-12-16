// mostly from https://github.com/kentaromiura/cristian.tokyo/blob/afa431cf0d1cb4f96b805509e74f6a38b0eba9e4/blog/src/Index.re
open State

let unref = Util.unref
let cx = Util.cx

let refRoot = ref(None)

let rec render = (state: State.t, root: Html.hyperTemplate) => {
  root`${#Element(
    UI.page(
      UI.header`Rescript + uhtml`, // below is an example of inline style.
      UI.content`<div class="${#Str(
        Html.css`
                    padding: 2em 1em;
                    border: 0.3em dashed silver;
                    box-shadow: 1px 1px 3px steelblue;
                    margin: 0 1em;`,
      )}" onclick=${#Procedure(onClicked)}>
         Hello, ${#Str(state.name)}, clicked: ${#Int(state.iterations)} times.
         ${#Elements([UI.testingAllPossibleValues, UI.cursedLogo])}
        </div>`,
      UI.footer,
    ),
  )}`
}
and dispatch = action => {
  let root = unref(refRoot)
  let state = updateState(unref(mutatedState), action)
  switch root {
  | Some(root) => render(state, root)
  | None => ()
  }
  ()
}
and onClicked: unit => unit = () => dispatch(Action.ofType(Update))

let main = () => {
  let renderer = Html.getRendererFor(Html.document->Html.getElementById("root"))
  refRoot := Some(renderer)
  ignore(render(initialState, renderer))
}

/* entry point */
%%raw("window.onload=main")
