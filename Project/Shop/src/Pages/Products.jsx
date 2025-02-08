import React from "react";
import "./Style/Products.css";
import luxImg from "../Components/Assets/Lux.png";
import shampooImg from "../Components/Assets/Shampoo.png";
import colgateImg from "../Components/Assets/Colgate.png";
import toothbrushImg from "../Components/Assets/toothbrush.png";
import tideImg from "../Components/Assets/Tide.webp";
import riceImg from "../Components/Assets/Rice.png";
import masoorImg from "../Components/Assets/Masoor Dal.png";
import sugarImg from "../Components/Assets/Sugar.png";
import wheatImg from "../Components/Assets/Wheat.png";
import saltImg from "../Components/Assets/Salt.png";


const Products = () => {
  return (
    <section id="products">
      <h2>Products</h2>
       <div className="product-list">
        <div className="product">
          <img src={luxImg} alt="Lux" className="product-image" />
          <h3>Lux</h3>
           </div>
        <div className="product">
          <img src={shampooImg} alt="Loreal" className="product-image" />
          <h3>Loreal</h3>
        </div>
        <div className="product">
          <img src={colgateImg} alt="Colgate" className="product-image" />
          <h3>Colgate</h3>
        </div>
        <div className="product">
          <img src={toothbrushImg} alt="Sensodyne" className="product-image" />
          <h3>Sensodyne</h3>
        </div>
        <div className="product">
          <img src={tideImg} alt="Tide" className="product-image" />
          <h3>Tide</h3>
        </div>
      </div>

      <h2>Grocery</h2>
      <div className="product-list">
        <div className="product">
          <img src={riceImg} alt="Rice" className="product-image" />
          <h3>Rice</h3>
        </div>
        <div className="product">
          <img src={masoorImg} alt="Toor Dal" className="product-image" />
          <h3>Masoor Dal</h3>
        </div>
        <div className="product">
          <img src={sugarImg} alt="Sugar" className="product-image" />
          <h3>Sugar</h3>
        </div>
        <div className="product">
          <img src={wheatImg} alt="Wheat" className="product-image" />
          <h3>Wheat</h3>
        </div>
        <div className="product">
          <img src={saltImg}alt="Salt" className="product-image" />
          <h3>Salt</h3>
        </div>
      </div>
    </section>
  );
};

export default Products;
