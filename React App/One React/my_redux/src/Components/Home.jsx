import { useDispatch } from "react-redux"
import { setUser } from "../Slice/UserSlice"
import { useState } from "react"

const Home = () => {
    let dispatch = useDispatch()
    let [data, setdata] = useState({
        username: "",
        age: "",
        email: ""
    })
    let handlechange = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })

    }
    let handlesubmit = (e) => {
        e, preventDefault()
        // console.log(data);
        dispatch(setUser(data))
        setdata({
            username: "",
            age: "",
            email: ""
        })
    }
}

export default Home;