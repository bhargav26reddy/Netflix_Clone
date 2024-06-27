import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../Hooks/useNowPopularMovies copy";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useNowTopRatedMovies from "../Hooks/useNowTopRatedMovies";
import useNowUpcomingMovies from "../Hooks/useNowUpcomingMovies";


const Browse =()=>{
    useNowPlayingMovies()
    useNowPopularMovies()
    useNowTopRatedMovies()
    useNowUpcomingMovies()
    const store = useSelector((store)=>store?.gpt?.ShowGptSearch)
    return(
        <div>
            <Header />
            {store?<div>
                <GptSearch />
            </div>: <> <div>
                <MainContainer />
            </div>
            <div>
                <SecondaryContainer />
            </div></>}
           
        </div>
    )
}
export default Browse;