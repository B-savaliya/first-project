import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./reducers/common";
import usersSlice from "./reducers/users";

const store = configureStore({
  reducer: {
    common: commonSlice,
    users: usersSlice
  },
});

export default store;
