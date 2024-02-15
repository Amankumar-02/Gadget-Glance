import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        storeCartData : (state, action)=>{
            const newCart = [action.payload, ...state.cart];
            state.cart = newCart;
            localStorage.setItem('cart', JSON.stringify(newCart));
        },
        // removeCartData: (state, action) => {
        //     state.cart = state.cart.filter(prev => prev?.productData?.code !== action.payload);
        //     localStorage.setItem('cart', JSON.stringify(state.cart));
        // }
    }
})

// export const {storeCartData, removeCartData} = cartSlice.actions
export const {storeCartData} = cartSlice.actions

export default cartSlice.reducer