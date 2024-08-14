import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { AddToCart } from "../../../Cart/AddToCart";
import { RemoveCartItem } from "../../../Cart/RemoveCartItem";
import { ButtonLoader } from "../../../Components/ButtonLoader";
const ProductAddbtn = ({disabled,...props}) => {
  const { cart, setCart } = useContext(CartContext);
  const [check, setCheck] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    cart.filter((el) => {
      if (el.id == props?.item?.id) {
        setCheck([...check, props?.item]);
      }
    });
  }, [cart]);
  function handleAddClick(event, props) {
    setLoading(true)
    AddToCart(
      event,
      props.item?.id,
      props.item?.pic,
      props.item?.text,
      props.item?.price,
      1,
      setCart,
      cart,
      setLoading
    );
  }
  function handleRemoveClick(event, props) {
    setLoading(true)
    RemoveCartItem(
      event,
      props.item?.id,
      props.item?.text,
      setCart,
      setLoading,
      "error",
      false
    )
  }
  const NotInCart = () => {
    return (
      <>
        <div
          className={
            props.type == "show" ? "t-y-btn t-y-btn-2 mt-2" : "product__add-btn"
          }
        >
          {(loading)?<ButtonLoader/>:<button type="button" onClick={(event) => handleAddClick(event, props)} disabled={disabled}>
            افزودن به سبد
          </button>}
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
          {(loading)?<ButtonLoader bg="#dc3545"/>:<button
            type="button"
            className="bg-danger"
            onClick={(event) =>
              handleRemoveClick(event,props)
            }
          >
            حذف از سبد
          </button>}
        </div>
      </>
    );
  };
  return <>{check.includes(props?.item) ? <StillInCart /> : <NotInCart />}</>;
};

export { ProductAddbtn };

