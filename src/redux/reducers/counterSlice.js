import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    fName: "Bhaumik",
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: () => {},
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
