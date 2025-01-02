import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
    let { newData } = useContext(UserContext);
    // console.log(newData);
    if (newData === null) {
        return <h1>Not Login</h1>
    }
    
        return (
            <>
                <h1>Username - {newData.username}</h1>
                <h2>Password - {newData.password}</h2>
            </>
        )

}

export default Profile;