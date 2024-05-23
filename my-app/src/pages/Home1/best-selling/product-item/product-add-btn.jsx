import { event } from "jquery";
import {AddToCart} from "../../../Cart/AddToCart";
import { useContext } from "react";
import { CartContext } from "../../../../context/CardContext";
const ProductAddbtn = (props) => {
  const {setCart} = useContext(CartContext);
  return (
    <>
      <div className={(props.type=="show")?"t-y-btn t-y-btn-2 mt-2":"product__add-btn"}>
        <button type="button" onClick={()=>AddToCart(event,props.item?.id,props.item?.pic,props.item?.text,props.item?.price,1,setCart)}>Add to Cart</button>
      </div>
    </>
  );
};

export { ProductAddbtn };
