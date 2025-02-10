
let pinkColor = "mistyrose";
let pink = Html.css`
&:hover {
    color: ${pinkColor};
}`

let make = props => 
    <button {...props}
        className={Html.cx([pink, Html.css`background-color:#2563EB;`])}
    />