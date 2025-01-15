import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Navbar from "./Components/Navbar"
import User from "./Components/User"
import UserD from "./Components/UserD"

const RouterApp=()=>{
    let element=useRoutes([
        {path:"/", element:<Home/>},
        {path:"/About", element:<About/>},
        {path:"/Service", element:<Service/>,
            children:[
                {index:true ,element:<User/>},
                {path:":data" ,element:<UserD/>},
            ]
        },
    ])
    return element
}

const App=()=>{
    return(
        <>
        <Navbar/>
        <RouterApp/>
        </>
    )
}

export default App



























// import React from "react";
// // import { Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import Service from "./Components/Service";
// import About from "./Components/About";
// // import Navbar from "./Components/Navbar";
// import { useRoutes } from "react-router-dom";


// const App = () => {
//     let Elements = useRoutes([
//         {
//             path: "/",
//             element: <Home />
//         },
//         {
//             path: "/About",
//             element: <About />
//         },
//         {
//             path: "/Service",
//             element: <Service />
//         }    
//     ])
//     return Elements
//     // return (
//     //     <>
//     //         <Navbar />
            
//     //         {/* <Routes>
//     //             <Route path="/" element={<Home />} />
//     //             <Route path="/About" element={<About />} />
//     //             <Route path="/Service" element={<Service />} />
//     //         </Routes> */}
//     //     </>
//     // )
// }

// export default App



