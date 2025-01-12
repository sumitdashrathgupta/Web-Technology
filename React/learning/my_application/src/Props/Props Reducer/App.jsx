import { useReducer } from "react";

let initialvalue = 0;

let reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return initialvalue;
        default:
            return initialvalue;
    }
}

const App = () => {
    let [count, Dispatch] = useReducer(reducer, initialvalue)

    return (
        <>
            <h1>Count : {count}</h1>
            <button type="button" onClick={() => { Dispatch({ type: "Increment" }) }}>INC</button>
            <button type="button" onClick={() => { Dispatch({ type: "Decrement" }) }}>DEC</button>
            <button type="button" onClick={() => { Dispatch({ type: "Reset" }) }}>Reset</button>
        </>
    )
}

export default App