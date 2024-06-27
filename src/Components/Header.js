import { useNavigate } from "react-router-dom";
import { auth } from "../Utilis/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../Utilis/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../Utilis/constants";
import { toggleGptSearchView } from "../Utilis/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utilis/constants";
import { changeLanguage } from "../Utilis/configSlice";

const Header =()=>{
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [profile, setProfile] = useState(false)
  const user = useSelector((store)=>store.user)
  const showgptsearch = useSelector((store)=>store.gpt.ShowGptSearch)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(adduser({uid: uid, email: email, displayName: displayName}))
          navigate("/browse")
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeuser())
          navigate("/")
          
        }
      });
      return ()=>{
        unsubscribe();
      }
},[])
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

    return(
        <div className="w-screen absolute bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
          <img className="w-44 h-16 p-2 mx-auto md:mx-0" src={NETFLIX_LOGO}></img>
      {  user &&  <div className="h-16 p-2">
        <div className="flex">
       {showgptsearch && <select className="p-2 m-3 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGES.map((e)=><option value={e.identifier}>{e.name}</option>)
          }
        </select>}
            <button className="bg-purple-400 rounded-lg font-bold py-4 px-2 mt-2 mr-4 h-12" onClick={()=>{
              dispatch(toggleGptSearchView())
            }}>{showgptsearch?"HomePage":"Gpt Search"}</button>
            <img onMouseOver={()=>{
              setProfile(!profile)
            }}className="w-12 rounded-lg mr-5" src={USER_AVATAR}></img>
            </div>
           { profile && <div className="bg-black text-white">
              <ul className="ml-24">
                <li className="font-bold"><button onClick={()=>{
                signOut(auth).then(() => {
                  // Sign-out successful.

                }).catch((error) => {
                  // An error happened.
                  navigate("/error")
                });
                
            }} className="text-white font-bold">Sign Out</button></li>
              </ul>
            </div>}
            
          </div> }
        </div>
    )
}
export default Header;