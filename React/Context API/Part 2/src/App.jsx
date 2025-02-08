import React from "react";
import Form from "./Componet/Form"
import Profile from "./Componet/Profile"
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import ProvideContext from "./Context/ProvideContext";

const App = () => {
    return (
        <ProvideContext>
            <Navbar />
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </ProvideContext>
    )
}

export default App