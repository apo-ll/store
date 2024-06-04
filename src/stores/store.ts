import { create } from "zustand";

const useCart = create((set, get) => ({
    cart: [],
    product: {},
    setProduct: (state: any) => {
        const { newProduct } = state;
        set((state: any) => {
            return {
                ...state,
                product: newProduct,
            };
        });
    },
    addItemToCart: (state: any) => {
        const { newItem } = state;
        set((state: any) => {
            const newCart = [...state.cart, newItem];
            return {
                ...state,
                cart: newCart,
            };
        });
    },
    removeItemFromCart: (state: any) => {
        const { itemIndex } = state;
        set((state: any) => {
            const newCart = state.cart.filter(
                (_: any, index: any) => index !== itemIndex
            );
            return {
                ...state,
                cart: newCart,
            };
        });
    },

    emptyCart: () => {
        set((state: any) => {
            const newCart: any = [];
            return {
                ...state,
                cart: newCart,
            };
        });
    },
}));

export default useCart;
