// redux
import { configureStore } from "@reduxjs/toolkit";

// reducers
import reducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer,
});
