// import axios from "axios";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Notif } from "../../Utils/Notif";
export const RemoveWishList = async(event, id, name, setrow, eMessage, all = false) => {
    let url = `http://localhost:313/wishlist/${id}`
    let status = 200
    window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
    try {
        let message;
        await axios.delete(url).then((response) => {
            console.log(response);
            setrow(response)
            if (response.data.status) status = response.data.status
            message = response.data.message
        })

        if (status == 200) {
            Notif('success', "message")
        } else {
            Notif('error', "message")
        }

    } catch (error) {
        Notif('error', eMessage)
    }

    window?.$('.spinner-container').fadeOut(300)

}