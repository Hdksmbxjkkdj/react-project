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
            setCart(response.data);
            if (response.data.status) status = response.data.status
            message = response.data.message
        })
        if (status == 200) {
            Notif('success', `${name} با موفقیت  از علاقه مندی ها پاک شد`)
        } else {
            Notif('error', "در این جا یک خطا وجود دارد  !")
        }

    } catch (error) {
        Notif('error', eMessage)
    }

    window?.$('.spinner-container').fadeOut(300)

}