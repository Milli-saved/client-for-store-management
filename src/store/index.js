import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/UserReducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
