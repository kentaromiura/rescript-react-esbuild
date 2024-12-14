// lighterhtml / uhtml wrapper.
const {render:r, html} = require('uhtml')
export const render = element => (template, args) => r(element, html(template, ...args.map(x => x.VAL)))