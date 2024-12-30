import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Child extends Component {
    render() {
        let { name, id } =this.props
        return (
            <>
                <Navbar name={name} id={id} />
            </>
        )
    }
}