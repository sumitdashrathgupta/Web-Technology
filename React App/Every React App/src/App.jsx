//! How to define the state in CBC:
// import React, { Component } from "react";

// class App extends Component {
//     // 1
//     state = {
//         name: "xyz",
//         id: 23,
//         skill: ["js", "react"]
//     }
//     // 2
//     constructor() {
//         super();
//         this.state = {
//             name: "abc",
//             id: 65,
//             skill: ["js", "java"]
//         };
//         console.log(this);//? App component
//     }

//     render() {
//         let { name, id, skill } = this.state
//         return (
//             <>
//                 <h1>username:{this.state.name}</h1>
//                 <h2>username:{this.state.id}</h2>
//                 {/* <h3>username:{this.state.skill}</h3> */}
//                 <ul>
//                     {this.state.skill.map((v) => {
//                         return <li>{v}</li>
//                     })}
//                 </ul>
//             </>
//         )
//     }
// }

// export default App;




import { Component } from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "sumit",
            id: 23
        }
    }
    render() {
        setTimeout(() => {
            this.setState({ name: "Amit", id: 67 })
        }, 3000)
        return (
            <>
                <h1>username :{this.state.name}</h1>
                <h2>username :{this.state.id}</h2>
            </>
        )
    }
}