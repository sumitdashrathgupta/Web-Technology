import React from "react";
import "./style.css";

class Product extends React.Component {
    render() {
        let Data = window.fetch("../product.json")
        let finaldata=Data.json();
        let { title, price, description, image } = finaldata
        return <>
          
        </>
    }
}
export default Product;

