import MovieCard from "./Moviecard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";


const MovieList =({title,movies})=> {
    const[showIndex, setShowIndex] = useState(0)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        className:"slides",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className="px-6">
            <div >
                <h1 className="text-3xl py-4 text-white">{title}</h1>
            </div>
         
            <div className="">
           
            <div className="p-7">
            <Slider {...settings} className="">
                {
                   
                    movies?.map((movie,index)=><MovieCard posterPath={movie.poster_path} id={movie.id} />)
              
                }
                </Slider>
             
            </div>
            </div>

           
            
        </div>
    )
}
export default MovieList;
   