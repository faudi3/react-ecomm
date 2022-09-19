import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import clothes from "./slices/clothesSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    clothes,
  },
});
