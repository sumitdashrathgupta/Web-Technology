//! CBC

/*
1)Static default props={    -> Inside the class
    name:"NA",
    id:"NA",
    demo:"na"
}
    
2) Or operator
3)defaultProps (Outside the class)

*/

//! How to set the defult value for props:
/*
import React from "react";
import Child from "./Child"

export default function App() {
    function demo() {
        return "Demo function"
    }
    return (
        <>
            <h1>Hello world</h1>
            <Child name={"abc"} id={123} demo={demo} />
            <Child id={300} demo={demo} />
            <Child name="prq" demo={demo} />
            <h2>End</h2>
        </>
    )
}
*/

// import React from "react";

// const App = () => {
//     return <h1>Hello Sumit</h1>
// }

// export default App;


//! How to treansfer the data from child to parent 

import React, { useState } from "react";
import Child from "./Child";

const App = () => {
    let [data, setData] = useState("text");
    let sendData = (val) => {
        setData(val)
    };
    return (
        <>
            <h1>data: {data}</h1>
            <Child sendData={sendData} />
        </>
    )
}

export default App;


/*import React, { useState } from "react";
import { faker } from "@faker-js/faker";
console.log(faker);

const App = () => {
    let [data, setData] = useState(faker.image.avatarGitHub());
    let handlechick = () => {
        setData(faker.image.avatar());
    }
    return (
        <>
            <img src={data} alt="img 1" style={{ width: "400px", height: "300px" }} />
            <button onClick={handlechick}>Change Image</button>
        </>
    )
}
export default App;*/