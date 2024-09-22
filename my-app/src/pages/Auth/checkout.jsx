import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CardContext";

const Checkout = () => {
  const [shipping,setShipping] = useState(0);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("user"))
    {
      navigate("/login",{replace:true})
    }
  },[])
  const {cart, setCart,address,setAddress} = useContext(CartContext);
  function total() {
    var tot = 0;
    for (var i = 0; i < cart.length; i++) {
      tot = tot + (cart[i].unitprice*cart[i].quantity);
    }
    return (tot+shipping).toFixed(2);
  }
  return (
    <>
      <section class="coupon-area pb-30">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="coupon-accordion">
                <h3>
                  مشتری بازگشتی هستید ؟{" "}
                  <span id="showlogin">اینجا را کلیک کنید تا وارد شوید</span>
                </h3>
                <div id="checkout-login" class="coupon-content">
                  <div class="coupon-info">
                    <p class="coupon-text">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus. سلام
                    </p>
                    <form action="#">
                      <p class="form-row-first">
                        <label>
                          نام کاربری یا ایمیل <span class="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p class="form-row-last">
                        <label>
                          گذرواژه <span class="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p class="form-row">
                        <button class="t-y-btn t-y-btn-grey" type="submit">
                          ورود
                        </button>
                        <label>
                          <input type="checkbox" />
                          مرا به خاطر داشته باش
                        </label>
                      </p>
                      <p class="lost-password">
                        <a href="#">فراموشی گذرواژه</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="coupon-accordion">
                <h3>
                  آیا کد تخفیف دارید ؟
                  <span id="showcoupon">کد تخفیف را در اینجا وارد نمایید</span>
                </h3>
                <div id="checkout_coupon" class="coupon-checkout-content">
                  <div class="coupon-info">
                    <form action="#">
                      <p class="checkout-coupon">
                        <input type="text" placeholder="Coupon Code" />
                        <button class="t-y-btn t-y-btn-grey" type="submit">
                          اعمال کد تخفیف
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="checkout-area pb-70">
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-lg-6">
                <div class="checkbox-form">
                  <h3>جزییات صورتحساب</h3>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="country-select">
                        <label>
                          کشور <span class="required">*</span>
                        </label>
                        <select className="d-block">
                          <option value="volvo">بنگلادش</option>
                          <option value="saab">الجزایر</option>
                          <option value="mercedes">افغانستان</option>
                          <option value="audi">غنا</option>
                          <option value="audi2">آلبانی</option>
                          <option value="audi3">بحرین</option>
                          <option value="audi4">کلمبیا</option>
                          <option value="audi5">جمهوری چک</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          نام <span class="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          نام خانوادگی <span class="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="checkout-form-list">
                        <label>نام شرکت</label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      {address.length ? <div class="checkout-form-list">
                        <label>
                          آدرس <span class="required">*</span>
                        </label>
                        <select name="" id="" className="form-control" style={{display:"block"}}>
                          {address?.map(item=>{
                            return <option value={item?.address}>{item?.address}</option>
                          })}
                        </select>
                      </div>:null}
                    </div>
                    <div class="col-md-12">
                      <div class="checkout-form-list">
                        <label>
                          شهر <span class="required">*</span>
                        </label>
                        <input type="text" placeholder="شهرک / شهر" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          استان <span class="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          کد پستی <span class="required">*</span>
                        </label>
                        <input type="text" placeholder="کد پستی" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          آدرس ایمیل <span class="required">*</span>
                        </label>
                        <input type="email" placeholder="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          شماره همراه <span class="required">*</span>
                        </label>
                        <input type="text" placeholder="شماره تلفن همراه" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="checkout-form-list create-acc">
                        <Link to="/register">ایجاد حساب کاربری</Link>
                      </div>
                      <div
                        id="cbox_info"
                        class="checkout-form-list create-account"
                      >
                        <p>
                          ساخت یک حساب کاربری با اطلاعات بالا اگر شما یک مشتری
                          بازگشتی هستید لطفا از طریق لینک بالا وارد شوید
                        </p>
                        <label>
                          گذرواژه حساب کاربری <span class="required">*</span>
                        </label>
                        <input type="password" placeholder="password" />
                      </div>
                    </div>
                  </div>
                  <div class="different-address">
                    <div class="ship-different-title">
                      <h3>
                        <label>ارسال به یک آدرس متفاوت ؟</label>
                        <input id="ship-box" type="checkbox" />
                      </h3>
                    </div>
                    <div id="ship-box-info">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="country-select">
                            <label>
                              کشور <span class="required">*</span>
                            </label>
                            <select>
                              <option value="volvo">بنگلادش</option>
                              <option value="saab">الجزایر</option>
                              <option value="mercedes">افغانستان</option>
                              <option value="audi">غنا</option>
                              <option value="audi2">آلبانی</option>
                              <option value="audi3">بحرین</option>
                              <option value="audi4">کلمبیا</option>
                              <option value="audi5">جمهوری چک</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="checkout-form-list">
                            <label>
                              نام <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="checkout-form-list">
                            <label>
                              نام خانوادگی <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="checkout-form-list">
                            <label>نام شرکت</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="checkout-form-list">
                            <label>
                              آدرس <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="Street address" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="checkout-form-list">
                            <input
                              type="text"
                              placeholder="Apartment, suite, unit etc. (optional)"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="checkout-form-list">
                            <label>
                              شهر <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="Town / City" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="checkout-form-list">
                            <label>
                              ایالت <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="checkout-form-list">
                            <label>
                              کد پستی <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="Postcode / Zip" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="checkout-form-list">
                            <label>
                              آدرس ایمیل <span class="required">*</span>
                            </label>
                            <input type="email" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="checkout-form-list">
                            <label>
                              تلفن <span class="required">*</span>
                            </label>
                            <input type="text" placeholder="Postcode / Zip" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="order-notes">
                      <div class="checkout-form-list">
                        <label>دیگر یادداشت ها</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="نکاتی در مورد سفارش شما، به عنوان مثال یادداشت های ویژه برای تحویل."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                {(cart.length>0)?<div class="your-order mb-30 ">
                  <h3>سفارش شما</h3>
                  <div class="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th class="product-name">محصول</th>
                          <th class="product-name">واحد</th>
                          <th class="product-total">کل</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart?.map((item) => {
                          return (
                            <tr class="cart_item">
                              <td class="product-name">
                                {item.name}{" "}
                                <strong class="product-quantity">
                                  {" "}
                                  × {item.quantity}
                                </strong>
                              </td>
                              <td class="product-unit">
                                <strong class="product-quantity"> 
                                {item.unitprice.toFixed(2)} تومان
                                </strong>
                              </td>
                              <td class="product-total">
                                <span class="amount">
                                  {(item.unitprice*item.quantity).toFixed(2)} تومان
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr class="cart-subtotal">
                          <th>جمع کل</th>
                          <td>
                            <span class="amount"></span>
                          </td>
                          <td>
                            <span class="amount">{total()} تومان</span>
                          </td>
                        </tr>
                        <tr class="shipping">
                          <th>ارسال</th>
                          <td>
                            <ul>
                              <li>
                                <input id="count" type="radio" name="shipping" onChange={()=>setShipping(7.00)}/>
                                <label for="count">
                                  نرخ ثابت: <span class="amount">7.00 تومان</span>
                                </label>
                              </li>
                              <li>
                                <input id="free" type="radio" name="shipping" onChange={()=>setShipping(0.00)}/>
                                <label for="free">ارسال رایگان: 0 تومان</label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div class="payment-method">
                    <div class="accordion" id="checkoutAccordion">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="checkoutOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bankOne"
                            aria-expanded="true"
                            aria-controls="bankOne"
                          >
                            انقال مستقیم بانکی
                          </button>
                        </h2>
                        <div
                          id="bankOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="checkoutOne"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div class="accordion-body">
                            پرداخت خود را مستقیماً به حساب بانکی ما انجام دهید.
                            لطفا از شناسه سفارش خود به عنوان مرجع پرداخت استفاده
                            کنید. سفارش شما تا زمانی که وجوه ارسال نشود ارسال
                            نخواهد شد در حساب ما پاک شد.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="paymentTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#payment"
                            aria-expanded="false"
                            aria-controls="payment"
                          >
                            پرداخت را چک کنید
                          </button>
                        </h2>
                        <div
                          id="payment"
                          class="accordion-collapse collapse"
                          aria-labelledby="paymentTwo"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div class="accordion-body">
                            لطفا چک خود را به نام فروشگاه، خیابان فروشگاه، شهر
                            فروشگاه، ایالت فروشگاه / شهرستان، کدپستی فروشگاه.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="paypalThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#paypal"
                            aria-expanded="false"
                            aria-controls="paypal"
                          >
                            پی پال
                          </button>
                        </h2>
                        <div
                          id="paypal"
                          class="accordion-collapse collapse"
                          aria-labelledby="paypalThree"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div class="accordion-body">
                            پرداخت از طریق پی پال؛ اگر می توانید با کارت اعتباری
                            خود پرداخت کنید شما یک حساب پی پال ندارید.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="order-button-payment mt-20">
                      <button type="submit" class="t-y-btn t-y-btn-grey">
                      ثبت سفارش
                      </button>
                      <button type="button" class="t-y-btn t-y-btn-grey mt-10" onClick={()=>navigate("/cart")}>
                      بازگشت به سبد خرید
                      </button>
                    </div>
                  </div>
                </div>:<div className="text-center"><img src="./img/images/cart-empty.png" className="my-3" width={200} alt="empty"></img><h4 className="text-danger text-center">سبد خرید شما خالی میباشد</h4><Link className="btn btn-primary p-3 mt-3 text-light" to="/">بازگشت به صفحه اصلی</Link></div>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export { Checkout };

