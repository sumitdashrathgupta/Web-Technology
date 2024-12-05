
//! INC,DEC AND RESET EXAMPLE IN CBC:

/*import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    Increment = (e) => {
        console.log("increment");
        this.setState({ count: this.state.count + 1 })
    }
    Decrement = (e) => {
        console.log("decrement");
        this.setState({ count: this.state.count - 1 })

    }
    Reset = (e) => {
        console.log("reset");
        this.setState({ count: 0 })

    }
    render() {
        console.log(this);
        return <>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.Increment}>INC</button>
            <button onClick={this.Decrement}>DEC</button>
            <button onClick={this.Reset}>Reset</button>
        </>
    }
}

export default App; */


//? INC,DEC AND RESET EXAMPLE IN FBC:


/*import React, { useState } from "react";

const App = () => {
   let [Count,setCount]=useState(0);
    return (
        <>
            <h1>Count:{Count}</h1>
            <button onClick={(e)=>{setCount(Count+1)}}>INC</button>
            <button onClick={()=>{setCount(Count-1)}}>DEC</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
}


export default App;*/


//** Mouseover event and passing function as an argument for update function */

/*import React from "react";
import { useState } from "react";

const App = () => {
    let [count, setCount] = useState(0);
    let handlemouseOver = (e) => {
        // setCount(count + 1)
        // setCount(count + 1)
        setCount((prev) => {
            console.log(prev);
            return prev + 1;
        })
        setCount((prev) => {
            console.log(prev);
            return prev + 1;
        })

    }
    return (
        <>
            <h1 onMouseOver={handlemouseOver}>Count :{count}</h1>
        </>
    )
}

export default App; */



/*import React, { Component } from "react";


export default class App extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.handlemouseOver = this.handlemouseOver.bind(this);
    }
    // handlemouseOver = (e) => {
    //     console.log(this);
    //     this.setState((prev) => {
    //         console.log(prev);
    //         return {count:prev.count+1}
    //     })
    // }
    handlemouseOver = function () {
        console.log(this); //!undefine
        this.setState((prev) => {
            console.log(prev);
            return { count: prev.count + 1 }
        })
    }
    render() {
        return (
            <>
                <h1 onMouseOver={this.handlemouseOver}>Count : {this.state.count}</h1>
            </>
        )
    }
}

export default App; 
*/


 