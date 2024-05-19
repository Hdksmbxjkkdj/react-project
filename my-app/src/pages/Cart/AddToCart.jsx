import axios from "axios";
import { Notif } from "../../Utils/Notif";

export const AddToCart = async (
  id,
  pic,
  name,
  unitprice,
  count = 1,
  setCart,
  eMessage,
  returnPrevCount = null
) => {
  let url = `http://localhost:313/row`;
  let quantity = count;
  let status = 200;
  alert("hello")

  // window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')

  try {
    let message;

    await axios
      .post(url, {
        id: id,
        pic: pic,
        name: name,
        unitprice: unitprice,
        quantity: count,
      })
      .then((response) => {
        console.log('response=>' , response);
        setCart(response.data)
        if (response.data.status) status = response.data.status
        message = response.data.message
      });

    if (status == 200) {
      Notif("success", message);
    } else {
      Notif("error", message);
      // returnPrevCount(event)
    }
  } catch (error) {
    Notif("error", eMessage);
  }

//   window?.$(".spinner-container").fadeOut(300);
};
