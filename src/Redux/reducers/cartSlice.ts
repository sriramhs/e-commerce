import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../Types/types";

export interface CartState {
  items: CartItem[];
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        if (existingItem.itemCount === newItem.stock) {
          throw Error("Max number of items in stock");
        } else {
          existingItem.itemCount = existingItem.itemCount + 1;
        }
      } else {
        state.items.push(newItem);
      }

      state.totalCount = state.items.reduce(
        (total, item) => total + item.itemCount,
        0
      );
    },

    removeItem: (state, action) => {
      const removeItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removeItem.id
      );
      if (existingItem) existingItem.itemCount = existingItem?.itemCount - 1;

      state.items = state.items.filter((item) => item.itemCount > 0);

      state.totalCount = state.items.reduce(
        (total, item) => total + item.itemCount,
        0
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
