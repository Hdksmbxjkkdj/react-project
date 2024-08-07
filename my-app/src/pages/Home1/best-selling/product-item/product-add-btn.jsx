import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { AddToCart } from "../../../Cart/AddToCart";
import { RemoveCartItem } from "../../../Cart/RemoveCartItem";
const ProductAddbtn = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [check, setCheck] = useState([]);
  useEffect(() => {
    cart.filter(el=>{
      if(el.id==props?.item?.id)
      {
        setCheck([...check,props?.item])
      }
    })
  },[cart]);
  const NotInCart = () => {
    return (
      <>
        <div
          className={
            props.type == "show" ? "t-y-btn t-y-btn-2 mt-2" : "product__add-btn"
          }
        >
          <button
            type="button"
            onClick={(event) =>
              AddToCart(
                event,
                props.item?.id,
                props.item?.pic,
                props.item?.text,
                props.item?.price,
                1,
                setCart,
                cart
              )
            }
          >
            + سبد خرید
          </button>
        </div>
      </>
    );
  };
  const StillInCart = () => {
    return (
      <>
        <div
          className={
            props.type == "show" ? "t-y-btn t-y-btn-2 mt-2" : "product__add-btn"
          }
        >
          <button
            type="button"
            onClick={(event) =>
              RemoveCartItem(
                event,
                props.item?.id,
                props.item?.text,
                setCart,
                "error",
                false
              )
            }
          >
            - سبد خرید
          </button>
        </div>
      </>
    );
  };
  return <>{check.includes(props?.item) ? <StillInCart /> : <NotInCart />}</>;
};

export { ProductAddbtn };

