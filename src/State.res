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


let initialState = State.make("world", 0); // used as constant
let mutatedState = ref(initialState)

let updateState: stateupdater = (previous, action) => {
    switch (action.kind) {
        | Update => mutatedState := State.make("updated 世界", previous.iterations +1)
    };
    mutatedState.contents;
}