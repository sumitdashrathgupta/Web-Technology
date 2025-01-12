//~ Conditional Rendering
//! Using if else

/*import React, { useState } from "react";


const App = () => {
    let [isLoggedIn, setLoggedIn] = useState(true)
    let handleClick = function (e) {
        setLoggedIn(false);
    }
    if (isLoggedIn) {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Sachin</li>
                        <li onClick={handleClick}>Log Out</li>
                    </ul>
                </nav>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>login</li>
                        <li>Sining</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default App;*/


//! using ternary operator

/*import React, { useState } from "react";

const App = () => {
    let [isLoggedIn, setLoggedIn] = useState(true)
    let User = () => {
        return (
            <>
                <li>Sumit</li>
                <li onClick={() => { setLoggedIn(false) }}>Logout</li>
            </>
        )
    }
    let Guest = () => {
        return (
            <>
                <li>Login</li>
                <li>sining</li>
            </>
        )
    }
    return (
        <div className="contenar">
            <nav>
                <ul className={isLoggedIn ? "active" : "inactive"}>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                    {isLoggedIn ? <User /> : <Guest />}
                </ul>
            </nav>
        </div>
    )
}

export default App;*/


//! Switch condition

/*import React, { useState } from "react";

const App = () => {
    let [isLoggedIn, setLoggedIn] = useState(true)
    switch (isLoggedIn) {
        case true:
            return (
                <div className="Container">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About us</li>
                            <li>Sachin</li>
                            <li onClick={(e) => setLoggedIn(false)}> Log out</li>
                        </ul>
                    </nav>
                </div>
            )
        case false:
            return (
                <div className="Contenar">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About us</li>
                            <li>Login</li>
                            <li>Sing up</li>
                        </ul>
                    </nav>
                </div>
            )
        default:
            return <></>
    }
}

export default App;*/


//? && opertor

import React, { useState } from "react";
import { FaBell } from "react-icons/fa"

const App = () => {
    let [notification, setnotification] = useState([
        "Hii",
        "Sumit",
        "commented on facebook",
        "work"
    ])
    return (
        <>
            <h1>
                <FaBell /> <sup>{notification.length > 0 && notification.length}</sup>
            </h1>
        </>
    )
}

export default App;