import axios from "axios";
import { useState } from "react";
import { Notif } from "../../../../Utils/Notif";
export const AddToWishlist = async (id, pic, name, unitprice, quantity) => {
  console.log(id);
  const url = "http://localhost:313/wishlist";
  let status = 200;
  (quantity==undefined || quantity==null) ? quantity=1 : quantity=quantity;
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
};
