import React, { useContext } from "react";
import "../Style/Profilestyle.css"
import { UsedContext } from "../Context/UserContext"

const Profile = () => {
    const { user } = useContext(UsedContext)
    if (user === null) {
        return (
            <div className="contenar">
                <p>Data Is not Present 404 Error</p>
            </div>
        )
    }

    return (
        <div className="contenar">
            <h1 className="Subdata"> {user.username}</h1>
            <h2 className="Subdata"> {user.password}</h2>
        </div>
    )

}

export default Profile