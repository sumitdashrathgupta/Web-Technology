import { createSlice } from "@reduxjs/toolkit";

let initialState={
    users:[],
}

export let UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.users=[...state.users,action.payload]
        },
        deleteUser:(state,action)=>{
            state.users=state.users.filter(
                (user,index)=>index !==action.payload
            )
        }
    }
})

export let {setUser,deleteUser}=UserSlice.actions
export default UserSlice.reducer

