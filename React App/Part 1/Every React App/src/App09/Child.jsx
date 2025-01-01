//? How to set the default value for props:

/*import React, { Component } from "react";
export default class Child extends Component {
    static defaultProps = {
        name: "NA",
        id: "NA",
        demo: "NA"
    }
    render() {
        console.log(this.props);
        let { id, name, demo } = this.props
        return (
            <>
            Or operator
                <h1>name: {this.props.name || "NA"}</h1>
                <h2>id: {id || "NA"}</h2>
                <h2>{demo() || "NA"}</h2>
                <h1>Name :{this.props.name}</h1>
                <h2>id:{id}</h2>
                <h2>{demo()}</h2>
            </>
        )
    }
}

OutSide the class

Child.defaultProps = {
    name: "NA",
    id: "NA",
    demo: "NA"
}*/

//                                                                     PropTypes

/*import React, { Component } from "react";
import PropTypes, { propType } from "prop-types";

export default class Child extends Component {

    render() {
        // console.log(this.props)
        let { id, name, demo } = this.props
        return (
            <>
                <h1>Name :{this.props.name}</h1>
                <h2>id:{id}</h2>
                <h2>{demo()}</h2>
            </>
        )
    }
}

Child.PropTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    demo: PropTypes.func,
}
*/

//! How to treansfer the data from child to parent

import React from "react";

const Child = ({ sendData }) => {
    return (
        <>
            <button type="button" onClick={() => {
                sendData("Bhabhi") }}
           > Send Data </button>
        </>
    )
}

export default Child;

