import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: ["Apple"]
}

const CreateSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        Add: (initialState, action) => {
            initialState.item.push(action.payload)
        },
        Remove: (initialState, action) => {
           initialState.item = initialState.item.filter((_, index) => index !== action.payload);
        }
    }
})

export const { Add, Remove } = CreateSlice.actions
export default CreateSlice.reducer