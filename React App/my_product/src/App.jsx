import React from 'react'
import "./style.css"
import product from "./data.json"

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            finaldata: product
        }
    }
    render() {
        return (
            <div className="contenar">
                {this.state.finaldata.map((v, i) => {
                    const { title, price, description, image } = v;
                    return (
                        <div key={i} className="product">
                            <img src={image} alt={title} />
                            <h1>{title}</h1>
                            <p>Price: ${price}</p>
                            <p>{description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

