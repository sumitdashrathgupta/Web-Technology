import React from 'react'
import image1 from './Image/work1.jpg'


const TTT = (pr) => {
    return (
        <>
            <h2 className='text-hading'>Toy...</h2>
            <div className="home-card-container">
                <div className="card-index">
                    <img className='card-img' src={image1} alt="image1" />
                    <h3 className='title-card text-w'>Titel</h3>
                    <p className='price-card text-w'>Price</p>
                    <p className='discription-card '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias, culpa, dolorum saepe labore libero iure tenetur.</p>
                </div>
            </div>
        </>)
}

export default TTT