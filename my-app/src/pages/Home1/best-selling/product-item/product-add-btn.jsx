import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { AddToCart } from "../../../Cart/AddToCart";
import { RemoveCartItem } from "../../../Cart/RemoveCartItem";
import { event } from "jquery";
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
  //BTNCOLOR
  const [backgroundColor, setBackgroundColor] = useState();
  //BTNCOLOR
  const e =()=>{
    console.log('sasasas',backgroundColor)
   }
  const NotInCart = () => {
    return (
      <>
        <div
          className={
            props.type == "show" ? "t-y-btn t-y-btn-2 mt-2" : "product__add-btn"
          }
        >
          <button
            //  onMouseMove={() =>{setBackgroundColor(backgroundColor === "#fcb700" ? "red" : "#fcb700");e()}}
            // onMouseLeave={() =>{setBackgroundColor(backgroundColor === "#fcb700" ? "red" : "#fcb700");e()}} 
            // onFocus={() =>{setBackgroundColor(backgroundColor === "#fcb700" ? "red" : "#fcb700");e()}}  style={{ backgroundColor: backgroundColor }}
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
            props.type == "show" ? "t-y-btn t-y-btn-2 mt-2" : "product__add-btn"
          }
        >
          <button
            type="button"
            className="bg-danger"
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
            حذف از سبد 
          </button>
        </div>
      </>
    );
  };
  return <>{check.includes(props?.item) ? <StillInCart /> : <NotInCart />}</>;
};

export { ProductAddbtn };

