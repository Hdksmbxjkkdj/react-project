// import axios from "axios";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Notif } from "../../Utils/Notif";
export const RemoveWishList = async(event, id, setrow, all = false) => {
    let url = `http://localhost:313/wishlist/${id}`
    let status = 200
    window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
    try {
        let message;
        await axios.delete(url)
            axios.get("http://localhost:313/wishlist").then((res)=>{
                console.log(res);
                setrow(res);
                if (res.data.status) status = res.data.status
                message = res.data.message
            })
        if (status == 200) {
            Notif('success', "removed successfully :)")
        } else {
            Notif('error', "there is an error with your connection")
        }

    } catch (error) {
        Notif('error', "error")
    }

    window?.$('.spinner-container').fadeOut(1500)

}