/* JS World glue  */
type element;
type document;
@val external document: document = "document";
@send external getElementById: (document, string) => Js.nullable<element> = "getElementById";

// uhtml definitions:
/**
from v4 doc: By current TypeScript definition, a hole can be either:

a string, a boolean or a number to show as it is on the rendered node
null or undefined to signal that hole has currently no content whatsoever
an actual instanceof Hole exported class, which is what html or svg tags return once invoked
an array that contains a list of instances of Hole or DOM nodes to deal with
 */
type rec hyperParams = [
| #Str(string)
| #Bool(bool)
| #Int(int)
| #Number(float)
| #Empty(unit)
| #Procedure(() => unit) // might need to add events etc
| #Element(hyperTemplate)
| #Elements(array<hyperTemplate>)
] and
hyperTemplate = (array<string>, array<hyperParams>) => unit 

// @taggedTemplate works fine with the transform!
@module("./html") @taggedTemplate 
external html: (array<string>, array<hyperParams>) => hyperTemplate = "html";

@module("./html") @taggedTemplate 
external svg: (array<string>, array<hyperParams>) => hyperTemplate = "svg";

@module("./html")
external getRendererFor: (Js.nullable<element>) => hyperTemplate = "render";
// end of uhtml definitions

// a bit of css stuff
@module("./html")
external styled: (string, string) => (array<string>, array<hyperParams>) => hyperTemplate = "styled"

// this is a fake function.
let css: (array<string>, array<string>) => string = (template, _holes) => {   
    "" ++ Int.toString(Array.length(template))
}