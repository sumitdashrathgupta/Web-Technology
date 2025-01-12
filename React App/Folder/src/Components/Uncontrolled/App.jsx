import { useRef } from "react";

const App = () => {
    const UsernameRef = useRef()
    const PasswordRef = useRef()
    const FormRef = useRef()

    const SubmitEvent = (e) => {
        e.preventDefault();
        console.log({
            username: UsernameRef.current.value,
            password: PasswordRef.current.value
        })
    }

    return (
        <>
            <h1>Form Information</h1>
            <form className="Form-data" onSubmit={SubmitEvent} ref={FormRef}>
                <input type="text" name="username" placeholder="Enter the username" ref={UsernameRef} />
                <input type="text" name="password" placeholder="Enter the password" ref={PasswordRef} />
                <button type="Submit"> Submit</button>
            </form>
        </>
    )
}

export default App;