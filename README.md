Rescript + uhtml basic setup
===
Rescript calling into uhtml natively using string templates.

The example app shows a basic setup, with a redux/elm like event + re-render on changes.

Bonus:
===
- emotion can be used too! styles will be extracted to `out.css`.
- a `styled` function mimicking styled component one.

Why?
===

Rescript works well already with React, and recent support to template literals makes it easy to interface to those small and fast libraries.

I started exploring those integration around 5 years ago: https://github.com/kentaromiura/cristian.tokyo/blob/e2317a99971bbb21c6dd0697e3a7be5b4510afdf/blog/src/Index.re, it was already possible but this new iteration gives much stronger type and much better DX.
