import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [],
    // cart: [],
    buyNowCart: [],
    pincode: localStorage.getItem('pincode')? JSON.parse(localStorage.getItem('pincode')) : "",
    // pincode: "",
    stateLocation: localStorage.getItem('stateLocation')? JSON.parse(localStorage.getItem('stateLocation')) : "",
    // stateLocation: "",
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
            const newCart = state.cart.filter(prev => prev?.item_code !== action.payload);
            localStorage.setItem('cart', JSON.stringify(newCart));
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
            state.cart = getDataFromLocalStorage;
        },
        removeBuyNowData : (state, action) => {
            const newCart = state.buyNowCart.filter(prev => prev?.item_code !== action.payload);
            state.buyNowCart = newCart;
        },
        editCartQuantityData: (state, action) => {
            if (action.payload.task === "increase") {
                const newCart = state.cart.map((prev) => prev?.item_code === action.payload.item_code ? { ...prev, productQuantity: (prev.productQuantity || 0) + 1 } : prev);
                localStorage.setItem('cart', JSON.stringify(newCart));
                const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
                state.cart = getDataFromLocalStorage;
            } else if (action.payload.task === "decrease") {
                const newCart = state.cart.map((prev) => prev?.item_code === action.payload.item_code ? {
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
                const newCart = state.buyNowCart.map((prev) => prev?.item_code === action.payload.item_code ? { ...prev, productQuantity: (prev.productQuantity || 0) + 1 } : prev);
                state.buyNowCart = newCart;
            } else if (action.payload.task === "decrease") {
                const newCart = state.buyNowCart.map((prev) => prev?.item_code === action.payload.item_code ? {
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
        setPincode: (state, action)=>{
            // state.pincode = action.payload;
            localStorage.setItem('pincode', JSON.stringify(action.payload));
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('pincode'));
            state.pincode = getDataFromLocalStorage;
        },
        setStateLocation: (state, action)=>{
            // state.stateLocation = action.payload;
            localStorage.setItem('stateLocation', JSON.stringify(action.payload));
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('stateLocation'));
            state.stateLocation = getDataFromLocalStorage;
        },
    }
})

export const {storeCartData, storeBuyNowData, removeCartData, removeBuyNowData, editCartQuantityData, editBuyNowQuantityData, clearCartItems, clearBuyNowItems, setPincode, setStateLocation} = cartSlice.actions
// export const {storeCartData} = cartSlice.actions

export default cartSlice.reducer