import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { AddToCart } from "../../../Cart/AddToCart";
import { RemoveCartItem } from "../../../Cart/RemoveCartItem";
import { ButtonLoader } from "../../../Components/ButtonLoader";
const ProductAddbtn = (props) => {
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
    setLoading(true);
    AddToCart(
      event,
      props.item?.id,
      props.item?.pic,
      props.item?.text,
      props.item?.price,
      1,
      setCart,
      cart,
      setLoading,
      props.item?.number
    );
  }
  function handleRemoveClick(event, props) {
    setLoading(true);
    RemoveCartItem(
      event,
      props.item?.id,
      props.item?.text,
      setCart,
      setLoading,
      "error",
      false
    );
  }
  const NotInCart = () => {
    return (
      <>
        <div
          className={
            props.className
              ? props.className
              : props.type == "show"
              ? "t-y-btn t-y-btn-2 mt-2"
              : "product__add-btn"
          }
          title="اضافه کردن به لیست خرید"
        >
          {(loading)?<ButtonLoader>درحال افزودن</ButtonLoader>:<button
            type="button"
            onClick={(event) =>
              handleAddClick(event,props)

            }
            disabled={props.disabled}
          >
             خرید <i className="fa fa-shopping-basket"></i>
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
            props.className
              ? props.className
              : props.type == "show"
              ? "t-y-btn t-y-btn-2 mt-2"
              : "product__add-btn"
          }
          title="برداشتن از لیست خرید"
        >
          {(loading)?<ButtonLoader>درحال حذف</ButtonLoader>:<button
            type="button"
            style={{ textDecoration: "line-throught" }}
            onClick={(event) => handleRemoveClick(event, props)}
          >
            <i className="fa fa-check"></i> <i className="fa fa-shopping-basket"></i>
          </button>}
        </div>
      </>
    );
  };
  return <>{check.includes(props?.item) ? <StillInCart /> : <NotInCart />}</>;
};

export { ProductAddbtn };
