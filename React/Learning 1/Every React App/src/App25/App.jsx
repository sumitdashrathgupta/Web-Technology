//! updateing phase and unmounting phase

import { Component } from "react";
import Child from "./Child"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        console.log("Constructor");
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, PrevState) {
        console.log("getSnapshotBeforeUpdate");
        return { prevProps, PrevState }
    }
    componentDidUpdate(props, state, Snapshotvalue) {
        console.log("componentDidUpdate");
        console.log(Snapshotvalue);
    }
    render() {
        console.log("Render");
        return (
            <>
                <h1>{this.state.count}</h1>
                <button type="button" onClick={(e) => this.setState({ count: this.state.count + 1 })}>INC</button>
                {this.state.count <= 5 ? <Child count={this.state.count} /> : null}
            </>
        )
    }
}