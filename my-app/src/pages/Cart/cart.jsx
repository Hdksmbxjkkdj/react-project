import { event } from "jquery";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { RemoveCartItem } from "./RemoveCartItem";
const Cart = () => {
  function Total()
  {
    var tot=0;
    for(var i=0;i<cart.length;i++)
    {
        tot+=(cart[i].quantity * cart[i].unitprice);
    }
    var totally = Math.round(tot)-1;
    return totally.toFixed(2);
  }
  const {cart ,setCart}= useContext(CartContext);
  const {count,setCount} = useState()
  const eMessage="error";
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            {
              (cart.length>0)?<div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table" key={Math.random()}>
                    <thead>
                      <tr>
                        <th className="product-thumbnail">تصاویر</th>
                        <th className="cart-product-name">محصولات</th>
                        <th className="product-price">قیمت پایه</th>
                        <th className="product-quantity">تعداد</th>
                        <th className="product-subtotal">مجموع</th>
                        <th className="product-remove">حذف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cart?.map((items) => {
                            return (
                              <>
                                <tr>
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
                                      <input type="text" value={items.quantity} onChange={}/>
                                    </div>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount" style={{fontWeight:"600"}}>{(items.unitprice*items.quantity).toFixed(2)}</span>
                                  </td>
                                  <td className="product-remove">
                                    <a onClick={() => RemoveCartItem(event, items.id, null, setCart, eMessage, true)}>
                                      <i className="fa fa-times"></i>
                                    </a>
                                  </td>
                                </tr>
                              </>
                            );
                          })}

                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          value=""
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="t-y-btn t-y-btn-border"
                          name="apply_coupon"
                          type="submit"
                        >
                          اعمال کد تخفیف
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="t-y-btn t-y-btn-border"
                          name="update_cart"
                          type="submit"
                        >
                          بروزرسانی لیست خرید
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>قیمت کل</h2>
                      <ul className="mb-20">
                        <li>
                          کل <span>{Total()}</span>
                        </li>
                        <li>
                          کل <span>{Total()}</span>
                        </li>
                      </ul>
                      <Link className="t-y-btn" to="/checkout">
                        رفتن به check out
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>:<div className="col-12">
              <div>
                <h4 className="text-center text-danger">
                  لیست سبد خرید شما خالی است !
                </h4>
              </div>
            </div>
            }
            
          </div>
        </div>
      </section>
    </>
  );
};
export { Cart };

