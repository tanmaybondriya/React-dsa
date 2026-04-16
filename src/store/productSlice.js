import { createSlice } from "@reduxjs/toolkit";
const products = [
  {
    id: 1,
    name: "keyboard",
    price: 10000,
  },
  {
    id: 2,
    name: "mouse",
    price: 2000,
  },
  {
    id: 2,
    name: "laptop",
    price: 70000,
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: { cart: [], count: 0, price: 0 },
  reducers: {
    addProduct: (state, action) => {
      //action addProduct
      state.cart.push(action.payload); //action.payload is envelope which contains the payload (data which we enter) and type which is the label
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((p) => p.id != action.payload);
    },
    increment: (state) => {
      state.count += 1;
    },
  },
});
