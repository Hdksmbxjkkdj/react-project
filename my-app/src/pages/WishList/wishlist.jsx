import { Config } from "../../Utils/config";
import {useContext, useEffect, useState} from "react"
import { AddToCart } from "../Cart/AddToCart";
import axios from "axios";
import { RemoveWishList } from "./RemoveWishList";
import { event } from "jquery";
import { CartContext } from "../../context/CardContext";
import { Link } from "react-router-dom";
const WishList = () => {
  const {setCart} = useContext(CartContext);
  const [row, setrow] = useState();
  useEffect(() => {
        axios.get("http://localhost:313/wishlist").then((res)=>{
          setrow(res);
        })
  }, row);
  const eMessage = "error";
  return (
    <>
      <main key={Math.random()}>
        <section class="cart-area pb-100">
          <div class="container">
            <div class="row">
              <div class="col-12">
                  <div class="table-content table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">تصویر</th>
                          <th class="cart-product-name">محصول</th>
                          <th class="product-price">قیمت واحد</th>
                          <th class="product-quantity">تعداد</th>
                          <th class="product-subtotal">مجموع</th>
                          <th class="product-remove">حذف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                        row?.data.map((item) => {
                          return <>
                              <tr>
                                <td class="product-thumbnail">
                                  <Link to={"/product-details"+item.id}>
                                    <img
                                      src={Config.shop + "" + item.pic}
                                      alt=""
                                    />
                                  </Link>
                                </td>
                                <td class="product-name">
                                  <Link to={"/product-details/:"+item.id}
                                    style={{ fontWeight: "600" }}
                                  >
                                    {item.name}
                                  </Link>
                                </td>
                                <td class="product-price">
                                  <span
                                    class="amount"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {item.unitprice?.toFixed(2)}
                                  </span>
                                </td>
                                <td class="product-quantity">
                                  <div class="cart-plus-minus">
                                    <button
                                      class="t-y-btn t-y-btn-grey fw-bold"
                                      type="submit"
                                      onClick={(event) => AddToCart(
                                        event,
                                        item.id,
                                        item.pic,
                                        item.name,
                                        item.unitprice,
                                        item.quantity,
                                        setCart,
                                        eMessage,
                                        null
                                      )}
                                    >
                                      سبد خرید +
                                    </button>
                                  </div>
                                </td>
                                <td class="product-subtotal">
                                  <span
                                    class="amount"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {(item.unitprice * item.quantity).toFixed(
                                      2
                                    )}
                                  </span>
                                </td>
                                <td class="product-remove">
                                  <a href="#" onClick={()=> RemoveWishList(event,item.id,setrow,false)}>
                                    <i class="fa fa-times"></i>
                                  </a>
                                </td>
                              </tr>
                            </>
                        })}
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export { WishList };
