import { createSlice } from "@reduxjs/toolkit";

let initialState = {count: 0}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (initialState)=>{
            initialState.count+=1;
        },
        decrement: (initialState)=>{
            initialState.count-=1;
        },
        incrementByAction: (initialState,action)=>{
            initialState.count+=action.payload
        }
    }
});

export const {increment,decrement,incrementByAction} = counterSlice.actions;
export default counterSlice.reducer;