import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { RemoveWishList } from "./RemoveWishList"
const WishList = () => {
  const {wish,setWish} = useContext(CartContext);
  const [row, setrow] = useState();
  const [use,setUser] = useState();
  useEffect(() => {
    const u = localStorage.getItem("user");
    const user = JSON.parse(u);
    axios.get(`http://localhost:313/register?username=${user.username}`).then((response)=>{
      setUser(response.data[0].id)
    })
        axios.get(`http://localhost:313/wishlist?Uid=${use}`).then((res)=>{
          setrow(res);
        })
  }, [use]);
  const eMessage = "error";
  return (
    <>
      <main key={Math.random()}>
        <section class="cart-area pb-100">
          <div class="container">
            <div class="row">
              {
                (row?.data.length>0)?<div class="col-12">
                <div class="table-content table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="product-thumbnail">تصویر</th>
                        <th class="cart-product-name">محصول</th>
                        <th class="product-price">قیمت واحد</th>
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
                              <td class="product-remove" key={Math.random()}>
                                <a href="#" onClick={(event)=> RemoveWishList(event,item.id, use,setrow,false,wish,setWish)}>
                                  <i class="fa fa-times"></i>
                                </a>
                              </td>
                            </tr>
                          </>
                      })}
                    </tbody>
                  </table>
                </div>
            </div>:<div className="col-12">
              <div className="mt-5">
                <h4 className="text-danger text-center">
                  لیست علاقه مندی های شما خالی می باشد !
                </h4>
              </div>
            </div>
              }
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export { WishList };

