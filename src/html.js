// lighterhtml / uhtml wrapper.
const {render:r, html} = require('uhtml')
const render = element => (template, args) => r(element, html(template, ...args));

export {
    html,
    render
};