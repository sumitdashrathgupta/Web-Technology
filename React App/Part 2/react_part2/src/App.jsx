import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Product from "./pages/Product";
import About from "./pages/About";
import Navbar from "./Components/Navbar"

const App = () => {
    return (
        <>
         {/* first way */}
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about_us" element={<About />} />
                </Routes>
            </BrowserRouter> */}

                <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about_us" element={<About />} />
            </Routes>

        </>
    )
}

export default App;