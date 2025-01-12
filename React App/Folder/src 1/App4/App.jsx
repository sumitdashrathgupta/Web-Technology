import React, { Component } from "react";
import Child from "./Child"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("Constructor")
    }
    static getDerivedStateFromProps(state, props) {
        console.log(props, state)
        console.log("getdrvedstatefromprops")
        return null;
    }

    componentDidMount() {
        console.log("Last Component did mount")
    }

    render() {
        console.log("Render")
        return (
            <>
                <h1>Count :{this.state.count}</h1>
                <Child name='Sumit' id='234' />
            </>
        )
    }
}