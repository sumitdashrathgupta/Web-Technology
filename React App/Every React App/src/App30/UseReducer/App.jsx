//! UseReducer() Hook

import { useReducer } from "react";
let initialvalue = 0;

// let reducer = (state,action) 
let reducer = (state, { type }) => {
    switch (type) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "reset":
            return initialvalue;
        default:
            return state;
    }
}

const App = () => {
    let [count, dispatch] = useReducer(reducer, initialvalue);
    return (
        <>
            <h1>Count - {count}</h1>
            <button onClick={(e) => dispatch({ type: "Increment" })}>INC</button>
            <button onClick={(e) => dispatch({ type: "Decrement" })}>Dec</button>
            <button onClick={(e) => dispatch({ type: "reset" })}>Reset</button>
        </>
    )
}

export default App;

