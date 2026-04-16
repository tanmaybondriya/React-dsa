import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    //function that takes the data(action.payload) and puts it inside the initial state
    users: userReducer,
    product: cartReducer,
  },
});
//Boilerplate code only
