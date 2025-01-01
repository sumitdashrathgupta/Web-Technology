//! Receiving the props in FBC

import { Component } from "react";

/*import React from "react";
import Logo from "./Logo"

const Child = (props) => {
    console.log(props);
    return (
        <>
            <Logo />
            <h1>Child Component</h1>
            <h2>name : {props.name}</h2>
            <h3>id : {props.id}</h3>
            <ol>
                {props.skills.map((v, i) => {
                    return <li key={i + 1}>{v}</li>
                })}
            </ol>
            <h1>{props.demo()}</h1>
        </>
    )
}

export default Child;
*/


export default class Child extends Component {
    render() {
        // console.log(this.props);
        let { id, name, demo, skills } = this.props;
        return (
            <>
                {/* <h1>Name :{this.props.name}</h1> */}
                <h1>Name :{name}</h1>
                <h2>Id : {id}</h2>
                <ol>
                    {skills.map((v, i) => {
                        return <li key={i + 1}>{v}</li>
                    })}
                </ol>
                <h2>{demo()}</h2>
            </>
        )
    }
}