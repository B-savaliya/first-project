import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    fName: "Bhaumik",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: () => {},
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
