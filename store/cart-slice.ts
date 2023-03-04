import { createSlice } from "@reduxjs/toolkit";
import { IOrderingProduct } from "@/utils/interfaces";
import { CartState } from "@/utils/interfaces";

const initialState : CartState = {
    items: [],
    totalQuantity: 0,
    changed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
            state.changed = false;
        },
        addItemToCart(state, action) {
            const newItem : IOrderingProduct = action.payload;
            const existingItem : IOrderingProduct | undefined = state.items.find((item : IOrderingProduct) => item.id === newItem.id);
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    img: newItem.img,
                    productName: newItem.productName,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    isSelected: true,
                })
            }
            else {
                existingItem.totalPrice += existingItem.price;
                existingItem.quantity += 1;
            }
            state.totalQuantity += 1;
            state.changed = true;
        },
        removeItemfromCart(state, action) {
            const id : string = action.payload;
            const existingItem : IOrderingProduct | undefined = state.items.find((item : IOrderingProduct) => item.id === id);
            if(!existingItem) {
                return;
            }
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item : IOrderingProduct) => item.id !== id);
            }
            else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
            }
            
            state.changed = true;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;