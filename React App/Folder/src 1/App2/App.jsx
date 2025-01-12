//? It is CBC using state 

import React, { Component } from "react";

export default class App extends Component {
    //! By using property

    /* state = {
         name: "sumit",
         Id: 564,
         skills: ['sql', 'react', 'javascript']
     }*/

    //! by using constructor
    constructor() {
        super();
        this.state = {
            name: "sumit",
            Id: 564,
            skills: ['sql', 'react', 'javascript'],

        }
        // console.log(this)
    }

    //! How to update states value using setstate() in CBC

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "nagu", Id: 678 })
        }, 3000)
    }
    
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h2>{this.state.Id}</h2>
                {/* <h3>{this.state.skills}</h3> */}
                <h3>
                    <ul>
                        {this.state.skills.map((v, i) => {
                            return <li key={i + 1}>{v}</li>
                        })}
                    </ul>
                </h3>
            </>
        )
    }
}