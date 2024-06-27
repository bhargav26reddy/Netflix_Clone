import { useDispatch, useSelector } from "react-redux";
import lang from "../Utilis/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../Utilis/constants";
import { addSearchResults } from "../Utilis/gptSlice";


const GptSearchBar =()=>{
    const dispatch = useDispatch()
    const langg = useSelector((store)=> store.config.lang)
    const searchText = useRef(null)
    const handleGptSearchClick =async()=>{
        // const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query:" + searchText.current.value + "only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";
        // const  gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(gptResults.choices);
        const data = await fetch( `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
        const json = await data.json()
        dispatch(addSearchResults(json.results))
      

    }
    return(
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{
                    e.preventDefault()
            }}>
                <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langg].placeholder}/>
                <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[langg].search}</button>
            </form>

        </div>
    )
}
export default GptSearchBar;