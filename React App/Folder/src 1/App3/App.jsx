import { Component } from "react";
import Child from "./Child";
export default class App extends Component {
    render() {
        return (
            <>
                <Child 
                name={"sumit"}
                id={232}
                skills={[11,3,4,2,6]}
                />
            </>
        )
    }
}