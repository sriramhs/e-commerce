import { CartState } from "./cartSlice";
import { createSlice } from "@reduxjs/toolkit";

interface orderState {
  orders: CartState[];
  totalOrders: number;
}

const initialState: orderState = {
  orders: [],
  totalOrders: 0,
};

const orderState = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.totalOrders = state.totalOrders + 1;
    },
  },
});
