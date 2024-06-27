import { Link, useNavigate, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Utilis/constants";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addishover, removeishover } from "../Utilis/movieSlice";


const MovieCard =({posterPath,id})=> {
    // console.log(showItems,'showitems')
    // const[flag, setFlag] = useState(false)
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // console.log(flag,'flag')
    // const trailerdata = useSelector((store) =>store.movies?.playVideo)
    // const flag = useSelector((store) =>store.movies?.ishover)
    return(
        <div className="w-48 pr-4">
        <div className="cursor-pointer">
          <Link to={`/MovieDetail/${id}`}>  <img onMouseOut={()=>{
            //  setFlag(false)
            // dispatch(removeishover())
          }} onMouseOver={()=>{
            //  setFlag(true)
            // dispatch(addishover())
          
          }} onClick={()=>{
                // navigate(`/MovieDetail/${id}`)
               
            }} alt="nameofmovie" src={IMG_CDN_URL+ posterPath}></img></Link>
        </div>
      

        </div>
    )
}
export default MovieCard;
   