import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../Slice/UserSlice";

const Users = () => {
    let dispatch = useDispatch()
    let users = useSelector((state) => {
        state.userInfo.users;
        console.log(users);
        let deleteUserData = (id) => {
            dispatch(deleteUser(id))
        }
        return (
            <div>
                {users.map((v, i) => {
                    let { username, age, email } = v
                    return (
                        <React.Fragment key={i + 1}>
                            <h1>Name:{username}</h1>
                            <h2>email: {email}</h2>
                            <h3>Age :{age}</h3>
                            <button type="button" onClick={(e) => deleteUserData(i)}>Delect</button>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    })
}

export default Users;