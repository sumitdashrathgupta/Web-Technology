import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App