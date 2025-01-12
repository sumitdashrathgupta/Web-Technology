import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        console.log("Constrauctor")
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("End data")
    }
    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate")
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevstate) {
        console.log("getsnapshotBeforeUpdate")
        return { prevProps, prevstate }
    }

    componentDidUpdate(props,state,Snapshotvalue) {
        console.log("didupdate")
        console.log(Snapshotvalue)
    }

    render() {
        console.log("render")
        return (
            <>
                <h1>{this.state.count}</h1>
                <button type="button" onClick={(e) => this.setState({ count: this.state.count + 1 })}>Inc</button>
                {this.state.count <= 5 ? <Child count={this.state.count} /> : null}
            </>
        )
    }
}