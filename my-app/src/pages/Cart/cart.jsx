import { event } from "jquery";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CardContext";
import { CartItem } from "./CartItem";
const Cart = () => {
  function Total() {
    var tot = 0;
    for (var i = 0; i < cart.length; i++) {
      tot += cart[i].quantity * cart[i].unitprice;
    }
    var totally = Math.round(tot) - 1;
    return totally.toFixed(2);
  }
  function handleSubmit(e) {
    e.preventDefault();
    cart.map(item=>{
      console.log(item.quantity);
    })
  }
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            {cart.length > 0 ? (
              <div className="col-12">
                <form onSubmit={(e)=>handleSubmit(e)}>
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
                        {cart?.map((items, index) => {
                          return (
                            <>
                              <CartItem items={items} index={index} />
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
              </div>
            ) : (
              <div className="col-12">
                <div>
                  <h4 className="text-center text-danger">
                    لیست سبد خرید شما خالی است !
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export { Cart };
