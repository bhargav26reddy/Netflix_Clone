import { useEffect, useRef, useState } from "react"
import Header from "./Header"
import usecheckValiddata from "./usecheckValiddata";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utilis/firebase";
import { NETFLIX_BG } from "../Utilis/constants";


const Login =()=>{
    const [signup, setSignup] = useState(false);
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [errorMessage, setErrorMessage] = useState(null)

    return(
        <div className="grid-cols-12">
            <Header />
            <div>
            <img src={NETFLIX_BG}></img>
            </div>
            <div className="absolute bg-black h-2/3 w-3/12 my-36 mx-48 left-96 top-4 rounded-lg opacity-90">
            <form className="mx-5" onSubmit={(e)=>{
                    e.preventDefault()
            }}>
                <h1 className="text-white m-7 text-3xl font-bold">{signup?'Sign Up':'Sign In'}</h1>
              {signup && <input ref ={name} className="mx-7 m-4 w-80 h-12 rounded-sm bg-black border text-white" type="text" placeholder="User Name"></input>}
                <input ref ={email} className="mx-7 w-80 h-12 rounded-sm bg-black border text-white" type="text" placeholder="Email"></input>
                <input ref={password} className="mx-7 my-4 w-80 h-12 rounded-sm bg-black border text-white" type='password' placeholder="Password"></input>
                <p className="text-red-700 text-lg mx-7">{errorMessage}</p>
                <button className="bg-red-700 m-7 h-12 w-80 rounded-sm" onClick={()=>{
                   const message = usecheckValiddata(email.current.value, password.current.value)
                   setErrorMessage(message)

                   if(message) return;


                   if(signup){

                    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                        .then((userCredential) => {
                            // Signed up 
                            const user = userCredential.user;
                            
                            updateProfile(user, {
                                displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
                              }).then(() => {
                                // Profile updated!
                                // ...
                              }).catch((error) => {
                                // An error occurred
                                // ...
                                setErrorMessage(error.message)
                              });
                              

                            
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(errorCode+"-"+errorMessage)
                            // ..
                        });

                   }else{
                    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;

                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(errorCode+"-"+errorMessage)
                        });

                   }
                  


                   
                }}>{signup?'Sign Up':'Sign In'}</button>
            </form>
            <p className="text-white cursor-pointer mx-7" onClick={()=>{
               setSignup(!signup) 
            }}>{signup?'Already existing user? Sign In':'New to Netflix? Sign Up'} now</p>
            <br />
            <p className="text-white text-xs mx-7">This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot</p>
            </div>
        </div>
    )
}
export default Login