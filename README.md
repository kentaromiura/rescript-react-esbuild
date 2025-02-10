Rescript + React basic setup
===
The example app shows a basic setup, with Jotai as store + re-render on changes.

Bonus:
===
- emotion can be used too! `Html.css` styles will be processed by emotion and extracted to `out.css`. Note: don't alias `Html.css` use it as extended.


- `styled` like API (a little more verbose):
    - for a dom element:
```javascript
styled(Dom("h1"), Html.css`
    font-weight:500;
`)
```
    - to extend a React.Component (or a previously styled component):
```javascript
module RedWhatsThis = {
    let make = 
        styled(Component(WhatsThis.make), Html.css`color:red`)
}
```


Why?
===

Rescript templates comes with Vite and tailwind, I prefer styled components because of colocation and because it's much easier to understand what they do.

I forked my Rescript + Uhtml project and converted it to use React

Notes:
I would've used https://github.com/davesnx/styled-ppx but it can't yet be used with Rescript v11 (also mac M1 are not supported even in v10 unless you compile locally and modify the postinstall script).
Style are handled on JS build phase side, therefore there's no strong type for css; although it's fine for my usage.