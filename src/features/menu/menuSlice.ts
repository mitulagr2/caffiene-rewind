import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  curTextTab: number;
  curFoodTab: number;
}

const initialState: MenuState = {
  curTextTab: 0,
  curFoodTab: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setTextTab: (state, action: PayloadAction<number>) => {
      state.curTextTab = action.payload;
    },
    setFoodTab: (state, action: PayloadAction<number>) => {
      state.curFoodTab = action.payload;
    },
  },
});

export const { setTextTab, setFoodTab } = menuSlice.actions;

export default menuSlice.reducer;
