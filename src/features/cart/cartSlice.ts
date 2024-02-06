import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: { [id: number]: number };
  tip: number;
}

const initialState: CartState = {
  items: {},
  tip: 0.0,
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
    addTip: (state) => {
      state.tip += 0.5;
    },
  },
});

export const { addToCart, removeFromCart, addTip } = cartSlice.actions;

export default cartSlice.reducer;
