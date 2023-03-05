import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const Store = configureStore({
    reducer: {cart: cartSlice.reducer},
})

export type RootState = ReturnType<typeof Store.getState>

export default Store;