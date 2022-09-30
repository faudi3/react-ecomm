import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

type FetchClothesArgs = Record<string, string | number>;

export const fetchClothes = createAsyncThunk(
  "clothes/fetchClothesStatus",
  async (params: FetchClothesArgs) => {
    const { categoryId, sortType } = params;
    const { data } = await axios.get<Clothes[]>(
      `https://630f176d379256341887958d.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType}&order=asc`
    );
    return data as Clothes[];
  }
);
type Clothes = {
  id: string;
  price: number;
  title: string;
  count: number;
  imageUrl: string;
};

interface ClothesSliceState {
  items: Clothes[];
  status: "loading" | "success" | "error";
}
const initialState: ClothesSliceState = {
  items: [],
  status: "loading",
};

const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Clothes[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClothes.pending, (state, action) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchClothes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchClothes.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });
  },
  // extraReducers: {
  //   [fetchClothes.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //   },
  //   [fetchClothes.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "success";
  //   },
  //   [fetchClothes.rejected]: (state, action) => {
  //     state.status = "error";
  //     state.items = [];
  //   },
  // },
});

export const { setItems } = clothesSlice.actions;
export default clothesSlice.reducer;
