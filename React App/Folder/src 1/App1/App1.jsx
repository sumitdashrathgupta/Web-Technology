//? INC ,DEC , RESET USING CLICK EVENT IN CBC
//** CBC is stateful that used state is hold value in a form of objecto or null . You update object value than used setstate() method */


// import React, { Component } from "react";

// class App1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     Incerment = () => {
//         this.setState({ count: this.state.count + 1 })
//     }
//     Decerment = () => {
//         this.setState({ count: this.state.count - 1 })
//     }
//     Reset = () => {
//         this.setState({ count: 0 })
//     }
//     render() {
//         return <>
//             <h1>Count :{this.state.count}</h1>
//             <button onClick={this.Incerment}>INC</button>
//             <button onClick={this.Decerment}>DEC</button>
//             <button onClick={this.Reset}>Reset</button>
//         </>
//     }
// }

// export default App1;


//! INC ,DEC , RESET USING CLICK EVENT IN FBC

import React, { useState } from "react";

const App1 = () => {
    let [ count, countInc ] = useState(0);
    return <>
        <h1>count:{count} </h1>
        <button onClick={(e) => { countInc(count + 1) }}>INC</button>
        <button onClick={(e) => { countInc(count - 1) }}>INC</button>
        <button onClick={(e) => { countInc(0) }}>INC</button>
    </>
}

export default App1;