import { Button } from "../../../Compont/Forms/Button"
import {Notif} from "../../../Utils/Notif";

export const AddressDetails = ()=>{
    function handleClick()
    {
        Notif("info","در نسخه آزمایشی در دسترس نیست")
    }
    return <>
        <p>این آدرس در زمان پرداخت سفارش شما استفاده میشود</p>
        <p>تاکنون آدرسی ثبت نشده است</p>
        <Button label="ثبت آدرس" className="btn btn-primary p-3" onClick={handleClick}/>
    </>
}