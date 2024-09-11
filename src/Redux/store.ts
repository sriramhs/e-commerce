import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
