import React from "react";
import ReactDOM, { createRoot } from "react-dom";
import "./gobal.css"
import App from "./App";

//!Jsx

// let h1 = (
//     <dav>
//         <h1 id="head" className="heading" style={{ background: "green", color: "#fff", border: "none" }}>Hello world</h1>
//         <br />
//         <label htmlFor="username">Enter the username</label>
//         <input type="text" id="usernmae" name="username" />
//     </dav>
// );

//? JSX Expressions

// let str = "javascript"
// var res = false
// let r1

// if (res) r1 = "react"
// else r1 = "node"

// let h1 = (
//   <>
//     <h1>{10 + 10}</h1>
//     <h1>{str}</h1>
//     <h1>{r1}</h1>
//     {/* <h4>{res? "react":"node"}</h4> */}
//   </>
// );

createRoot(document.querySelector("#root")).render(<App />);