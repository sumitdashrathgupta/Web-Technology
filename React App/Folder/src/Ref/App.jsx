// import { Component, createRef } from "react";


// export default class App extends Component {
//     constructor() {
//         super()
//         this.divRef = createRef()
//     }


//     Eventhandle = () => {
//         this.divRef.current.style.background = "green"
//         this.divRef.current.style.color="#fff"
//     }
//     render() {
//         console.log(this.divRef)
//         return (
//             <>

//                 <h1 ref={this.divRef}>Hello world</h1>
//                 <button onClick={this.Eventhandle}>Change</button>
//             </>
//         )
//     }
// }

import { useRef } from "react";


const App = () => {
    let divRef = useRef()

    let handleevent = () => {
        divRef.current.style.background = "green"
        divRef.current.style.color = "#fff"

    }
    console.log(divRef)
    return (
        <>
            <h2 ref={divRef}>This is a REf Hooks in react Js</h2>
            <button ref={divRef}>Done</button><br />
            <button ref={divRef}>Done</button><br />
            <button onClick={handleevent}>change</button>
        </>
    )
}

export default App;