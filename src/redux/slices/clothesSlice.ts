import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ClothesSliceState {
  items: Clothes[];
  status: Status;
}
const initialState: ClothesSliceState = {
  items: [],
  status: Status.LOADING,
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
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchClothes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchClothes.rejected, (state, action) => {
      state.status = Status.ERROR;
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
