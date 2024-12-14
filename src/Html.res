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
