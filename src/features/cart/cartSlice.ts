import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: { [id: number]: number };
}

const initialState: CartState = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.items[action.payload] = state.items[action.payload]
        ? state.items[action.payload] + 1
        : 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      --state.items[action.payload];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
