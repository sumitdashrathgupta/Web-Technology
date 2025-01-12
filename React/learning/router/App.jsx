import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <><br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};
export default App;
