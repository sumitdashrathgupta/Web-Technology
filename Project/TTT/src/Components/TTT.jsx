import React from 'react'
import Car1 from "../assets/Image/car1.webp"
import Car2 from "../assets/Image/car2.jpg"
import Car3 from "../assets/Image/car3.jpg"
import Car4 from "../assets/Image/car4.jpg"
import Car5 from "../assets/Image/car5.jpg"
import Car6 from "../assets/Image/car6.jpg"
import Car7 from "../assets/Image/car7.jpg"
import Car8 from "../assets/Image/car10.webp"

const TTT = () => {
    return (
        <>
            <h2 className='text-hading'>Toy...</h2>
            <div className="home-card-container">
                <div className="card-index">
                    <img className='card-img' src={Car1} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car2} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car3} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car4} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car5} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car6} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car7} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
                <div className="card-index">
                    <img className='card-img' src={Car8} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                </div>
            </div>
        </>)
}

export default TTT