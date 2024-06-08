import axios from "axios";
import { Notif } from "../../Utils/Notif";
export const RemoveCartItem = async(event, id, name, setCart, eMessage, all = false) => {
    let url = `http://localhost:313/row/${id}`
    let status = 200
    window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
    try {
        let message;
        await axios.delete(url);
        axios.get("http://localhost:313/row").then((response)=>{
            setCart(response);
            if (response.data.status) status = response.data.status
            message = response.data.message
        })
        if (status == 200) {
            Notif('success', "deleted successfully")
        } else {
            Notif('error', "there was an problem !")
        }

    } catch (error) {
        Notif('error', eMessage)
    }

    window?.$('.spinner-container').fadeOut(300)

}