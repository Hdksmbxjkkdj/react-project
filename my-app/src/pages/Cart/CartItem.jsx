import { useContext, useEffect, useState } from "react";
import { Config } from "../../Utils/config";
import { RemoveCartItem } from "./RemoveCartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CardContext";

export const CartItem = ({items,index})=> {
    const {setCart} = useContext(CartContext);
    const eMessage = "error";
    const [count,setCount] = useState(items?.quantity)
    return <tr>
    <td className="product-thumbnail">
      <Link to={"/product-details/:"+items.id}>
        <img
          src={Config.shop + "" +items.pic}
          alt=""
        />
      </Link>
    </td>
    <td className="product-name">
      <Link to={"/product-details/:"+items.id} style={{fontWeight:"600"}}>{items.name}</Link>
    </td>
    <td className="product-price">
      <span className="amount" style={{fontWeight:"600"}}>{(items.unitprice).toFixed(2)}</span>
    </td>
    <td className="product-quantity">
      <div className="cart-plus-minus">
        <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
      </div>
    </td>
    <td className="product-subtotal">
      <span className="amount" style={{fontWeight:"600"}}>{(items.unitprice*items.quantity).toFixed(2)}</span>
    </td>
    <td className="product-remove">
      <a onClick={(event) => RemoveCartItem(event, items.id, null, setCart, eMessage, true)}>
        <i className="fa fa-times"></i>
      </a>
    </td>
  </tr>
}