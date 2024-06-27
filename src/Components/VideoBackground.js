import { useEffect } from "react";
import { API_OPTIONS } from "../Utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utilis/movieSlice";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground =({id})=>{
    const trailerdata = useSelector((store) =>store.movies?.trailerVideo)
    useMovieTrailer(id);
    return(
        <div>
            <iframe className="w-screen aspect-video" src={'https://www.youtube.com/embed/'+ trailerdata?.key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default VideoBackground;