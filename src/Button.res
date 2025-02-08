open Util

let pink = Html.css`
&:hover {
    color: mistyrose;
}`

let make = props => 
    <button {...props}
        className={cx([pink, Html.css`background-color:#2563EB;`])}
    />