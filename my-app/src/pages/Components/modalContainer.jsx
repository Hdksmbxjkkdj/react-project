import { Link } from "react-router-dom";
import { Config } from "../../Utils/config";
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import { RemoveCartItem } from "../Cart/RemoveCartItem";

export const ModalContainer = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <div>
        <div className="cart__title">
          <h4>سبد خرید من</h4>
          <span>({cart?.length} محصول)</span>
        </div>
        <ul className="cart__item-container px-2">
          {cart?.length > 0 &&
            cart.map((item) => {
              return (
                <>
                  <li key={Math.random()}>
                    <div className="cart__item d-flex justify-content-between align-items-center">
                      <div className="cart__inner d-flex">
                        <div className="cart__thumb">
                          <Link to={`product-details/${item?.id}`}>
                            <img src={Config.shop + "" + item?.pic} alt="" />
                          </Link>
                        </div>
                        <div className="cart__details">
                          <h6>
                            <Link to={`product-details/${item?.id}`}>
                              {" "}
                              {item?.name}
                            </Link>
                          </h6>
                          <div className="cart__price">
                            <span>{item?.unitprice}$</span>
                          </div>
                        </div>
                        <div className="mx-2">
                          <button
                            onClick={(event) =>
                              RemoveCartItem(
                                event,
                                item?.id,
                                item?.name,
                                setCart,
                                "error",
                                true
                              )
                            }
                          >
                            <i className="fa fa-times fs-6 fw-bold"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
        </ul>
        <div className="cart__sub d-flex justify-content-between align-items-center">
          <h6>جمع</h6>
          <span className="cart__sub-total"></span>
        </div>
        <Link to="/checkout" className="t-y-btn w-100 mb-10">
          رفتن به checkout
        </Link>
        <Link to="/cart" className="t-y-btn t-y-btn-border w-100 mb-10">
          دیدن لیست خرید
        </Link>
      </div>
    </>
  );
};
