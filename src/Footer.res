
let footerStyle = Html.css`
    background-color: rgb(20, 22, 44);
    color: rgb(36, 37, 56);
    min-height: 50px;
    position: relative;
`

let logoStyle = Html.css`
    position: absolute;
    top: 0;
    left: 0px;
    height: 52px;
    z-index: 12;
    width: auto;
    transition: left 0.5s ease`

@react.component
let make = () => {
    let (count, _setCount) = Jotai.Atom.useAtom(State.counter)
    <footer className={footerStyle}>
        <img className={
            Util.cx([
                logoStyle, 
                Html.css`left: ${(count * 15)->Int.toString}px`
            ])} src="logo-index.png" />
    </footer>
}
    