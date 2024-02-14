import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./card-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});