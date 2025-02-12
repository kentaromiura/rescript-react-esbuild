open State
let styled = Html.styled
let str  = React.string
// Example of styled components:
module WhatsThis = {
    let make = styled(Dom("h1"), Html.css`
    font-weight:500;
`)
}
module RedWhatsThis = {
    let make = styled(Component(WhatsThis.make), Html.css`color:red`)
}
module ColoredWhatsThis = {   
    type props = {...JsxDOM.domProps, color: string};
    let make = props => styled(Component(WhatsThis.make), Html.css`
        color:${props.color};
        transition: color 4.5s
    `)(Html.unsafeDrillProps(props))
}

@react.component
let make = () => {
    let (count, setCount) = Jotai.Atom.useAtom(counter)
    let color = count > 2 ? "purple" : "lightsteelblue";
    <>
        <div className={Html.css`background-color: #f3f4f6;padding:20px`}>            
            <RedWhatsThis>
                {"What is this about"->str}
            </RedWhatsThis>
            <ColoredWhatsThis color={color}>
                {str(`This will change color after 3 clicks...`)}
            </ColoredWhatsThis>
            <p>
                {str("This is a simple template for an ESBuild project using Rescript, Emotion CSS and Jotai.")}
            </p>
            <Button onClick={_ => setCount(count => count + 1)}>
                {str(`Clicked ${count->Int.toString} times`)}
            </Button>
        </div>
        <Footer />
    </>
}