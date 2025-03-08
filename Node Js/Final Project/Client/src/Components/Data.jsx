import React, { useEffect, useState } from "react";

const Data = () => {
    let [AllData, setAllData] = useState([])

    useEffect(() => {
        async function alldata() {
            const Url = await window.fetch("http://localhost:4000/find")
            const All = await Url.json()
            setAllData(All)
        }
        alldata()
    }, [])
    return (
        <>
            {
                AllData.map((v, i) => {
                    let { FName, LName, Password, Email, Phone ,Image} = v
                    return <table key={i + 1}>
                        <thead>
                            <thead>
                                <th> image</th>
                                <th>First Name</th>
                                <th>Lasrt Name</th>
                                <th>Password</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{Image}</td>
                                    <td >{FName}</td>
                                    <td>{LName}</td>
                                    <td>{Password}</td>
                                    <td>{Email}</td>
                                    <td>{Phone}</td>
                                </tr>
                            </tbody>
                        </thead>
                    </table>
                })
            }
        </>
    )
}

export default Data