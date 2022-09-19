import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchClothes = createAsyncThunk(
  "clothes/fetchClothesStatus",
  async ({ categoryId, sortType }) => {
    const { data } = await axios.get(
      `https://630f176d379256341887958d.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType}&order=asc`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchClothes.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchClothes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchClothes.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = clothesSlice.actions;
export default clothesSlice.reducer;
