import { createSlice, current } from "@reduxjs/toolkit";

const CommonSlice = createSlice({
  name: "common",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
  //   extraReducers: {},
});

export const { increment, decrement } = CommonSlice.actions;
export default CommonSlice.reducer;
