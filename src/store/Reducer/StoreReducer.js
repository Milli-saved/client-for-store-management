import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllStore = createAsyncThunk("store/getAllStore", async () => {
  const response = await axios.get(
    "http://localhost:4000/api/v1/store/getallstore"
  );
  return response;
});

const storeSlice = createSlice({
  name: "store",
  initialState: {
    store: null,
    fetchStoreLoading: false,
    fetchStoreHasError: false,
    fetchStoreError: null,
  },
  extraReducers: {
    [getAllStore.pending]: (state) => {
      state.fetchStoreLoading = true;
      state.fetchStoreHasError = false;
      state.fetchStoreError = null;
    },
    [getAllStore.fulfilled]: (state, action) => {
      state.fetchStoreLoading = false;
      state.fetchStoreHasError = false;
      state.fetchStoreError = null;
      state.store = action.payload.data.store;
    },
    [getAllStore.rejected]: (state, action) => {
      state.fetchStoreHasError = true;
      state.fetchStoreLoading = false;
      console.log("fetch store error", action);
    },
  },
});

export default storeSlice;
