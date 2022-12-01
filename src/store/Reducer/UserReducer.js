import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get(
    "http://localhost:4000/api/v1/user/getallusers"
  );
  return response;
});

export const logIn = createAsyncThunk("user/logIn", async (values) => {
  let response = await axios.post("http://localhost:4000/api/v1/user/login", {
    email: values.email,
    password: values.password,
  });
  return response;
});

export const signUp = createAsyncThunk("user/signUp", async () => {
  let response = await axios.post("http://localhost:4000/api/v1/user/signup");
  return response;
});

export const logOut = createAsyncThunk("user/logOut", async () => {
  return "Logged Out";
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    fetchUserLoading: false,
    fetchUserHasError: false,
    fetchUserError: null,
    token: null,
    currentUser: null,
    loginLoading: false,
    loginHasError: false,
    loginError: null,
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
    [logIn.pending]: (state) => {
      state.loginLoading = true;
      state.loginHasError = false;
      state.loginError = null;
    },
    [logIn.fulfilled]: (state, action) => {
      state.loginLoading = false;
      state.loginHasError = false;
      state.loginError = null;
      state.currentUser = action.payload.data.user;
      state.token = action.payload.data.token;
      console.log("login success", action.payload.data);
    },
    [logIn.rejected]: (state, action) => {
      state.loginLoading = false;
      state.loginHasError = true;
      // state.loginError = action.action
      console.log("error from login", action);
    },
    [logOut.fulfilled]: (state, action) => {
      state.token = null;
      console.log("logout", action);
    },
  },
});

export default userSlice;
