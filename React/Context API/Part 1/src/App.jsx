import React from "react";
import Form from "./Componet/Form"
import Profile from "./Componet/Profile"
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import ContextProvider from "./context/ProvideContext";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <ContextProvider>
                    <Form />
                    </ContextProvider>
                    } />
                <Route path="/profile" element={
                    <ContextProvider>
                        <Profile />
                    </ContextProvider>
                    } />
            </Routes>
        </>
    )
}

export default App