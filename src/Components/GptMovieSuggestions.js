import { useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";
import { NETFLIX_BG } from "../Utilis/constants";

const GptMovieSuggestions =()=>{
    const store = useSelector((store)=>store.gpt.searchResults)
    if(!store) return
    return(
        
        <div className="bg-gradient-to-t from-black w-screen h-screen">   
            <div className="flex flex-wrap">  
            {
              store.filter((movie)=>movie.poster_path!=null).slice(0,12).map((movie)=> <VideoPlayer posterPath={movie.poster_path} id={movie.id}/>)  
            }
            </div>
         
          
      
        </div>
        // <div className="bg-gradient-to-t from-black w-screen h-screen text-white">
        //   <Body />
        // </div>
    )
}
export default GptMovieSuggestions;