import React, { Component } from "react";

export default class Login extends Component {
    render() {
        let { name, id } =this.props
        return (
            <>
                <h1>Name : {name}</h1>
                <h2>Id:{id}</h2>
            </>
        )
    }
}