import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBatches = createAsyncThunk(
  "batch/getAllBatches",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/api/v1/batch/getallbatches"
    );
    return response;
  }
);

const batchSlice = createSlice({
  name: "batch",
  initialState: {
    batch: null,
    fetchBatchLoading: false,
    fetchBatchHasError: false,
    fetchBatchError: null,
  },
  extraReducers: {
    [getAllBatches.pending]: (state) => {
      state.fetchBatchLoading = true;
      state.fetchBatchHasError = false;
      state.fetchBatchError = null;
    },
    [getAllBatches.fulfilled]: (state, action) => {
      state.fetchBatchLoading = false;
      state.fetchBatchHasError = false;
      state.fetchBatchError = null;
      console.log("fetch batch", action.payload.data);
    },
    [getAllBatches.rejected]: (state, action) => {
      state.fetchBatchLoading = false;
      state.fetchBatchHasError = true;
      console.log("batch fetch error", action.payload.error);
    },
  },
});

export default batchSlice;
