//? INC AND DEC state value using CBC

import { Component } from "react";

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            Count: 0
        }
    }
    render() {
        return (
            <>
                <h1>Count :{this.state.Count}</h1>
                <button onClick={() => { this.setState({ Count: this.state.Count + 1 }) }}>INC</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => { this.setState({ Count: this.state.Count - 1 }) }}>DEC</button>
            </>
        )
    }
}