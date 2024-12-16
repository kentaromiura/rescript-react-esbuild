// lighterhtml / uhtml wrapper.
const {render:r, html, svg} = require('uhtml')
const render = element => (template, args) => r(element, html(template, ...args));

const styled = (element, className) => (template, args) => {
    const e = document.createElement(element);
    e.className = className;
    return render(e)(template, args)
}

export {  
    html,
    render,
    styled,
    svg
};