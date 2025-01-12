import React, { Component } from "react";
import Child from "./Child"

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("constructro")
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props, state)
        return null
    }

    shouldComponentUpdate() {
        console.log("ShouldUpadte")
        return true;
    }

    getSnapshotBeforeUpdate(preprops, prevstate) {
        console.log("getSnapshotBeforeUpdate")
        return { preprops, prevstate }
    }

    componentDidUpdate(props, state, snapshotvalue) {
        console.log("componentDidUpdate")
        console.log(snapshotvalue)
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        console.log("Parent")
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button type="button" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
                {this.state.count <= 5 ? <Child count={this.state.count} /> : null}
            </>
        )
    }
}