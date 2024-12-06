import React from "react";
import Child from './Child'
//! Props:sending the props

//** Props  */
// ->properties
// -> Transfer the data from one component to another
// -> immutable
// ->Data flow from parent to child

/*class App1 extends Component {
    demo() {
        console.log("demo function");
        return "demo function"
    }
    render() {
        return (
            <>
                <h1>Hello world</h1>
                <Child
                    name={"abc"}
                    id={123}
                    skills={['java', 'javascript', 'react']}
                    demo={this.demo}
                />
                <h2>End</h2>
            </>
        )
    }
}
export default App1;*/

export default function App1() {
    function demo() {
        return "demo function"
    }

    return (
        <>
            <h1>Hello world</h1>
            <Child
                name={"abc"}
                id={123}
                skills={['java', 'javascript', 'react']}
                demo={demo}
            />
            <Child
                name={"xxc"}
                id={300}
                skills={['node', 'python', 'react native']}
                demo={demo}
            />
            <h2>End</h2>
        </>
    )
}

