import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import searchResultSlice from '../features/searchResult/searchResult';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        searchResult: searchResultSlice,
    }
})