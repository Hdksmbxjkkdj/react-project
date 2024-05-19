import axios from "axios";
import { useState } from "react";
export const AddToWishlist = async (id, pic, name, unitprice, quantity) => {
  const url = "http://localhost:313/wishlist";
  let status = 200;
  (quantity==undefined || quantity==null) ? quantity=1 : quantity=quantity;
  await axios
    .post(url, {
      id: id,
      pic: pic,
      name: name,
      unitprice: unitprice,
      quantity: quantity,
    })
    .then((response) => {
      console.log(response.data);
    });
};
