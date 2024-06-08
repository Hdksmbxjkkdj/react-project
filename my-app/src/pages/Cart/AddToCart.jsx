import axios from "axios";
import { Notif } from "../../Utils/Notif";
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";

export const AddToCart = async ( event, id, pic, name, unitprice, count = 1, setCart, eMessage, returnPrevCount = null) => {
  let url = `http://localhost:313/row`;
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
  let quantity = count;
  let status = 200;
  window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
  let message;
  try
  {
    let response = await axios.post(url, {id: id,pic: pic,name: name,unitprice: unitprice,quantity: count,date:today});
          setCart(response?.data);
           (response.data.status) && (status = response.data.status)
      if (status == 200) {
      Notif("success", "added successfully !");
    } else {
      Notif("error", "there is an error here !");
    }
  }
  catch(error)
  {
    Notif('error',"there is an error !")
  }
  window?.$(".spinner-container").fadeOut(300);
};
