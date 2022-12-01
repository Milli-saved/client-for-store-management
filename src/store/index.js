import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/UserReducer";
import batchSlice from "./Reducer/BatchReducer";
import storeSlice from "./Reducer/StoreReducer";
import productSlice from "./Reducer/ProductReducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    batch: batchSlice.reducer,
    store: storeSlice.reducer,
    product: productSlice.reducer
  },
});

export default store;
