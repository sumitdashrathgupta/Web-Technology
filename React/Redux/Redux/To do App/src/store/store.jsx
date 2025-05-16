import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "../Slice/CreateSlice"

const Store=configureStore({
    reducer:CreateSlice
})

export default Store