import React from "react";
import "./Style/Home.css";
import productImg from '../Components/Assets/product_image.png';
import AutoType from "./Animation";
import Product from "./Products"

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="content">
          <h1>Search <span><AutoType /></span></h1>
          <p>Welcome to DigiShop, your ultimate destination for cutting-edge gadgets! Explore the latest in tech innovation and style with us. Shop now and discover a world of possibilities!</p>
          <a href="#products" className="btn">Shop Now</a>
        </div>
        <div className="image-container">
          <img src={productImg} alt="Grocery Shopping" />
        </div>
      </section>
      <Product />
    </>
  );
};

export default Home;
