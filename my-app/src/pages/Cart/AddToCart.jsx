import axios from "axios";
import { Notif } from "../../Utils/Notif";
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";

export const AddToCart = async ( event, id, pic, name, unitprice, count = 1, setCart, cart, eMessage, returnPrevCount = null) => {
  let url = `http://localhost:313/row`;
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
  let quantity = count;
  let status = 201;
  window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')
  let message;
  try
  {
    await axios.post(url, {id: id,pic: pic,name: name,unitprice: unitprice,quantity: count,date:today}).then((response)=>{
      (response.data.status) && (status = response.data.status)
    })
    if(status==201)
    {
    Notif('success',"با موفقیت اضافه گردید")
    }
    else
    {
      Notif('error',"آیتم اضافه نشد !")
    }
  }
  catch(error)
  {
    Notif('error',"خظای ناشناخته رخ داده است !")
    return
  }
  finally {
    axios.get(url).then((res)=>{
      setCart(res.data);
    })
  }
  window?.$(".spinner-container").fadeOut(300);
};
