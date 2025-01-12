import React, { Component } from "react";

export default class Child extends Component {
    constructor(){
        
    }
    render() {
        let {name, id} = this.props
        return (
            <>
                <h2>This is a Child</h2>
                <h1>{id}</h1>
                <h1>{name}</h1>
                {console.log("Child")}
            </>
        )
    }
}