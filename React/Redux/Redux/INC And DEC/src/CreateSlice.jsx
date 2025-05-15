import { createSlice } from "@reduxjs/toolkit";

const state = {
  count: 0,
};

const DataInc = createSlice({
  name: "counter",
  initialState: state,
  reducers: {
    Increment: (state, action) => {
      state.count += 1;
    },
    Decrement: (state, action) => {
      state.count -= 1;
    },
    IncrementByAdd: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { Increment, Decrement, IncrementByAdd } = DataInc.actions;
export default DataInc.reducer;