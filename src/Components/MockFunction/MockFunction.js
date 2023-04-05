export const MockFunction=(isLoggedIn)=>{
    if(isLoggedIn){
        return "You have Logged In"
    }
    return "please login"
}