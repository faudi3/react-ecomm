import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

const initialState = {
  categoryId: 0,
  sort: {
    name: "price",
    sortProperty: "price",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});
export const selectSort = (state: RootState) => state.filter.sort;
export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
