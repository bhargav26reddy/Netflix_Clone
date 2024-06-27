import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieDetail from "./MovieDetail";


import { useDispatch } from "react-redux";



const Body =()=>{
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter(
       [ 
        {
            path:'/',
            element:<Login />

        },
        {
            path:"/browse",
            element:<Browse />,

            
        },
        {
            path:"/MovieDetail/:resId",
            element:<MovieDetail />
        },
       
    ]
    )

return(
    <div>
        <RouterProvider router={appRouter} />
    </div>
)
}
export default Body