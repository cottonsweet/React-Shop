import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2, desc: "10% 세일중" },
    { id: 2, name: "Grey Yordan", count: 1, desc: "15% 세일중" },
  ],
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
    user: user.reducer,
    stock: stock.reducer,
  },
});
