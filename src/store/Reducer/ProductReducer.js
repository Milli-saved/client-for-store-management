import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/api/v1/product/allproducts"
    );
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    fetchProductsLoading: false,
    fetchProductsHasError: false,
    fetchProductsError: null,
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.fetchProductsLoading = true;
      state.fetchProductsHasError = false;
      state.fetchProductsError = null;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.fetchProductsLoading = false;
      state.fetchProductsHasError = false;
      state.fetchProductsError = null;
      console.log("product fetching", action.payload.data);
      state.products = action.payload.data.products;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.fetchProductsLoading = false;
      state.fetchProductsHasError = true;
      //   state.fetchProductsErro
      console.log("error in fetching products", action);
    },
  },
});

export default productSlice;
