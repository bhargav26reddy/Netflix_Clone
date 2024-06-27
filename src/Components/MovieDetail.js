import { useNavigate, useParams } from "react-router-dom";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import usePlayMovieVideo from "../Hooks/usePlayMovieVideo";
import { IoArrowBackOutline } from "react-icons/io5";

const MovieDetail =()=>{
    const params = useParams()
    const navigate = useNavigate()
    const trailerdata = useSelector((store) =>store.movies?.playVideo)
    usePlayMovieVideo(params.resId);
    return(
        <div className="relative">
         
               <iframe className="w-full max-h-screen aspect-video" src={'https://www.youtube.com/embed/'+ trailerdata?.key+"?&autoplay=1&mute=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         
            <div className="absolute top-10 left-4">
              <IoArrowBackOutline onClick={()=>{
                navigate('/browse')
              }} color="white" className="w-16 h-28 cursor-pointer"/>
            </div>
           
        </div>
    )
}
export default MovieDetail;