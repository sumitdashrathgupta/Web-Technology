import React, { useContext } from "react";
import "../Style/Profilestyle.css"
import context from "../context/Context"

const Profile = () => {
    let { user } = useContext(context)

    return (
        <>
            {user ?
                <main className="contenar df">
                    <h1>Username:{user.username}</h1>
                    <h2>Password:{user.password}</h2>
                    <h2>Date:{user.date}</h2>
                    <h2>Address:{user.address}</h2>
                    <img src={user.img} alt="data" />
                </main>
                : null}
        </>
    )
}

export default Profile