import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        storeCartData : (state, action)=>{
            const newCart = [action.payload, ...state.cart];
            state.cart = newCart;
            // localStorage.setItem('cart', JSON.stringify(newCart));
        },
        removeCartData : (state, action) => {
            const newCart = state.cart.filter(prev => prev?.productData?.code !== action.payload);
            state.cart = newCart;
            // localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        editCartQuantityData: (state, action) => {
            if (action.payload.task === "increase") {
                const newCart = state.cart.map((prev) => prev?.productData?.code === action.payload.code ? { ...prev, productQuantity: (prev.productQuantity || 0) + 1 } : prev);
                state.cart = newCart;
                // localStorage.setItem('cart', JSON.stringify(state.cart));
            } else if (action.payload.task === "decrease") {
                const newCart = state.cart.map((prev) => prev?.productData?.code === action.payload.code ? {
                    ...prev,
                    productQuantity: Math.max((prev.productQuantity || 1) - 1, 1),
                } : prev);
                state.cart = newCart;
                // localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        }
    }
})

export const {storeCartData, removeCartData, editCartQuantityData} = cartSlice.actions
// export const {storeCartData} = cartSlice.actions

export default cartSlice.reducer