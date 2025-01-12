import React, { useRef } from "react";

const App = () => {
    let usernameref = useRef()
    let passwordref = useRef()
    let finaldata = useRef()

    let Submitdata=(e)=>{
        e.preventDefault();
        // console.log({
        //     Username:usernameref.current.value,
        //     PassWord:passwordref.current.value
        // })
    }
    return (
        <>
            <h1>Form Data</h1>
            <form onSubmit={Submitdata} ref={finaldata} >
                <input type="text" name="username" placeholder="Enter the Username" ref={usernameref} />
                <input type="password" name="password" placeholder="Enter the password" ref={passwordref} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default App