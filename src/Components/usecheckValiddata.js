const usecheckValiddata=(email, password)=>{
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isValidEmail = emailRegex.test(email);

const passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/i;
const isPasswordValid = passwordRegex.test(password)
if(!isValidEmail){
    return "Email ID is not Valid"
}
if(!isPasswordValid){
    return "Password is not Valid"
}

return null;
}
export default usecheckValiddata;