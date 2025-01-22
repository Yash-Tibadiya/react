import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    incriment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtraction: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;