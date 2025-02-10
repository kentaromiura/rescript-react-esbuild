// this is a fake function.
let css: (array<string>, array<string>) => string = (template, _holes) => {   
    "" ++ Int.toString(Array.length(template))
}
let cx = (classes: array<string>): string => Array.join(classes, " ")

// don't export getClassName
%%private(let getClassName = cn =>
    switch cn {
    | Some(class) => class
    | None => ""
})

type stylable<'props> = Component(React.component<'props>) | Dom(string)
let styled = (what: stylable<'props>, className) => (props: JsxDOM.domProps) => {    
    switch what {
        | Component(c) => {
            let cn = props.className;
            let newProps= {...props, className: cx([className, getClassName(cn)])};
            React.createElement(c, newProps);
        }
        | Dom(s) => {
            ReactDOM.createDOMElementVariadic(s,  ~props={...props, className: cx([className,getClassName(props.className)])}, [])
        }
    }    
}
