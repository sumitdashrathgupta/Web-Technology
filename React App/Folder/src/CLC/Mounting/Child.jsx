import React, { Component } from "react";

export default class child extends Component {
    constructor() {
        super()
        this.state = {
            count: -2
        }
        console.log("Child Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Child getderifrom props")
        console.log(props)
        return { count: props.count + 4 }
    }

    componentDidMount() {
        console.log("Child Component did mount")
    }

    render() {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
            </>
        )
    }

}