import React from "react";
import { Outlet } from "react-router-dom";


const User = () => {
    return (
        <>
            <h1>User</h1>
            <Outlet />
        </>
    )
}

export default User