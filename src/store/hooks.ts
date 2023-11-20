// react
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

// store
import { store } from "./store";

// redux hooks
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
