import { configureStore } from "@reduxjs/toolkit";
import DataInc from "../CreateSlice"

const Store = configureStore({
  reducer: DataInc
});
export default Store;
