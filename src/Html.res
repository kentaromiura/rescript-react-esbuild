/* JS World glue  */
type element;
type document;
@val external document: document = "document";
@send external getElementById: (document, string) => Js.nullable<element> = "getElementById";

@unboxed type hyperParams = String(string) | Int(int) | Procedure((unit) => unit);
// define all possible types to pass to uhtml literal template here:
type hyperTemplate = (array<string>, array<hyperParams>) => unit;

@module("./html")
external getRendererFor: (Js.nullable<element>) => hyperTemplate = "render";
/* end of JS glue */
