import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log("action*******", action);

      state.userInfo = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setUserInfo } = AuthSlice.actions;
export default AuthSlice.reducer;
