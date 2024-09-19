import { Link } from "react-router-dom";
import { Config } from "../../Utils/config";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CardContext";
import { RemoveCartItem } from "../Cart/RemoveCartItem";

export const ModalContainer = () => {
  const { cart, setCart } = useContext(CartContext);
  const [tot,setTot] = useState(0);
  useEffect(()=>{
    var x=0;
    cart.map(item=>{
      x+=item.total
    })
    setTot(x)
  },[cart])
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
                      <div className="cart__inner d-flex justify-content-between w-100">
                        <div className=" d-flex">
                        <div className="cart__thumb">
                          <Link to={`product-details/${item?.id}`}>
                            <img src={Config.shop + "" + item?.pic} alt="" />
                          </Link>
                        </div>
                        <div className="cart__details">
                          <h6>
                            <Link to={`product-details/${item?.id}`}>
                              {" "}
                              {`x ${item?.quantity} ${item?.name}`}
                            </Link>
                          </h6>
                          <div className="cart__price">
                            <span>{item?.unitprice} تومان</span>
                          </div>
                        </div>
                        </div>
                        <div>
                          <button
                            onClick={(event) =>
                              RemoveCartItem(
                                event,
                                item?.id,
                                item?.name,
                                setCart,
                                null,
                                "error",
                                true
                              )
                            }
                          >
                            <i className="fa fa-trash-alt fw-light text-danger"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
        </ul>
        <div className="d-flex justify-content-between mt-2 px-2">
          <p>قیمت نهایی : </p>
          <p>{tot} تومان</p>
        </div>
        <Link to="/checkout" className="t-y-btn t-y-btn-border w-100 mb-10">
          تکمیل فرآیند خرید
        </Link>
        <Link to="/cart" className="t-y-btn t-y-btn-border w-100 mb-10">
          دیدن لیست خرید
        </Link>
      </div>
    </>
  );
};
