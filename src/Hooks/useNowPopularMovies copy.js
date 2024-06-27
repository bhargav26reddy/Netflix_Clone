import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../Utilis/movieSlice"
import { API_OPTIONS } from "../Utilis/constants"

const useNowPopularMovies = ()=>{
    const dispatch = useDispatch()
    const getPopularMovies =async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&language=te-IN&page=3',API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))

    }
    useEffect(()=>{
        getPopularMovies()
    },[])
}

export default useNowPopularMovies;