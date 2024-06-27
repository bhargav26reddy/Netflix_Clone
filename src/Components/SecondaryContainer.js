import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer =()=>{
    const movies = useSelector((store)=>store.movies)
    if(!movies?.nowPlayingMovies?.length) return
    
    return(
        <div className="bg-black w-screen">
            <div className="-mt-60 pl-6 relative z-20">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies?.topRated}/>
            <MovieList title={"Popular"} movies={movies?.popularMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies?.upComing}/>
            </div>
            <div className="pl-6">
                <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
            </div>
           
        </div>
    )
}
export default SecondaryContainer;