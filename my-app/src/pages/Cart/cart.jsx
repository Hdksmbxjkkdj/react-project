import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { useContext, useEffect, useState } from "react";
import { RemoveCartItem } from "./RemoveCartItem";
import { event } from "jquery";
import { Notif } from "../../Utils/Notif";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
const Cart = () => {
  const row = [
    {
      id: 1,
      pic: "product-2.jpg",
      name: "Bakix Furniture",
      unitprice: 130.00,
      quantity: 1,
    },
    {
      id: 2,
      pic: "product-4.jpg",
      name: "Sujon Chair Set",
      unitprice: 120.50,
      quantity: 1,
    },
  ];
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
  useEffect(()=>{
    setCart(row);
  },[])
  useEffect(()=>{
    return (
      async function getitem()
      {
        try
        {
          const res = await axios.get("http://localhost:313/row");
          setCart(res.data)
        }
        catch
        {
          console.log("error");
        }
      }
    )
  },[])
  const eMessage="error"
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.map((items) => {
                        return (
                          <>
                            <tr>
                              <td className="product-thumbnail">
                                <a href="product-details.html">
                                  <img
                                    src={Config.shop + "" +items.pic}
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td className="product-name">
                                <a href="product-details.html" style={{fontWeight:"600"}}>{items.name}</a>
                              </td>
                              <td className="product-price">
                                <span className="amount" style={{fontWeight:"600"}}>{(items.unitprice).toFixed(2)}</span>
                              </td>
                              <td className="product-quantity">
                                <div className="cart-plus-minus">
                                  <input type="text" value={items.quantity} />
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
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="t-y-btn t-y-btn-border"
                          name="update_cart"
                          type="submit"
                        >
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>{Total()}</span>
                        </li>
                        <li>
                          Total <span>{Total()}</span>
                        </li>
                      </ul>
                      <a className="t-y-btn" href="checkout.html">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { Cart };
