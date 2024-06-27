import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        playVideo:null,
        ishover:false,
        upComing:null,
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action)=>{
            state.topRated = action.payload;
        },
        addUpcomingMovies : (state, action)=>{
            state.upComing = action.payload;
        },
        addTrailerVideo :(state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPlayVideo: (state, action)=>{
            state.playVideo = action.payload;
        },
        addishover:(state, action)=>{
            state.ishover = true
        },
        removeishover:(state, action)=>{
            state.ishover = false
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addPlayVideo, addishover, removeishover,addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;