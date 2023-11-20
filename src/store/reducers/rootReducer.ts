// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initialState
import { initialState } from "../initialState";

const rootReducer = createSlice({
  name: "tag",
  initialState,
  reducers: {
    setInitialLayout(state, action: PayloadAction<number[]>) {
      state.initialLayout = action.payload;
    },
    setAssembleQuickly(state, action: PayloadAction<boolean>) {
      state.assembleQuickly = action.payload;
    },
    setScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
    },
    setBestScore(state, action: PayloadAction<number>) {
      state.bestScore = action.payload;
    },
    setZeroPosInit(state, action: PayloadAction<ICoord>) {
      state.zeroPosInit = action.payload;
    },
  },
});

export const {
  setInitialLayout,
  setAssembleQuickly,
  setScore,
  setBestScore,
  setZeroPosInit,
} = rootReducer.actions;

export default rootReducer.reducer;
