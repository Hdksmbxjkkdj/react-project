import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { AddToCart } from "../../../Cart/AddToCart";
import { RemoveCartItem } from "../../../Cart/RemoveCartItem";
import { event } from "jquery";
const ProductAddbtn = (props) => {
  console.log(props,'productdetails')
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
  //BTNCOLOR
  const [backgroundColor, setBackgroundColor] = useState();
  //BTNCOLOR
  const e =()=>{
   }
  const NotInCart = () => {
    return (
      <>
        <div
          className={
            props.className ? props.className :
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
            افزودن به سبد
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
            props.className?props.className :
            props.type == "show" ? "t-y-btn t-y-btn-2 mt-2" : "product__add-btn"
          }
        >
          <button
            type="button"
            className="text-danger fw-bold"
            style={{textDecoration:"line-throught"}}
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
            حذف از سبد <i className="fa fa-trash"></i>
          </button>
        </div>
      </>
    );
  };
  return <>{check.includes(props?.item) ? <StillInCart /> : <NotInCart />}</>;
};

export { ProductAddbtn };

