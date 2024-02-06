import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  curTextTab: number;
  curFoodTab: number;
  query: string;
}

const initialState: MenuState = {
  curTextTab: 0,
  curFoodTab: 0,
  query: "",
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
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setTextTab, setFoodTab, setQuery, clearQuery } =
  menuSlice.actions;

export default menuSlice.reducer;
