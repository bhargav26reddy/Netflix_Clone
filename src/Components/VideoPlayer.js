
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utilis/constants";
import { Link } from "react-router-dom";
// import MovieCard from "./Moviecard";
const VideoPlayer =({posterPath,id})=>{
    // const store = useSelector((store)=>store.gpt.playsearchVideos)
    const store = useSelector((store)=>store.gpt.searchResults)
    return(
       
        <div className="w-48 pr-4 cursor-pointer ml-20 mt-6">
          <Link to={`/MovieDetail/${id}`}>  <img  onClick={()=>{
                // navigate(`/MovieDetail/${id}`)
            }} alt="nameofmovie" src={IMG_CDN_URL+ posterPath}></img></Link>
        </div>
    )
}
export default VideoPlayer;