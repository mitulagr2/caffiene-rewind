import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  curTextTab: number;
  curFoodTab: number;
  query: string;
  isActiveSearch: boolean;
}

const initialState: MenuState = {
  curTextTab: 0,
  curFoodTab: 0,
  query: "",
  isActiveSearch: false,
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
    toggleSearch: (state) => {
      if (state.isActiveSearch) {
        state.isActiveSearch = false;
        state.query = "";
      } else state.isActiveSearch = true;
    },
  },
});

export const { setTextTab, setFoodTab, setQuery, clearQuery, toggleSearch } =
  menuSlice.actions;

export default menuSlice.reducer;
