open State
let styled = Html.styled

// Example of styled components:
module WhatsThis = {
    let make = styled(Dom("h1"), Html.css`
    font-weight:500;
`)
}
module RedWhatsThis = {
    let make = styled(Component(WhatsThis.make), Html.css`color:red`)
}

@react.component
let make = () => {
    let (count, setCount) = Jotai.Atom.useAtom(counter)
    <>
        <div className={Html.css`background-color: #f3f4f6;padding:20px`}>
            <RedWhatsThis>
                {"What is this about"->React.string}
            </RedWhatsThis>
            <p>
                {React.string("This is a simple template for an ESBuild project using Rescript, Emotion CSS and Jotai.")}
            </p>
            <Button onClick={_ => setCount(count => count + 1)}>
                {React.string(`Clicked ${count->Int.toString} times`)}
            </Button>
        </div>
        <Footer />
    </>
}