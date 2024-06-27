import { useEffect } from "react";
import { API_OPTIONS } from "../Utilis/constants";
import { useDispatch} from "react-redux";
import { addPlayVideo } from "../Utilis/movieSlice";
const usePlayMovieVideo =(id)=>{
    const dispatch = useDispatch()
    const getMovieVideos =async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json()
        const filterData = json.results.filter((video)=>video.type == 'Trailer');
        const trailer = filterData.length? filterData[0]: json.results[0]
        dispatch(addPlayVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
}
export default usePlayMovieVideo;