// src/App.js
import React from 'react';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Footer from './Pages/Footer';
import About from "./Pages/About"
import Navbar from "./Pages/Navbar"
import { Routes, Route } from 'react-router-dom';

// import './App.css'; // General styles

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
