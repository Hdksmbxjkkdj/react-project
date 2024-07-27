export const User = ()=> {
    var check = localStorage.getItem("user");
    if(check==null || check ==undefined || check=="")
    {
        return false
    }
    return check;
}