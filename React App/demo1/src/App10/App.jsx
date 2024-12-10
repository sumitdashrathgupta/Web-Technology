//! how to create the ref and pass the ref in CBC:

/*import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.divRef = React.createRef()
  }
  
  handleClick = (e)=>{
    console.log(this.divRef);
    this.divRef.current.style.background = "green";
  };
  render(){
    console.log(this.divRef);
    return(
      <>
        <div className="container" ref={this.divRef} onClick={this.handleClick}>
          div
        </div>
      </>
    )
  }
}
export default App;*/

//? how to create the ref and pass the ref in FBC:

/*import React, { useRef } from "react";
const App = () => {
    let divRef = useRef();
    const handleClick = (e) => {
        console.log(divRef);
        divRef.current.style.background = "yellow";
    };
    return <div className="container" onClick={handleClick} ref={divRef}>div</div>
}

export default App;*/

// managing the focus:

import React from 'react'

const App = () => {
    let inputRef = useRef();
    let handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input type="text"
                name="text"
                id="text"
                placeholder='Enter value'
                ref={inputRef}
            />
            <button type='button' onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
export default App;


// how to control the media player using refs:

/*import video from "./p1.mp4";
import React , {useRef, useState} from "react";

const App = ()=>{
  let videoRef = useRef();
  let [text,setText] = useState("");
  let [play,setPlay] = useState(false);
  const handleClick = ()=>{
    setPlay((prev)=>!prev);
    if(play){
      videoRef.current.play();
      setText("playing");
    } else{
      videoRef.current.pause();
      setText("");
    }

    return (
      <div>
        <h1>{text}</h1>
        <video src={video}
        height={"400px"}
        width={"500px"}
        ref={videoRef}
        onClick={handleClick}
        ></video>
      </div>
    )
  }
}

export default App;*/