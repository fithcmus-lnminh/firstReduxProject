//Create a store
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
  //or reducer: {counter: counterSlice.reducer, ....} for multiple reducer
});

export const counterActions = counterSlice.actions; //get actions

export default store;
