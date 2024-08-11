import axios from "axios";
import { Notif } from "../../../../Utils/Notif";
import { User } from "./User";
export const AddToWishlist = async (PID, pic, name, unitprice, UID,setrow) => {
  const url = "http://localhost:313/wishlist";
  let status = 201;
  let auth = User();
  const id = PID + UID;
  if(auth)
  {
    try{
      await axios
      .post(url, {
        id: id,
        Pid: PID,
        pic: pic,
        name: name,
        unitprice: unitprice,
        Uid : UID,
      })
      .then((response) => {
        Notif('success',`${name} با موفقیت به علاقه مندی ها اضافه شد`)
      });
    }
    catch(error)
    {
      Notif('error',"خطای ناشناخته ای رخ داده است !")
    }
    finally {
      axios.get(`${url}?Uid=${UID}`).then((res) => {
        setrow(res);
      })
  }
}
  else
  {
    Notif('error', "ابتدا وارد سایت شوید !")
  }
};