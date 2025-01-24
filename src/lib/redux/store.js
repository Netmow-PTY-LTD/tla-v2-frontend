import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const ReduxStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};
