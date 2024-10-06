import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CardContext";
import { Loader } from "../Components/loader";
import { CartItem } from "./CartItem";
import { Notif } from "../../Utils";
const Cart = () => {
  const { loader } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const [val, setVal] = useState("");

  function Total() {
    var tot = 0;
    for (var i = 0; i < cart.length; i++) {
      tot += cart[i].quantity * cart[i].unitprice;
    }
    return tot.toFixed(2);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleDiscount() {
    if (!localStorage.getItem("user")) {
      Notif("error", "ابتدا وارد سایت شوید");
      return;
    }
    Notif("error", "کد تخفیف وارد شده صحیح نمی باشد !");
  }
  return (
    <>
      {!loader ? (
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              {cart.length > 0 ? (
                <div className="col-12">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="table-content table-responsive">
                      <table className="table" key={Math.random()}>
                        <thead>
                          <tr>
                            <th className="product-number">ردیف</th>
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
                                <CartItem
                                  items={items}
                                  index={index}
                                />
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
                              placeholder="Coupon code"
                              type="text"
                              value={val}
                              onChange={(e) => setVal(e.target.value)}
                            />
                            <button
                              className="t-y-btn t-y-btn-border"
                              name="apply_coupon"
                              type="submit"
                              onClick={handleDiscount}
                            >
                              اعمال کد تخفیف
                            </button>
                          </div>
                          <div className="coupon2"></div>
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
                          </ul>
                            <Link className="t-y-btn" to="/checkout">
                              تکمیل فرآیند خرید
                            </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="col-12">
                  <div className="text-center">
                    <img src="./img/images/cart-empty.png" alt="" />
                    <h4 className="text-danger">
                      لیست سبد خرید شما خالی است !
                    </h4>
                    <Link
                      to="/products"
                      className="btn btn-primary text-light mt-4"
                    >
                      {" "}
                      <i className="fa fa-arrow-right"></i> رفتن به محصولات
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};
export { Cart };
