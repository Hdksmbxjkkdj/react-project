import { Notif } from "../../Utils/Notif";

export const LogOut = () => {
    if(localStorage.getItem("user")!="")
    {
        localStorage.setItem("user","");
        Notif("success" , "با موفقیت خارج شدید !")
    }
    return
};
