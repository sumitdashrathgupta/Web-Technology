import React, { Component } from "react";

export default class Child extends Component {
    componentWillUnmount(){
        console.log("Clear data")
    }
    render(props) {
        console.log("child")
        return (
            <>
                <h1>Count :{this.props.count} </h1>
            </>
        )
    }
}