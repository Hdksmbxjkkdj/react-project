import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CardContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notif } from "../../Utils";

const Checkout = () => {
  const { cart, setCart, address, setAddress } = useContext(CartContext);
  const u = localStorage.getItem("user");
  const user = JSON.parse(u);
  const { order, setOrder } = useContext(CartContext);
  const [shipping, setShipping] = useState(0);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.username,
      email: user?.id,
    },
  });
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login", { replace: true });
    }
  }, []);
  function total() {
    var tot = 0;
    for (var i = 0; i < cart.length; i++) {
      tot = tot + cart[i].unitprice * cart[i].quantity;
    }
    return (tot + shipping).toFixed(2);
  }
  let date = new Date();
  date = Intl.DateTimeFormat("fa-IR").format(date);
  const options = {
    family: {
      required: "نام خانوادگی نمیتواند خالی بماند",
    },
    city: {
      required: " شهر نمیتواند خالی بماند",
    },
    state: {
      required: " استان نمیتواند خالی بماند",
    },
    zip_code: {
      required: " کد پستی نمیتواند خالی بماند",
    },
    email: {
      required: "  ایمیل نمیتواند خالی بماند",
    },
    phone: {
      required: "  تلفن همراه نمیتواند خالی بماند",
    },
    new_address: {
      required: "باید یک آدرس را وارد نمایید",
    },
  };
  function onSubmit(d) {
    const data = {
      ...d,
      code: Math.ceil(Math.random() * 100000000),
      Uid: user.id,
      date: date,
      price: total(),
      stage: "ثبت سفارش",
      shipping: shipping,
      cart:cart
    };
    axios
      .post(`http://localhost:313/order`, data)
      .then((response) => {
        console.log(response.data);
        setOrder([...order, response.data]);
        cart.map((item) => {
          axios.delete(`http://localhost:313/row/${item.id}`);
        });
        setCart([]);
      });
    reset();
    Notif("success", "سفارش شما با موفقیت ثبت گردید");
  }
  function onErrors(err) {}
  return (
    <>
      <section class="coupon-area pb-3 pt-4"></section>
      <section class="checkout-area pb-70">
        <div class="container">
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div class="row">
              <div class="col-lg-6">
                <div class="checkbox-form">
                  <h3>جزییات صورتحساب</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          نام <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="text"
                          {...register("name")}
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          نام خانوادگی <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="text"
                          placeholder=""
                          {...register("family",options.family)}
                        />
                      <p className="text-danger" style={{textAlign:"right"}}><small>{errors?.family&&errors?.family.message}</small></p>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="checkout-form-list">
                        <label>نام شرکت</label>
                        <input
                          className="px-2"
                          type="text"
                          placeholder=""
                          {...register("company")}
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      {address.length ? (
                        <div class="checkout-form-list">
                          <label>
                            آدرس <span class="required">*</span>
                          </label>
                          <select
                            {...register("address")}
                            className="form-control"
                            style={{ display: "block" }}
                          >
                            {address?.map((item) => {
                              return (
                                <option
                                  value={item.address}
                                  key={Math.random()}
                                >
                                  {item.address}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      ) : (
                        <p style={{ textAlign: "right" }}>آدرسی ثبت نشده</p>
                      )}
                    </div>
                    <div class="col-md-12">
                      <div class="checkout-form-list">
                        <label>
                          شهر <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="text"
                          placeholder="شهرک / شهر"
                          {...register("city",options.city)}
                        />
                      <p className="text-danger" style={{textAlign:"right"}}><small>{errors?.city&&errors?.city.message}</small></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          استان <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="text"
                          placeholder=""
                          {...register("state",options.state)}
                        />
                      <p className="text-danger" style={{textAlign:"right"}}><small>{errors?.state&&errors?.state.message}</small></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          کد پستی <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="text"
                          placeholder="کد پستی"
                          {...register("zip_code",options.zip_code)}
                        />
                      <p className="text-danger" style={{textAlign:"right"}}><small>{errors?.zip_code&&errors?.zip_code.message}</small></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          آدرس ایمیل <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="email"
                          placeholder=""
                          {...register("email",options.email)}
                        />
                      <p className="text-danger" style={{textAlign:"right"}}><small>{errors?.email&&errors?.city.email}</small></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="checkout-form-list">
                        <label>
                          شماره همراه <span class="required">*</span>
                        </label>
                        <input
                          className="px-2"
                          type="text"
                          placeholder="شماره تلفن همراه"
                          {...register("phone",options.phone)}
                        />
                      <p className="text-danger" style={{textAlign:"right"}}><small>{errors?.phone&&errors?.phone.message}</small></p>
                      </div>
                    </div>
                  </div>
                  <div class="different-address">
                    <div class="ship-different-title mb-5">
                      <h3>
                        <label htmlFor="ship-box">
                          ارسال به یک آدرس متفاوت ؟
                        </label>
                      </h3>
                      <input
                        className="یک آدرس متفاوت"
                        type="text"
                        {...register("new_address")}
                      />
                      <p className="text-danger" style={{ textAlign: "right" }}>
                        <small>
                          {errors?.new_address && errors?.new_address.message}
                        </small>
                      </p>
                    </div>
                    <div class="order-notes">
                      <div class="checkout-form-list">
                        <label>دیگر یادداشت ها</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="نکاتی در مورد سفارش شما، به عنوان مثال یادداشت های ویژه برای تحویل."
                          {...register("text")}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                {cart.length > 0 ? (
                  <div class="your-order mb-30 ">
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
                                    {(item.unitprice * item.quantity).toFixed(
                                      2
                                    )}{" "}
                                    تومان
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
                                  <input
                                    id="count"
                                    type="radio"
                                    name="shipping"
                                    onChange={() => setShipping(7.0)}
                                  />
                                  <label for="count">
                                    نرخ ثابت:{" "}
                                    <span class="amount">7.00 تومان</span>
                                  </label>
                                </li>
                                <li>
                                  <input
                                    id="free"
                                    type="radio"
                                    name="shipping"
                                    onChange={() => setShipping(0.0)}
                                  />
                                  <label for="free">
                                    ارسال رایگان: 0 تومان
                                  </label>
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
                              پرداخت خود را مستقیماً به حساب بانکی ما انجام
                              دهید. لطفا از شناسه سفارش خود به عنوان مرجع پرداخت
                              استفاده کنید. سفارش شما تا زمانی که وجوه ارسال
                              نشود ارسال نخواهد شد در حساب ما پاک شد.
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
                      </div>
                      <div class="order-button-payment mt-20">
                        <button type="submit" class="t-y-btn t-y-btn-grey">
                          ثبت سفارش
                        </button>
                        <button
                          type="button"
                          class="t-y-btn t-y-btn-grey mt-10"
                          onClick={() => navigate("/cart")}
                        >
                          بازگشت به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src="./img/images/cart-empty.png"
                      className="my-3"
                      width={200}
                      alt="empty"
                    ></img>
                    <h4 className="text-danger text-center">
                      سبد خرید شما خالی میباشد
                    </h4>
                    <Link
                      className="btn btn-primary p-3 mt-3 text-light"
                      to="/"
                    >
                      بازگشت به صفحه اصلی
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export { Checkout };
