import axios from "axios";
import { Notif } from "../../Utils/Notif";

export const AddToCart = async (
  event,
  id,
  pic,
  name,
  unitprice,
  count = 1,
  setCart,
  cart,
  setLoading,
  eMessage,
  returnPrevCount = null
) => {
  // const {setLoader} = useContext(CartContext);
  event.preventDefault();
  let url = `http://localhost:313/row`;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  let quantity = count;
  if (quantity < 1) {
    Notif("warning", "تعداد نمیتواند کمتر از 1 باشد");
    return false;
  }
  let status = 201;
  let message;
  try {
    await axios
      .post(url, {
        id: id,
        pic: pic,
        name: name,
        unitprice: unitprice,
        quantity: count,
        date: today,
      })
      .then((response) => {
        response.data.status && (status = response.data.status);
      });
    if (status == 201) {
      Notif("success", `${name} با موفقیت به سبد خرید اضافه شد`);
    } else {
      Notif("error", "آیتم اضافه نشد !");
    }
  } catch (error) {
    Notif("error", "خظای ناشناخته رخ داده است !");
    return;
  } finally {
    axios.get(url).then((res) => {
       setCart(res.data);
    });
  }
};
