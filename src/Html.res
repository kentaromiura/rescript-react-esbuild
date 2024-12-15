/* JS World glue  */
type element;
type document;
@val external document: document = "document";
@send external getElementById: (document, string) => Js.nullable<element> = "getElementById";

// define all possible types to pass to uhtml literal template here:
type rec hyperParams = [
| #Str(string)
| #Int(int)
| #Procedure(() => unit)
| #Elements(array<hyperTemplate>)
] and
hyperTemplate = (array<string>, array<hyperParams>) => unit 

// @taggedTemplate works fine with the transform!
@module("./html") @taggedTemplate 
external html: (array<string>, array<hyperParams>) => hyperTemplate = "html";

@module("./html")
external getRendererFor: (Js.nullable<element>) => hyperTemplate = "render";
/* end of JS glue */
