import React, { Component } from "react";

export default class Child extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

