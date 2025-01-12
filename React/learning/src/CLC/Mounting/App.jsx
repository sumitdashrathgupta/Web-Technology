import React, { Component } from "react";
import Child from "./Child"

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Getderivedstatefromprps")
        console.log(props, state)
        return null
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.log("parent render")
        return (
            <>
                <h1>Data System</h1>
                <Child count={this.state.count} />
            </>
        )
    }
}