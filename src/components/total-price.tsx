"use client";

import useCart from "@/stores/store";

export const calculateTotalPrice = () => {
    const cartItems = useCart((state: any) => state.cart);
    return cartItems
        .reduce((total: any, cartItem: any) => {
            return total + cartItem.price * cartItem.quantity;
        }, 0)
        .toFixed(2); // Ensure the total is formatted to 2 decimal places
};
