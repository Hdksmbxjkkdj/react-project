// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import { Notif } from "../../Utils/Notif";
export const RemoveWishList = async(event, PID, UID, setrow, all = false) => {
    const url = "http://localhost:313/wishlist";
    let status = 200
    window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
    try {
        await axios.delete(`${url}/${PID}`)
            await axios.get(`http://localhost:313/wishlist?Uid=${UID}`).then((res)=>{
                setrow(res);
                if (res.data.status) status = res.data.status
            })
        if (status == 200) {
            Notif('success', "با موفقیت از علاقه مندی ها پاک شد :)")
        } else {
            Notif('error', "در اینجا یک خطا وجود دارد !")
        }

    } catch (error) {
        Notif('error', "در اینجا یک خطا وجود دارد")
    }

    window?.$('.spinner-container').fadeOut(1500)

}