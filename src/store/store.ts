import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./card-slice";

configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});