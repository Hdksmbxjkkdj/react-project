import axios from "axios";
import { Notif } from "../../Utils/Notif";
export const RemoveCartItem = async (
  event,
  id,
  name,
  setCart,
  setLoading,
  eMessage,
  all = false
) => {
  let url = `http://localhost:313/row/${id}`;
  let status = 200;
  window
    ?.$(event.target)
    .parent()
    .find(".spinner-container")
    .css("display", "flex");
  try {
    let message;
    await axios.delete(url);
    axios.get("http://localhost:313/row").then((response) => {
      setCart(response.data);
      if (response.data.status) status = response.data.status;
      message = response.data.message;
      if (setLoading != null) setLoading(false);
    });
    if (status == 200) {
      Notif("success", `${name} با موفقیت  از سبد خرید پاک شد`);
    } else {
      Notif("error", "در این جا یک خطا وجود دارد  !");
    }
  } catch (error) {
    Notif("error", eMessage);
    setLoading(false)
  }

  window?.$(".spinner-container").fadeOut(300);
};
