import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Notif } from "../../Utils";
import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { RemoveCartItem } from "./RemoveCartItem";

export const CartItem = ({ items, index,Total}) => {
  const { cart, setCart } = useContext(CartContext);
  const eMessage = "error";
  const [value, setValue] = useState(items?.quantity);
  const quantityAction = async (event) => {
    let status = 200;
    var x = QuantityRanger(event);
    if(x===undefined) return;
    const newItems = {
      id: items.id,
      pic: items.pic,
      name: items.name,
      unitprice: items.unitprice,
      quantity: x,
      date: items.date,
      number: items.number,
      total:items.unitprice * x
    };
    try {
      const res = await axios.put(
        `http://localhost:313/row/${items?.id}`,
        newItems
      )
      if (res.status) status = res.status;
      if (status == 200) {
        Notif("success", `${items.name} با موفقیت به روزرسانی شد`);
      } else {
        throw "در اینجا یک مشکل وجود دارد !";
      }
    } catch (error) {
      Notif("error", error);
    }
  };
  const QuantityRanger = (event) => {
    var $button = window?.$(event.target);

    if ($button.hasClass("inc")) {
      if(value>=items.number)
      {
        Notif("error", "موجودی کالا در انبار به پایان رسیده است");
        return;
      }
      var newVal = parseInt(value) + 1;
    } else {
      if (value > 1) {
        var newVal = parseInt(value) - 1;
      } else {
        newVal = 1;
      }
    }
    setValue(newVal);
    return newVal;
  };
  return (
    <tr>
      <td className="product-number">
        <span className="amount" style={{ fontWeight: "600" }}>
          {index + 1}
        </span>
      </td>
      <td className="product-thumbnail">
        <Link to={"/product-details/" + items.id}>
          <img src={Config.shop + "" + items.pic} alt="" />
        </Link>
      </td>
      <td className="product-name">
        <Link to={"/product-details/" + items.id} style={{ fontWeight: "600" }}>
          {items.name}
        </Link>
      </td>
      <td className="product-price">
        <span className="amount" style={{ fontWeight: "600" }}>
          {items.unitprice.toFixed(2)}
        </span>
      </td>
      <td className="product-quantity">
        <div className="cart-plus-minus p-relative">
          <span
            class="dec qtybutton"
            onClick={(event) => quantityAction(event)}
          >
            -
          </span>
          <input type="text" value={value} />
          <span
            class="inc qtybutton"
            onClick={(event) => quantityAction(event)}
          >
            +
          </span>
        </div>
      </td>
      <td className="product-subtotal">
        <span className="amount" style={{ fontWeight: "600" }}>
          {(items.unitprice * value).toFixed(2)}
        </span>
      </td>
      <td className="product-remove">
        <a
          onClick={(event) =>
            RemoveCartItem(
              event,
              items.id,
              items.name,
              setCart,
              null,
              eMessage,
              true
            )
          }
        >
          <i className="fa fa-times"></i>
        </a>
      </td>
    </tr>
  );
};
