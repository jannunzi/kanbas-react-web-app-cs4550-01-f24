import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 123,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
// (state.count = 123)-->increment-->(state.count = 124)-->decrement-->(state.count = 123)
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
