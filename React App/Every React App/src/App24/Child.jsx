import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = { count: -1 };
    console.log("constructor child");
  }
  static getDerivedStateFromProps(p, s) {
    console.log("getDerivedStateFromProps Child");
    console.log(p);
    return { count: p.count + 4 };
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
  render() {
    console.log("render child");
    return (
      <div>
        <h2>count: {this.state.count}</h2>
        <h2>child component</h2>
      </div>
    );
  }
}
