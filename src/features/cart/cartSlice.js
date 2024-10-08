import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
    // cart: [],
    buyNowCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        storeCartData : (state, action)=>{
            const newCart = [action.payload, ...state.cart];
            localStorage.setItem('cart', JSON.stringify(newCart));
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
            state.cart = getDataFromLocalStorage;
        },
        storeBuyNowData : (state, action)=>{
            const newCart = [action.payload, ...state.buyNowCart];
            state.buyNowCart = newCart;
        },
        removeCartData : (state, action) => {
            const newCart = state.cart.filter(prev => prev?.productData?.code !== action.payload);
            localStorage.setItem('cart', JSON.stringify(newCart));
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
            state.cart = getDataFromLocalStorage;
        },
        removeBuyNowData : (state, action) => {
            const newCart = state.buyNowCart.filter(prev => prev?.productData?.code !== action.payload);
            state.buyNowCart = newCart;
        },
        editCartQuantityData: (state, action) => {
            if (action.payload.task === "increase") {
                const newCart = state.cart.map((prev) => prev?.productData?.code === action.payload.code ? { ...prev, productQuantity: (prev.productQuantity || 0) + 1 } : prev);
                localStorage.setItem('cart', JSON.stringify(newCart));
                const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
                state.cart = getDataFromLocalStorage;
            } else if (action.payload.task === "decrease") {
                const newCart = state.cart.map((prev) => prev?.productData?.code === action.payload.code ? {
                    ...prev,
                    productQuantity: Math.max((prev.productQuantity || 1) - 1, 1),
                } : prev);
                localStorage.setItem('cart', JSON.stringify(newCart));
                const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
                state.cart = getDataFromLocalStorage;
            }
        },
        editBuyNowQuantityData: (state, action) => {
            if (action.payload.task === "increase") {
                const newCart = state.buyNowCart.map((prev) => prev?.productData?.code === action.payload.code ? { ...prev, productQuantity: (prev.productQuantity || 0) + 1 } : prev);
                state.buyNowCart = newCart;
            } else if (action.payload.task === "decrease") {
                const newCart = state.buyNowCart.map((prev) => prev?.productData?.code === action.payload.code ? {
                    ...prev,
                    productQuantity: Math.max((prev.productQuantity || 1) - 1, 1),
                } : prev);
                state.buyNowCart = newCart;
            }
        },
        clearCartItems: (state, action)=>{
            localStorage.setItem('cart', JSON.stringify([]));
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
            state.cart = getDataFromLocalStorage;
        },
        clearBuyNowItems: (state, action)=>{
            state.buyNowCart = [];
        },
    }
})

export const {storeCartData, storeBuyNowData, removeCartData, removeBuyNowData, editCartQuantityData, editBuyNowQuantityData, clearCartItems, clearBuyNowItems} = cartSlice.actions
// export const {storeCartData} = cartSlice.actions

export default cartSlice.reducer