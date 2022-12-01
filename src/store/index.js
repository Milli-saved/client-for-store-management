import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/UserReducer";
import batchSlice from "./Reducer/BatchReducer";
import storeSlice from "./Reducer/StoreReducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    batch: batchSlice.reducer,
    store: storeSlice.reducer,
  },
});

export default store;
