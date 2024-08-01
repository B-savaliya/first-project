import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {}
  },
  reducers: {},
  extraReducers: () => {},
});

export default AuthSlice.reducer;
