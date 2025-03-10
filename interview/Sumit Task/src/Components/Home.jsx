import React from 'react'
import "../Style/Home.css"
import image1 from "../assets/image-1.jpg"
import image2 from "../assets/image-2.jpg"
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Features from "./Features"


const Home = () => {
  return (
    <>
      <main>
        <div className="home_section">
          <div className="first">
            <span className='f-1'>
              Tailwind Template for Startups
            </span>
            <h1 className='main_hading'>Digital Solutions for Your <span className='f-3'>Startup</span></h1>
            <p className='main_para'>Handcrafted Tailwind CSS template for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design and everything you need to kickstart your next web project.</p>
            <div className="start">
              <button className='btn-1'>Get Started <FaArrowRight className='g-1' /></button>
              <div className="play-d">
                <FaPlay className='play' /> <p className='play-3'>How to work</p>
              </div>
            </div>
          </div>
          <div className="second">
            <img className='image2' src={image2} alt="" />
            <img className='image1' src={image1} alt="" />

          </div>
        </div>
      </main>
      <Features/>
    </>
  )
}

export default Home