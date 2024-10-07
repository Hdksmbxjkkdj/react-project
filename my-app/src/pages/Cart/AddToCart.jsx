import axios from "axios";
import { Notif } from "../../Utils/Notif";

export const AddToCart = (
  event,
  id,
  pic,
  name,
  unitprice,
  count = 1,
  setCart,
  cart,
  setLoading,
  number,
  eMessage,
  returnPrevCount = null
) => {
  event.preventDefault();
  let url = `http://localhost:313/row`;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  let quantity = count;
  if (number == 0) {
    Notif("error", "این محصول در انبار موجود نیست !");
    if (setLoading !== null)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    return false;
  }
  if (quantity < 1) {
    Notif("warning", "تعداد نمیتواند کمتر از 1 باشد");
    return false;
  }
  if (count > number) {
    Notif("error", `از این محصول فقط ${number} عدد موجود است`);
    return false;
  }
  let status = 201;
  let message;
  axios
    .post(url, {
      id: id,
      pic: pic,
      name: name,
      unitprice: unitprice,
      quantity: count,
      date: today,
      number: number,
      total: count * unitprice,
    })
    .then((response) => {
      if (setLoading !== null)
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      response.data.status && (status = response.data.status);
      if (status == 201) {
        Notif("success", `${name} با موفقیت به سبد خرید اضافه شد`);
      } else {
        Notif("error", "آیتم اضافه نشد !");
      }
    })
    .catch((err) => {
      Notif("error", err.message);
    })
    .finally(() => {
      axios.get(url).then((res) => {
        setCart(res.data);
      });
    });
};
