import React, { useState } from "react";

/*class App extends React.Component {
    constructor() {
        super()
        this.state = {
            employee: [
                {
                    name: "sumit",
                    id: 44
                },
                {
                    name: "amit",
                    id: 45
                },
                {
                    name: "raj",
                    id: 55
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.employee.map((v, i) => {
                    let { name, id } = v
                    return (
                        <div key={i + 1}>
                            <h1>Name :{name}</h1>
                            <h2>Id : {id}</h2>
                        </div>
                    )
                })}
            </div>)
    }
}
*/

//!How can we define state in function based component

import React from "react";
const App = () => {
    let result = React.useState(10);
    console.log(result);
    let setResult = result[1];
    setTimeout(() => {
        setResult(4000)
    }, 4000);
    return(
        <>
        <h1>Hello world</h1>
        <h2>{result[0]}</h2>
        </>
    )
}

//? How to iterate the state value in FBC

// import { useState, Fragment } from "react";
// const App = () => {
//     let { employee } = useState([
//         {
//             name: "abc",
//             id: 230
//         },
//         {
//             name: "raj",
//             id: 245
//         },
//         {
//             name: "ram",
//             id: 111
//         }
//     ])
// console.log(employee);
//!Each child in a list should have a unique "key"
//     return (
//         <div>
//             {employee.map((v, i) => {
//                 return (
//                     <Fragment key={i + 1}>
//                         <h1>name : {v.name}</h1>
//                         <h2>Id :{v.id}</h2>
//                     </Fragment>
//                 )
//             })}
//         </div>
//     )
// }

//! How to handle the events in CBC

// import React, { Component } from "react";

// class App exports React.Component{
//     render(){
//         return (
//             <div className="main">
//                 <div className="contenar"
//                     onClick={(e) => {
//                         console.log(e);
//                     }}>
//                     </div>
//             </div>

//         )
//     }
// }

export default App;

// rcc -> CBC
// rfc,rfce,rafce,->FBC