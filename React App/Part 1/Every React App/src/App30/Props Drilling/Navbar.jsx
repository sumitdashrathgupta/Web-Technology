import React, { Component } from "react";
import Login from "./Login"

export default class Navbar extends Component {
    render() {
        let { name, id } =this.props
        return (
            <>
                <Login name={name} id={id} />
            </>
        )
    }
}