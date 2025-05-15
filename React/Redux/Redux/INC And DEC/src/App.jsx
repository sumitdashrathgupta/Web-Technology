import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, IncrementByAdd } from "./CreateSlice";

const App = () => {
  const select = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{select}</h1>
      <button onClick={() => dispatch(Increment())}>Inc</button>
      <button onClick={() => dispatch(Decrement())}>Dec</button>
      <button onClick={() => dispatch(IncrementByAdd(10))}>Inc+10</button>
    </>
  );
};

export default App;
