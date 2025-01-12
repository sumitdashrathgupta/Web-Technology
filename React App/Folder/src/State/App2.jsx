import { useState } from "react";

const App = () => {
    let [state, setstate] = useState({
        name: "sumit",
        id: 54,
        skills: ["html", "css", "java"]
    })
    let { name, id, skills } = state

    let demo = () => {
        setTimeout(() => {
            setstate({ ...state,name: "Amit", id: 45 })
        }, 3000)
    }

    return (
        <>
            <h1>Name :{name}</h1>
            <h1>Id :{id}</h1>
            <h1>Subject :{skills.map((v, i) => {
                return <li key={i + 1}>{v}</li>
            })}</h1>
            {demo()}
        </>
    )
}

export default App