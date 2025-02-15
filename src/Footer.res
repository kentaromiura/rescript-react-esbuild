
let footerStyle = Html.css`
    background-color: rgb(20, 22, 44);
    color: white;
    min-height: 50px;
    position: absolute;
    bottom:0;
    width:100%;
`

let logoStyle = Html.css`
    position: absolute;
    top: 0;
    left: 0px;
    height: 52px;
    z-index: 12;
    width: auto;
    transition: left 0.5s ease`

// Example of using jotai to move the pheasant
@react.component
let make = () => {
    let (count, _setCount) = Jotai.Atom.useAtom(State.counter)
    <footer className={footerStyle}>
        <img alt="logo figuring a pheasant" className={
            Html.cx([
                logoStyle, 
                Html.css`left: ${(count * 15)->Int.toString}px`
            ])} src="assets/logo-index.avif" />
    </footer>
}
    