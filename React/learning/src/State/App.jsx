import { Component } from "react";

class App extends Component{
    // state={
    //     name:"sumit",
    //     id:13,
    //     subject:["html","css","javascript"]
    // }

    constructor(){
        super()
        this.state={
            name:"sumit",
            id:23,
            Skills:["c++","java","python"]
        }
    }

    demo(){
        setTimeout(()=>{
            this.setState({name:"Amit",id:34})
        },3000)
    }

    render(){
        return(
            <>
            <h1>Name:{this.state.name}</h1>
            <h2>Id: {this.state.id}</h2>
            <h3>Subject :{this.state.Skills.map((v,i)=>{
                return <li key={i+1}>{v}</li>
            })}</h3>
            {this.demo()}
            </>
        )
    }
}



export default App