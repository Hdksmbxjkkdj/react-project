import { CartContext } from "../../../context/CardContext";
import { useContext } from "react";
import { Config } from "../../../Utils";
import { RemoveWishList } from "../../WishList/RemoveWishList";
import { Link } from "react-router-dom";

export const WishlistDetailes = ({className})=> {
    const {row, setrow} = useContext(CartContext);
    let use = localStorage.getItem("user");
    use = JSON.parse(use);
    return <div className={`table__box ${className}`}>
        <section class="cart-area pb-100">
          <div class="container">
            <div class="row">
              {
                (row?.data.length>0)?<div class="col-12">
                <div class="table-content table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">ردیف</th>
                        <th class="product-thumbnail">تصویر</th>
                        <th class="cart-product-name">محصول</th>
                        <th class="product-price">قیمت واحد</th>
                        <th class="product-remove">حذف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      row?.data.map((item,index) => {
                        return <>
                            <tr>
                              <td class="product-thumbnail">
                                  <p>{index+1}</p>
                              </td>
                              <td class="product-thumbnail">
                                <Link to={"/product-details/"+item.Pid}>
                                  <img
                                    src={Config.shop + "" + item.pic}
                                    alt=""
                                  />
                                </Link>
                              </td>
                              <td class="product-name">
                                <Link to={"/product-details/"+item.Pid}
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
                              
                              <td class="product-remove" key={Math.random()}>
                                <a href="#" onClick={(event)=> RemoveWishList(event,item.Pid,item.name, use.id,setrow,false)}>
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
              <div className="mt-5 text-center">
                <img src="./img/images/empty-wishlist.png" width={200} alt="" />
                <h4 className="text-danger text-center my-3">
                  لیست علاقه مندی های شما خالی می باشد !
                </h4>
              </div>
            </div>
              }
              
            </div>
          </div>
        </section>
    </div>
}