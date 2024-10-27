import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sum: 0,
};
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    // add: (state, action) => {
    //     state.sum = action.payload.a + action.payload.b;
    //   },
    add: (state, { payload }) => {
      state.sum = payload.a + payload.b;
    },
  },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;
