import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {
    constructor(){
        super();
        this.state = {count :0};
        console.log("constructor rendered parent");        
    }
    static getDerivedStateFromProps(props,state){
        console.log(props,state);
        console.log("getDerivedStateFromProps method Parent");
        return null;      
    }
    componentDidMount(){
        console.log("componentDidMount Parent");        
    }
    render() {
        console.log("render method parent");        
    return (
      <div>
        <h1>hello world</h1>
        <Child count={this.state.count} />
      </div>
    )
  }
}