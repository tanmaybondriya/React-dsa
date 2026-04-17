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
  initialState: { items: products, cart: [], quantity: 0 },
  reducers: {
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((p) => p.id != action.payload);
    },
    addToCart: (state, action) => {
      //action addProduct
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); //creating a quantity
      }
    },
  },
});

export const { removeProduct, addToCart } = productSlice.actions;
export default productSlice.reducer; //store needs the reducer
