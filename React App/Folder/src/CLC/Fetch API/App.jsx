import { useState, useEffect } from "react";

const App = () => {
    let [Data, setData] = useState([])

    useEffect(() => {
        console.log("Effect")
        async function demo() {
            let FetchUser = await window.fetch('https://dummyjson.com/users');
            let finalData = await FetchUser.json()
            setData(finalData.users)
        }
        demo()
    },[])


    return (
        <>
            {Data.map((v, i) => {
                let { id, firstName, age, gender, image } = v
                return (
                    <div key={i+1}>
                        <img src={image} alt={image} />
                        <h1>ID: {id}</h1>
                        <h2>Name : {firstName}</h2>
                        <h2>Age : {age}</h2>
                        <h2>Gender : {gender}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default App