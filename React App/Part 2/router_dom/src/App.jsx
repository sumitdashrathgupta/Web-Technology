import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Service from "./Components/Service"
import Blog from "./Components/Blog"
import User from "./Components/User"
import ManProducte from "./Components/Producte/Man"
import WomanProducte from "./Components/Producte/Woman"
import Notpagefount from "./Components/Notpagefount"
import "./Components/Style/Body.css";
import "./Components/Style/Navbar.css";
import Userditels from "./Components/Userditels"


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} >
                    <Route index element={<ManProducte />} />
                    <Route path="man-producte" element={<ManProducte />} />
                    <Route path="woman-producte" element={<WomanProducte />} />
                </Route>
                <Route path="/blog" element={<Blog />} />
                <Route path="/user" element={<User />} >
                    <Route path=":data" element={<Userditels />} />
                </Route>
                <Route path="*" element={<Notpagefount />} />
            </Routes>
        </>
    )
}

export default App;