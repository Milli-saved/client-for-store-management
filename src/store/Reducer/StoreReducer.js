import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllStore = createAsyncThunk("store/getAllStore", async () => {
  const response = await axios.get(
    "http://localhost:4000/api/v1/store/getallstore"
  );
  return response;
});
export const addNewStore = createAsyncThunk(
  "store/addNewStore",
  async (values) => {
    const response = await axios.post(
      "http://localhost:4000/api/v1/store/createnewstore",
      {
        store_name: values.store_name,
        latitude: values.latitude,
        longtude: values.longtude,
        location: values.location,
      }
    );
    return response;
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState: {
    store: null,
    fetchStoreLoading: false,
    fetchStoreHasError: false,
    fetchStoreError: null,
    addedStore: null,
    addNewStoreLoading: false,
    addNewStoreHasError: false,
    addNewStoreError: null,
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
    [addNewStore.pending]: (state) => {
      state.addNewStoreLoading = true;
      state.addNewStoreHasError = false;
      state.addNewStoreError = null;
    },
    [addNewStore.fulfilled]: (state, action) => {
      state.addNewStoreLoading = false;
      state.addNewStoreHasError = false;
      state.addNewStoreError = null;
      state.addedStore = action.payload.data.store;
    },
    [addNewStore.rejected]: (state, action) => {
      state.addNewStoreLoading = false;
      state.addNewStoreHasError = true;
      console.log("error while adding new store", action);
    },
  },
});

export default storeSlice;
