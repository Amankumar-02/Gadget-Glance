import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchResult: "",
}

export const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState,
    reducers:{
        storeSearchResult : (state, action)=>{
            const newState = action.payload;
            state.searchResult = newState;
        },
    }
})

export const {storeSearchResult, } = searchResultSlice.actions

export default searchResultSlice.reducer