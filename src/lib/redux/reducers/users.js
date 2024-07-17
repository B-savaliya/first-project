import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUsers: () => {},
  },
  //   extraReducers: {},
});

export const { setUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
