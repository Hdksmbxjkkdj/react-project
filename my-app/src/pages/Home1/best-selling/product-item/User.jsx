export const User = ()=> {
    var check = localStorage.getItem("user");
    const user = JSON.parse(check);
    if(check==null || check ==undefined || check=="" || user.username=="مهمان")
    {
        return false
    }
    return true;
}