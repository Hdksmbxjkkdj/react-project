// import axios from "axios";
import axios from "axios";
import { Notif } from "../../Utils/Notif";
export const RemoveWishList = async(event, PID,name, UID, setrow, all = false) => {
    event.preventDefault();
    const url = "http://localhost:313/wishlist";
    let status = 200
    const id = PID+UID;
    window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
    try {
        await axios.delete(`${url}/${id}`)
            await axios.get(`http://localhost:313/wishlist?Uid=${UID}`).then((res)=>{
                console.log(res);
                setrow(res);
                if (res.data.status) status = res.data.status
            })
        if (status == 200) {
            Notif('success', `${name} با موفقیت از علاقه مندی ها پاک شد`)
        } else {
            Notif('warning', "در اینجا یک خطا وجود دارد !")
        }

    } catch (error) {
        Notif('error', "در اینجا یک خطا وجود دارد")
    }

    window?.$('.spinner-container').fadeOut(1500)

}