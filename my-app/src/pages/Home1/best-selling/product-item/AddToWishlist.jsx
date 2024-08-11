import axios from "axios";
import { Notif } from "../../../../Utils/Notif";
import { User } from "./User";
export const AddToWishlist = async (PID, pic, name, unitprice, UID, quantity) => {
  const url = "http://localhost:313/wishlist";
  let status = 200;
  let auth = User();
  const id = PID + UID;
  (quantity==undefined || quantity==null) ? quantity=1 : quantity=quantity;
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
        quantity: quantity,
        Uid : UID,
      })
      .then((response) => {
        Notif('success',"با موفقیت اضافه شد :)")
      });
    }
    catch(error)
    {
      await axios.delete(`${url}/${id}`)
      Notif('success',"با موفقیت از علاقه مندی ها پاک شد !")
    }
  }
  else
  {
    Notif('error', "ابتدا وارد سایت شوید !")
  }
};
