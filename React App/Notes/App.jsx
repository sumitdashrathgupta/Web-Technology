//^--------------------------------COMPONENETS--------------------------------------------------------------------------
//~---------------------------------02/12/2024-------------------------------------------------------------------------------
//!class based components
// import React from "react";

// class App extends React.Component{
//     render(){
//         return <h1>Hello world</h1>;
//     }
// }
// export default App;

//~-----------------------------------------------------------------------------------------------------------------
//~------------------------------------------03/12/2024--------------------------------------------------------------
//~-----------------------------------------------------------------------------------------------------------------

//!function based componenet
// import React from "react";

// function App () {
//     return <h1>HELLO WORLD!!!!!!!</h1>
// }

// export default App;


//^HOW TO DEFINE THE STATE IN CLASS BASED COMPONENT
// import React, {Component} from "react";

// class App extends Component{
//     //& by using state property
//     // state = {
//     //     name:"samiksha",
//     //     id: 101,
//     //     skills: ["js", "java"],
    
//     // };
//     //& by using constuctor 
//     constructor(){
//         super();
//         this.state = {
//             name:"SAMIKSHA",
//             id: 102,
//             skills :["js", "reacct"],
//         };
//         console.log(this);//!app component 
//     }
//     render(){
//         return(
//             <div>
//                 <h1>USERNAME: {this.state.name}</h1>
//                 <h2>ID:{this.state.id}</h2>
//                 <h3>Skills:
//                     <ul>
//                         {this.state.skills.map((v) => {
//                             return <li>{v}</li>
//                         })}
//                     </ul>
//                 </h3>
//             </div>
//         );
//     }
// }
// export default App;

//^HOW TO UPDATE SATATE VALUE IN CBC
// import React, {Component} from "react";

//  export default class App extends Component {
//     constructor(){                   
//         super();
//         this.state = {
//             name:"SAMIKSHA",
//             id: 10,
//         };
//         console.log(this);//!app component 
//     }
//     render() {
//         setTimeout(() => {                     //!use settimeout in render method is best way to set value to state
//             this.setState({name:"sachin",  id: 200});
//         }, 3000);
//         return(
//             <div>
//                 <h1>Username: {this.state.name}</h1>
//                 <h2>id: {this.state.id}</h2>
//             </div>
//         );
//     }
//  }



//*----------------------------------------------TASK1-------------------------------------------------
// import React from "react";
// import shoping from "./data.json"; // Importing the data

// const App = () => {
//   // Define styles as JavaScript objects
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     justifyContent: "center",
//     backgroundColor: "antiquewhite",
//     padding: "20px",
//   };

//   const headerStyle = {
//     backgroundColor: "#e7f30d",
//     textAlign: "center",
//     padding: "10px",
//     borderRadius: "4px",
//   };

//   const cardStyle = {
//     width: "300px",
//     border: "1px solid black",
//     borderRadius: "8px",
//     padding: "16px",
//     color: "white",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     backgroundColor: "rgb(28, 151, 135)",
//     textAlign: "center",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "auto",
//     maxHeight: "300px",
//     objectFit: "cover",
//     borderRadius: "4px",
//   };

//   return (
//     <div>
//       <h1 style={headerStyle}>Product List</h1>
//       <div style={containerStyle}>
//         {shoping.map((pr) => (
//           <div key={pr.id} style={cardStyle}>
//             <img style={imageStyle} src={pr.image} alt={pr.title} />
//             <p>Product ID: {pr.id}</p>
//             <h3>{pr.title}</h3>
//             <p>{pr.description}</p>
//             <p>Category: {pr.category}</p>
//             <p>Price: ${pr.price}</p>
//             <p>
//               Rating: {pr.rating.rate} ({pr.rating.count} reviews)
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

//~------------------------------------------------------------------------------------------------------------------------
//~-----------------------------------------04/12/2024-------------------------------------------------------------------------
//~---------------------------------------------------------------------------------------------------------------------------------

//^HOW TO ITERATE THE STATE VALUE IN JSX::::

// import React from "react";

