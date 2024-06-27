import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies, addTopRatedMovies } from "../Utilis/movieSlice"
import { API_OPTIONS } from "../Utilis/constants"

const useNowTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    const getPopularMovies =async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))

    }
    useEffect(()=>{
        getPopularMovies()
    },[])
}

export default useNowTopRatedMovies;