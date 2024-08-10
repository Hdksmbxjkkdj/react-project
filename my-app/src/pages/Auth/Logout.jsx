import { Notif } from "../../Utils/Notif";

export const LogOut = () => {
    if(localStorage.getItem("user")!="")
    {
        localStorage.removeItem("user");
        Notif("success" , "با موفقیت خارج شدید !")
    }
    return
};
