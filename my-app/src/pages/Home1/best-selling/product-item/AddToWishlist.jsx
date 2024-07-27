import axios from "axios";
import { useState } from "react";
import { Notif } from "../../../../Utils/Notif";
import {User} from "./User";
export const AddToWishlist = async (id, pic, name, unitprice, quantity) => {
  console.log(id);
  const url = "http://localhost:313/wishlist";
  let status = 200;
  let auth = User();
  (quantity==undefined || quantity==null) ? quantity=1 : quantity=quantity;
  if(auth)
  {
    try{
      await axios
      .post(url, {
        id: id,
        pic: pic,
        name: name,
        unitprice: unitprice,
        quantity: quantity,
      })
      .then((response) => {
        Notif('success',"با موفقیت اضافه شد :)")
      });
    }
    catch(error)
    {
      Notif('error',"قبلا به علاقه مندی ها اضافه شده است !")
    }
  }
  else
  {
    Notif('error', "ابتدا وارد سایت شوید !")
  }
};
