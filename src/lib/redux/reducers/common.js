import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

// First, create the thunk
export const getUsers = createAsyncThunk("common/getUsers", async () => {
  console.log("api thunk call***");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const CommonSlice = createSlice({
  name: "common",
  initialState: {
    loading: "init",
    counter: 0,
    users: [],
  },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUsers.pending, (state, action) => {
      // Add user to the state array
      console.log("api call pending***");
      state.loading = "pending";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("api call fulfilled***");
      state.loading = "fulfilled";
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      // Add user to the state array
      console.log("api call rejected***");
      state.loading = "rejected";
    });
  },
});

export const { increment, decrement } = CommonSlice.actions;
export default CommonSlice.reducer;
