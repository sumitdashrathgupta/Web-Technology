import React, { useEffect, useState } from "react";

const Woman= ()=>{
     let [data1, setdata1] = useState({})
        useEffect(() => {
            async function demo() {
                let data = await window.fetch("https://api.escuelajs.co/api/v1/users")
                let finaldata = await data.json()
                setdata1(finaldata)
            }
            demo()
        },[])
        console.log(data1)
    return(
        <>
        <h1>Wooman Producte</h1>
        </>
    )
}

export default  Woman