import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/UserReducer";
import batchSlice from "./Reducer/BatchReducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    batch: batchSlice.reducer,
  },
});

export default store;
