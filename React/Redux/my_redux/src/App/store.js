import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../Slice/UserSlice";

let store=configureStore({
    reducer:{
        userInfo:useReducer
    }
})
 
export default store;