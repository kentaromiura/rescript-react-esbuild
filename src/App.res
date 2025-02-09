open State

@react.component
let make = () => {
    let (count, setCount) = Jotai.Atom.useAtom(counter)
    
    <>
    <div className={Html.css`background-color: #f3f4f6;padding:20px`}>
        <h1 className={Html.css`font-weight:500`}>
            {"What is this about"->React.string}
        </h1>
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