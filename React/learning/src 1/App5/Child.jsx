import React, { Component } from "react";

export default class Child extends Component {
    componentWillUnmount() {
        console.log("Remove")
    }
    render() {
        return (
            <>
                <h1>count from child :{this.props.count}</h1>
                <h1>Child Component</h1>
            </>
        )
    }
}