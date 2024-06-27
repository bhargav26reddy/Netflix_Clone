import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        ShowGptSearch: false,
        searchResults:null,
    },
    reducers:{
        toggleGptSearchView :(state, action)=>{
            state.ShowGptSearch = !state.ShowGptSearch;
        },
        addSearchResults:(state, action)=>{
            state.searchResults = action.payload
        },

    }
})
export const {toggleGptSearchView,addSearchResults} = gptSlice.actions;
export default gptSlice.reducer;