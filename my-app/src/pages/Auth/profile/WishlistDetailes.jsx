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
        <section className="cart-area pb-100">
          <div className="container">
            <div classname="row">
              {
                (row?.data.length>0)?<div class="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">ردیف</th>
                        <th classname="product-thumbnail">تصویر</th>
                        <th classname="cart-product-name">محصول</th>
                        <th classname="product-price">قیمت واحد</th>
                        <th classname="product-remove">حذف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      row?.data.map((item,index) => {
                        return <>
                            <tr>
                              <td className="product-thumbnail">
                                  <p>{index+1}</p>
                              </td>
                              <td className="product-thumbnail">
                                <Link to={"/product-details/"+item.Pid}>
                                  <img
                                    src={Config.shop + "" + item.pic}
                                    alt=""
                                  />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link to={"/product-details/"+item.Pid}
                                  style={{ fontWeight: "600" }}
                                >
                                  {item.name}
                                </Link>
                              </td>
                              <td className="product-price">
                                <span
                                  className="amount"
                                  style={{ fontWeight: "600" }}
                                >
                                  {item.unitprice?.toFixed(2)}
                                </span>
                              </td>
                              
                              <td className="product-remove" key={Math.random()}>
                                <a href="#" onClick={(event)=> RemoveWishList(event,item.Pid,item.name, use.id,setrow,false)}>
                                  <i className="fa fa-times"></i>
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