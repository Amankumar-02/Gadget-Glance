import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        storeCartData : (state, action)=>{
            // state.cart.push(action.payload);
            // newCart = state.cart.unshift(action.payload)
            // localStorage.setItem('cart', JSON.stringify(newCart))

            const newCart = [action.payload, ...state.cart];
            state.cart = newCart;
            localStorage.setItem('cart', JSON.stringify(newCart));
        },
    }
})

export const {storeCartData} = cartSlice.actions

export default cartSlice.reducer