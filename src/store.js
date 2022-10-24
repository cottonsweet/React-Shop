import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return `john kim`;
    },
  },
});

export const { changeName, changeCount } = user.actions;

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
  reducers: {
    changeCount(state) {
      console.log(cart.state[0].count);
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
