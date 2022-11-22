import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get(
    "http://localhost:4000/api/v1/user/getallusers"
  );
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    fetchUserLoading: false,
    fetchUserHasError: false,
    fetchUserError: null,
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.fetchUserLoading = true;
      state.fetchUserHasError = false;
      state.fetchUserError = null;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.fetchUserLoading = false;
      state.fetchUserHasError = false;
      state.fetchUserError = null;
    //   console.log(action.payload.data.user);
      state.user = action.payload.data.user;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.fetchUserLoading = false;
      state.fetchUserError = action.error.code;
      state.fetchUserHasError = true;
      console.log(action);
    },
  },
});

export default userSlice;
