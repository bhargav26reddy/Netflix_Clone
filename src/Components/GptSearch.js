import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestions from "./GptMovieSuggestions"
import { NETFLIX_BG } from "../Utilis/constants"
const GptSearch =()=>{
    return(
        <>
         <div className="absolute -z-10">
            <img  src={NETFLIX_BG} className="h-screen object-cover w-full md:h-full"></img>
        </div>
    
        <div className="" >  
            <GptSearchBar />
            <GptMovieSuggestions />
            </div>
    
        </>
    )
}
export default GptSearch