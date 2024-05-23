import axios from "axios";
import { Notif } from "../../Utils/Notif";
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";

export const AddToCart = async ( event, id, pic, name, unitprice, count = 1, setCart, eMessage, returnPrevCount = null) => {
  let url = `http://localhost:313/row`;

  let quantity = count;
  let status = 200;
  window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
  let message;
  let response = await axios.post(url, {id: id,pic: pic,name: name,unitprice: unitprice,quantity: count,});
          setCart(response?.data);
           (response.data.status) && (status = response.data.status)
      if (status == 200) {
      Notif("success", "added successfully !");
    } else {
      Notif("error", "there was an error here !");
    }
  window?.$(".spinner-container").fadeOut(300);
};