// class App extends React.Component{
//     constructor () {
//         super();
//         this.state = {
//             employee: [
//                 {
//                     name: "samiksha",
//                     id: 101,
//                 },
//                 {
//                     name: "renuka",
//                     id: 102,
//                 },
//                 {
//                     name: "khushi",
//                     id: 103,
//                 }
//             ]
//         }

        
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.employee.map((v,i) => {
//                     let {name, id} = v;
//                     return (
//                         <div>
//                         <h1>{name}</h1>
//                         <h2>{id}</h2>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// export default App;

//^HOW CAN WE DEFINE STATE IN FUNCTION BASED COMPONENT:::::::::::::::
//   import React from "react";
//    const App = () => {
//     let result = React.useState (10);
//     console.log(result);

//     let setResult = result[1];
//     setTimeout( () => {
//         setResult(4000);
//     },4000);
//     return (
//         <>
//         <h1>hello world</h1>
//         <h2>{result[0]}</h2>
//             </>
//     )
//    }

//    export default App;

// ^HOW TO ITERATE THE STATE VALUE IN FBC:::::::::::::::::::::

// import {useState, Fragment} from "react";

// const App = () => {
//     let [employee, setEmployee] = useState ([
//         {
//             name: "samiksha",
//             id : 101,
//         },
//         {
//             name: "samiksha",
//             id : 101,
//         },
//         {
//             name: "samiksha",
//             id : 101,
//         }
//     ]);
//     // console.log(employee);
//     // console.log(setEmployee);

//     return (
//         <div>
//             {employee.map((v,i) => {
//                 return (
//                     <Fragment key = {i + 1}>
//                     <h1> name : {v.name}</h1>
//                     <h2> id: {v.id}</h2>
//                 </Fragment>
//                 )
//             })}
//         </div>
//     );
// };
// export default App;

//^how to handle events in cbc::::::::::::::::::

// import React, {Component} from "react";
// import "./global.css";

// export default class App extends Component {
//     render () {
//         return (
//             <div className="main">
//                 <div className="container"
//                     onClick={ (e) => {
//                         e.target.style.background = "hotpink";
//                     }}></div> 
//                      </div>
//         )
//     }
// }


//*----------------------------------------------TASK2-----------------------------------------------------
// ^how to handle events in fbc:::::::::::::::::: 

// import React from 'react';
// import "./global.css"

// const App = () => {
//     return (
//         <div className='main'>
//             <div className='container'
//             onClick={ (e) => {
//                 e.target.style.background = "red";
//             }}></div>
            
//         </div>
//     );
// }

// export default App;

//~-------------------------------------------------------------------------------------------------------------------------------------
//~---------------------------------------------05/12/2024-----------------------------------------------------------
//~----------------------------------------------------------------------------------------------------------------------

//^INCREMENT DECREMENT RESET IN CLASS BASED COMPONENET:::::::::::::::::::::::::::

// import React, { Component } from "react";

// class App extends Component {
//     constructor () {
//         super();
//         this.state = {
//             count : 0,
//         };
//     }

//     Increment = (e) => {
//         console.log("Increment");
//         this.setState({count: this.state.count + 1});
//     };
//     Decrement = (e) => {
//         console.log("Decrement");
//         this.setState({count: this.state.count - 1});
//     };
//     Reset = (e) => {
//         console.log("Reset");
//         this.setState({count : 0});
//     };

//     render () {
//         console.log(this);
//         return (
//             <React.Fragment>
//                 <h1>Count : {this.state.count}</h1>
//                 <button onClick={this.Increment}>Inc</button>
//                 <button onClick={this.Decrement}>Dec</button>
//                 <button onClick={this.Reset}>Reset</button>

//             </React.Fragment>
//         )
//     }


// }

// export default App;

//^INCREMENT DECREMENT RESET IN FUNCTION BASED COMPONENET:::::::::::::::::::::::::::

// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//     let [count, setCount] =useState(0);
//     return (
//         <React.Fragment>
//             <h1>Count: {count}</h1>
//             <button onClick={(e) => setCount(count + 1)}>Increment</button>
//             <button onClick={(e) => setCount(count - 1)}>Decrement</button>
//             <button onClick={(e) => setCount(0)}>reset</button>
//         </React.Fragment>
//     );
// }

// export default App;


//^By using function that depends on prev value ::::::::::::::::::::::
// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//     let [count, setCount] =useState(0);
//     let handleMouseOver = (e) => {
//         // setCount(Count + 1);
//         // setCount(Count + 1);
//          setCount((prev) => {
//             console.log(prev);
//             return prev + 1;
//          });
//          setCount((prev) => {
//             console.log(prev);
//             return prev + 1;
//          });

//     }
//     return (
//         <React.Fragment>
//             <h1 onMouseOver={handleMouseOver}>Count: {count}</h1>
            
//         </React.Fragment>
//     );
// }

// export default App;

//^Mouseover event passing function as an agrument for updater function::::::::::::::::::::
//^how to bind the value for thi keyword inside event handler function:::::::::::::::::::

// import React, {Component} from "react";

// export default class App extends Component{
//     constructor () {
//         super();
//         this.state = {count : 0};
//         this.handleMouseOver = this.handleMouseOver.bind(this);

//     }

//     // handleMouseOver = (e) => {
//     //     console.log(this);
//     //     this.setState((prev) => {
//     //         console.log(prev);
//     //         return {count : prev.count + 1};

//     //     });
//     // }

//     handleMouseOver = function() {
//         console.log(this);
//         this.setState((prev) => {
//             console.log(prev);
//             return {count : prev.count + 1};
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <h1 onMouseOver={this.handleMouseOver}>Count: {this.state.count}</h1>
//             </div>
//         );
//     }
// }

//~--------------------------------------------------------------------------------------------------------------------
//~------------------------------------------06/12/2024-----------------------------------------------------------------
//~----------------------------------------------------------------------------------------------------------------------

//^props: sending the props in CBC::::::::::::::::::::::::::::::::::::::


// import React, { Component } from "react";
// import Child from "./Child";

// export default class App extends Component {
//     demo() {
//         console.log("demo function");
//         return "demo function";
//     }
//     render() {
//         return (
//             <div>
//                <Child name={"samiksha"} id={123} skills={["js","java","python"]}
//                demo={this.demo}/>
//                <h2>End</h2>
//             </div>
//         )
//     }
// }

//^props: sending the props in CBC::::::::::::::::::::::::::::::

// import React from 'react';
// import Child from './Child';

// const App = () => {
//     function demo () {
//         return "demo function";
//     }
//     return (
//         <div>
//             <h1>hello world</h1>
//             <Child name={"samiksha"} id={123} skills={["js","java","python"]}
//                demo={demo}/>
//                <Child name={"minu"} id={123} skills={["js","java","python"]}
//                demo={demo}/>
//         </div>
//     );
// }

// export default App;

//~--------------------------------------------------------------------------------------------------------------------
//~--------------------------------------------09/12/2024--------------------------------------------------------------
//~--------------------------------------------------------------------------------------------------------------------

//^How to set the default value for props::::::::::::::;

// import React from 'react';
// import Child from './Child';

// const App = () => {
//     function demo () {
//         return "demo function";
//     }
//     return (
//         <div>
//             <h1>hello world</h1>
//             <Child  id={123}  name = {"samiksha"}
//                demo={demo}/>

//                <Child name={"minu"} id= {145}
//                demo={demo}/>
//                <Child name={"pratik"} id={123} 
//                demo={demo}/>
//         </div>
//     );
// }

// export default App;

//^how ro transfer dta from child to parent:::::::::::::

// import React, { useState } from 'react';
// import Child from './Child';

// const App = () => {
//     let [data, setData] = useState("text");
//     let sendData = (val) => {
//         setData(val);
//     }
//     return (
//         <div>
//             <h1> data : {data} </h1>
//             <Child sendData={sendData}/>
//         </div>
//     );
// }

// export default App;

//^ how to generate random images from faker by clicking::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// import React, { useState } from 'react';
// import {faker} from "@faker-js/faker";

// const App = () => {
//     let [data, setData] = useState(faker.image.avatarGitHub());
//     let handleClick = (e) => {
//         setData(faker.image.avatarGitHub());
//     };
//     return (
//         <div>
//             <img src={data} alt = "img-1" style={{width: "600px", height: "450px"}}></img>
//             <button onClick={handleClick}>change image</button>
            
//         </div>
//     );
// }

// export default App;

//~------------------------------------------------------------------------------------------------------------------------
//~---------------------------------------------10/12/20204----------------------------------------------------------------
//~------------------------------------------------------------------------------------------------------------------------

//^how to create the ref and pas sthe ref in CBC::::::::::::::::::::::::::::
// import React, { Component } from 'react';
// import "./global.css";

// class App extends Component {
//     constructor() {
//         super();
//         this.divRef = React.createRef();
//     }
//     handleClick = (e) => {
//         console.log(this.divRef);
//         this.divRef.current.style.background = "blue";
//     };
//     render() {
//         console.log(this.divRef);
//         return (
//             <>
//             <div className='container' ref={this.divRef} onClick={this.handleClick}>div</div>
//                 </>
//         );
//     }
// }

// export default App;

//^how to create the ref and pass the ref in FBC:::::::::::::::::

// import React from 'react';
// import { useRef } from 'react';

// import "./global.css";

// const App = () => {
//     let divRef = useRef();
//     const handleClick = (e) => {
//         console.log(divRef);
//         divRef.current.style.background = "green";
//     };
//     return (
//         <div className='container' onClick={handleClick} ref={divRef}>div
            
//         </div>
//     );
// }

// export default App;

//^ USING REF------- managing the focus:::::::::::::::::::::::::::::;

// import React, {useRef} from 'react';

// const App = () => {
//     let inputRef = useRef();
//     let handleClick = (e) => {
//         inputRef.current.focus();
//     };
//     return (
//         <div>
//             <input type='text' name='text' id='text' placeholder='Enter value' ref={inputRef}></input>
//             <button type='button' onClick={handleClick}>focus</button>
//         </div>
//     );
// }

// export default App;

//^USING REF ----------------------how to control media player using refs::::::::::::::::::

// import video from 




//~----------------------------------------------------------------------------------------------------------------------------------
//~--------------------------------------------11/12/2024--------------------------------------------------------------------------------
//~--------------------------------------------------------------------------------------------------------------------------------------

//^------------------------------------------Conditinal rendering-----------------------------------------------------
//&using if else

// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//     let [isLoggedIn, setIsLoggedIn] = useState(true);
//     let handleClick = function (e)  {
//         setIsLoggedIn(false);

//     };
//     if(isLoggedIn) {
//     return (
//         <div className='container'>   // give css 
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>products</li>
//                     <li>about us</li>
//                     <li>sachin</li>
//                     <li onClick={handleClick}>log out</li>
//                 </ul>
//             </nav>
//         </div>
//     );
// } 

// else {
//     return (
//         <div className='container'> 
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>products</li>
//                     <li>about us</li>
//                     <li>log in</li>
//                     <li>sign up</li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };
// };

// export default App;

//& using ternary operator:::::::::::::::;

// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//     let [isLoggedIn, setIsLoggedIn] = useState(true);
//     let User = () => {
//         return (
//             <>
//             <li>Sachin</li>
//             <li onClick={(e) => {
//                 setIsLoggedIn(false)}}>log out</li>
//             </>
//         )
//     }
//     let Guest = () => {
//         return (
//             <>
//             <li>log in</li>
//             <li>Sign up</li>
//             </>
//         )
//     }
//     return (
//         <div className='container'>    
//             <nav>
//                 <ul className= {isLoggedIn ? "active" : "inactive"}> // used to give classname for true and false 
//                     <li>home</li>
//                     <li>products</li>
//                     <li>about us</li>
//                     {isLoggedIn ? <User/> : <Guest/>}
//                 </ul>
//             </nav>
            
//         </div>
//     );
// }

// export default App;

//&using switch case

// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//     let [ isLoggedIn, setIsLoggedIn] = useState (true);
//     switch (isLoggedIn) {
//         case true: 
//         return(
//             <div className='container'>
//                 <nav>
//                     <ul>
//                         <li>home</li>
//                         <li>product</li>
//                         <li>about us</li>
//                         <li>sachin</li>
//                         <li on onClick={(e) => {
//                             setIsLoggedIn(false)}}>log out</li>
//                     </ul>
//                 </nav>
//             </div>
//         );
//         case false: 
//         return(
//             <div className='container'>
//                 <nav>
//                     <ul>
//                         <li>home</li>
//                         <li>product</li>
//                         <li>about us</li>
//                         <li onClick={(e) => {setIsLoggedIn(true)}}>login</li>
//                         <li>signup</li>
//                     </ul>
//                 </nav>
//             </div>
//         )
//         default: 
//         return <></>
//     }
// }

// export default App;

//& using && operator

// import React from 'react';
// import { useState } from 'react';
// import { FaBell } from "react-icons/fa";

// const App = () => {
//     let [notifications, setNotifications] = useState([
//         "Samiksha",
//         "pratik",
//         "ritick",
//     ]);
//     return (
//         <div>
//             <h1>
//                 <FaBell /> <sup>{notifications.length > 0 && notifications.length}</sup>
//                 </h1>
//         </div>
//     );
// }

// export default App;

//~-------------------------------------------------------------------------------------------------------------------------------------
//~------------------------------------------------12/12/2024---------------------------------------------------------------------------------
//~-----------------------------------------------------------------------------------------------------------------------------------------
//^Uncontrolled component:::::::::::::::::::::::::::::::

// import React from 'react';
// import { useRef } from 'react';

// const App = () => {
//     let UsernameRef = useRef();
//     let passwordRef = useRef();
//     let formRef = useRef();
//     let handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log({
//         //     Username : UsernameRef.current.value,
//         //     password: passwordRef.current.value,
//         // });
//         var formData = new FormData(formRef.current);
//     var finalData = Object.fromEntries(formData)
//     console.log(finalData);
//     };
//     return (
//         <div>
//             <form className='form-control' onSubmit={handleSubmit} ref={formRef}>
//                 <input type='username' name='username' id='username' placeholder='ENter username' ref={UsernameRef}></input>
//                 <input type='password' name='password' id='password' placeholder='enter password' ref={passwordRef}></input>
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     );
// }

// export default App;


//^controlled component::::::::::::::;;

//!in fbc
// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//     let [username, setUsername] = useState(""); 
//     let [password, setPassword] = useState("");
//     let handleSubmit = (e) => {
//          e.preventDefault();
//          console.log({username:username,password:password});
//     };
//     return (
//         <div>
//             <form className='form-control' onSubmit={handleSubmit}>
//                <input type='username' name='username' id='username' placeholder='ENter username' onChange={(e) => setUsername(e.target.value)}></input>
//                <input type='password' name='password' id='password' placeholder='enter password' onChange={(e) =>setPassword(e.target.value)}></input>
//                 <button type='submit'>submit</button>

//             </form>
            
//         </div>
//     );
// }

// export default App;

//!in cbc

// import React, { Component } from 'react';

// class App extends Component {
//     constructor () {
//         super();
//         this.state = {
//             username :"",
//             password: "",
//         };
//     }
//     handleClick= (e) => {
//         e.preventDefault();

//     }
//     handleChange = (e) => {
//         let {name,value} = e.target;
//         this.setState({...})
//     }
//     render() {
//         return (
//             <div>
//                  <form className='form-control' onSubmit={handleSubmit} ref={formRef}>
//                 <input type='username' name='username' id='username' placeholder='ENter username' ref={UsernameRef}></input>
//                  <input type='password' name='password' id='password' placeholder='enter password' ref={passwordRef}></input>
//                 <button type='submit'>submit</button>
//                 </form>

//             </div>
//         );
//     }
// }

// export default App;


//~---------------------------------------------------------------------------------------------------------------------------------------------------------
//~------------------------------------------23/12/2024------------------------------------------------------------------------------------
//~----------------------------------------------------------------------------------------------------------------------------------------------------

//!controlled component
//!Form:::::::::::::::::::::

// import React from 'react';
// import { useState } from 'react';
// import countries from "./country.json"

// const App = () => {
//     let [country , SetCountry] = useState(countries);
//     // console.log(country);
//     let[data, setData] = useState({
//         username : "",
//         password : "",
//         email : "",
//         gender : "",
//         skills : [],
//         country : "",
//     });
//     let handleChange = (e) => {
//         //console.log(e.target.value);
//         let {name, value} = e.target;
//         setData({...data,[name]:value});
//     };
//     let handleChangeSkills = (e) => {
//         let value = e.target.value;
//         if (data.skills.includes(value) == false) { 
//             data.skills.push(value);
//         }
//         else {
//             let i = data.skills.indexOf(value);
//             data.skills.splice(i, 1);
//         };
//         };
//     let handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(data);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                 type='text'
//                 name='username'
//                 id='username'
//                 placeholder='enter username'
//                 onChange={handleChange}
//                 value={data.username}
//                 />
//                 <br></br>
                

//                 <input 
//                 type='password'
//                 name='password'
//                 id='password'
//                 placeholder='enter password'
//                 onChange={handleChange}
//                 value={data.password}
//                 />
//                 <br></br>
                

//                 <input 
//                 type='email'
//                 name='email'
//                 id='email'
//                 placeholder='enter email'
//                 onChange={handleChange}
//                 value={data.email}
//                 />
//                 <br></br>
              

//                 <label htmlFor='gender'>select gender</label>
//                 <div id='gender' onChange={handleChange}>
//                     <input type='radio' name='gender' id='male' value={"male"}/>male
//                     <input type='radio' name='gender' id='female' value={"female"}/>female
//                     <input type='radio' name='gender' id='other' value={"other"}/>other
//                 </div>

//                 <label htmlFor='skills'>skills</label>
//                 <div id='skills' onChange={handleChangeSkills}>
//                 <input type='checkbox' name='skills' id='java' value={"java"}/>java
//                 <input type='checkbox' name='skills' id='js' value={"js"}/>js
//                 <input type='checkbox' name='skills' id='php' value={"php"}/>php
//                 <input type='checkbox' name='skills' id='react' value={"recat"}/>react
//                 <input type='checkbox' name='skills' id='springboot' value={"springboot"}/>springboot
//                 </div>
//                 <br></br>

//                 <label htmlFor='country'>country</label>
//                 <select name='country' onChange={handleChange}>
//                     {country.map(({name}, i) => {
//                         return(
//                             <option value={name} key={i + 1}>
//                                 {name}
//                             </option>
//                         );
//                     })};
//                 </select>
//                 <br></br>

//                 <button type='submit'>submit</button>
//             </form>
            
//         </div>
//     );
// }

// export default App;

 //~-------------------------------------------------------------------------------------------------------------
 //~--------------------------------------24/12/2024------------------------------------------------------------------

 //^COMPONENT LIFE CYCLE (Mounting Fhase) in Class based component:
 //!Example for getDerivedSateFromProps::::::::::::::::

//  import React, { Component } from 'react';
//  import Child from "./Child";
 
//  class App extends Component {
//     constructor() {
//         super();
//         this.state= {count: 0};
//         console.log("constructor parent");
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log(props, state);
//         console.log("getDerivedFromProps parent");
//         return null;
//     };
//     componentDidMount() {
//         console.log("component did mount parent");
//     };

//     render() {
//         console.log("render parent");
//         return (
//             <div>
//                 <h1>hello world</h1>
//                 <Child count= {this.state.count}/>
//             </div>
//         );
//     }
//  }
 
//  export default App;
 

 //^code of image
 

 

 //~---------------------------------------------------------------------------------------------------------------------------------------
 //~--------------------------------------------25/12/2024----------------------------------------------------------------------------------------
 //~------------------------------------------------------------------------------------------------------------------------------------------------


 //^ updating phase and unmounting: 

 import React, { Component } from 'react';
 import Child from "./Child"
 
 class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        console.log("constructor");
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return null;
    };
    componentDidMount() {
        console.log("componentDidMount");
    };
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    };
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("getSnapshotBeforeUpdate");
        return {prevProps,prevState};
    };
    componentDidUpdate(props, state, snapShotValue){
        console.log("componentDidUpdate");
        console.log(snapShotValue);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button type='button' 
                onClick={ (e) => {
                    this.setState({count: this.state.count + 1})
                }}>
                    Increment
                    </button>
                    {this.state.count < 5 ? <Child count = {this.state.count}/> :null}
            </div>
        );
    }
 }
 
 export default App;
 