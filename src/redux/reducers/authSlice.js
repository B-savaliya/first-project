import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("auth/getUsers", async () => {
  try {
    let res = await axios.get("https://dummyjson.com/users");
    return res;
  } catch (error) {
    return error.message;
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {},
    loading: "init",
    usersData: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
      state.loading = "loading";
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.usersData = action.payload.data.users;
    })
    .addCase(getUsers.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const { setUserInfo } = AuthSlice.actions;
export default AuthSlice.reducer;
