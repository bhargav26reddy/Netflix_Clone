import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const VideoTitle =({title, overview, id})=>{
    return(
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
            <Link to={`/MovieDetail/${id}`}><button onClick={()=>{
                    
                }} className="bg-white text-black px-16 text-lg rounded-lg hover:bg-opacity-60 h-12"><FaPlay className="inline-block"/>Play</button>  </Link> 
                <button className="mx-2 bg-gray-600 text-white px-16 text-lg bg-opacity-50, rounded-lg h-12"><IoMdInformationCircleOutline className="inline-block"/>Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;