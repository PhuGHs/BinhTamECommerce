import { IOrderingProduct } from "@/utils/interfaces";
import React, {Fragment} from "react";
import CartItems from "@/components/ui/CartItems";
import { useSelector } from "react-redux";
import { RootState } from "@/store";


const CartPage : React.FC = () => {
    const cart = useSelector((state : RootState) => state.cart);
    const cartItems : IOrderingProduct[] = cart.items;
    return <CartItems items={cartItems}/>
}

export default CartPage;