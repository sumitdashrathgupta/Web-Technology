import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../slicefolder/counterSlice';

const store = configureStore({
    reducer: CounterReducer
});

export default store;
