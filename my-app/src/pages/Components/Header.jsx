import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { Loader } from "../Components/loader";
import { Menu } from "./Menu";
import { ItemsSearch } from "./Search";
import { ModalContainer } from "./modalContainer";

const Header = () => {
  window?.$("document").ready(function () {
    window?.$(window).on("scroll", function () {
      var scroll = window?.$(window).scrollTop();
      if (scroll < 100) {
        window?.$("#header-sticky").removeClass("sticky");
        window?.$("#header__transparent").removeClass("transparent-sticky");
      } else {
        window?.$("#header-sticky").addClass("sticky");
        window?.$("#header__transparent").addClass("transparent-sticky");
      }
    });
    let cartToggleStatus = false;
    window?.$(".cart__toggle").on("click", function () {
      window?.$(".cart__mini").addClass("cart__opened");
      if (cartToggleStatus === false) {
        window?.$(".cart__toggle").addClass("cart__toggle-open");

        cartToggleStatus = true;
      } else if (cartToggleStatus === true) {
        window?.$(".cart__toggle").removeClass("cart__toggle-open");
        window?.$(".cart__mini").removeClass("cart__opened");

        cartToggleStatus = false;
      }
    });
    window?.$(".cart__close-btn").on("click", function () {
      window?.$(".cart__mini").removeClass("cart__opened");
      window?.$(".cart__toggle").removeClass("cart__toggle-open");
      cartToggleStatus = false;
    });
    window?.$(".offcanvas-toggle-btn").on("click", function () {
      window?.$(".offcanvas__area").addClass("opened");
      window?.$(".body-overlay").addClass("opened");
    });
    window?.$(".offcanvas__close-btn").on("click", function () {
      window?.$(".offcanvas__area").removeClass("opened");
      window?.$(".body-overlay").removeClass("opened");
    });
  });
  const { cart,setCart } = useContext(CartContext);
  const { searching } = ItemsSearch();
  const [reslut, setResult] = useState();
  const [loading,setLoading] = useState(false);
  const param = window.location.pathname.split("/").pop();
  function tot()
  {
    var total=0;
    cart.forEach(element => {
      total+=element.unitprice;
      return total;
    });
  }
  const user = localStorage.getItem("user");
  const use  = JSON.parse(user)
  const navigate = useNavigate()
  useEffect(()=>{
    window?.$(".cart__mini").removeClass("cart__opened");
    // window?.$("#exampleModal").removeClass("show");
    // window?.$(".modal-backdrop").removeClass("show")
  },[navigate])
  return (
    <>
      <header id="header" className={(param=="register"||param=="Register"||param=="login"||param=="Login")?"d-none":""}>
        <div className="header__area">
          <div className="header__top d-none d-sm-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                  {
                    (user)&&<div className="header__welcome">
                    <span>{use?.username} عزیز به سایت ما خوش آمدید</span>
                  </div>
                  }
                </div>
                <div className="col-xl-6 col-lg-6 col-md-7">
                  <div className="header__action d-flex justify-content-center justify-content-md-end">
                    <ul>
                      {(user)&&<li>
                        <Link to="/profile">پروفایل</Link>
                      </li>}
                      {(user)&&<li>
                        <Link to="wishlist">علاقه مندی ها</Link>
                      </li>}
                      <li>
                          <Link to="/register">ثبت نام/ورود</Link>
                      </li>
                      <li>
                        <a style={{color:"#ccc"}} disabled={true}>مقایسه</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__info">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-3">
                  <div className="header__info-left d-flex justify-content-center justify-content-sm-between align-items-center">
                    <div className="logo">
                      <Link to="/">
                        <img src={"./img/logo/logo-black.png"} alt="logo" />
                      </Link>
                    </div>
                    <div className="cart__mini-wrapper d-none d-md-flex f-right p-relative" key={Math.random()}>
                      <span className="cart__toggle text-center" style={{lineHeight:"3rem",cursor:"pointer"}}>
                        <i className="fa fa-cart-shopping fs-5"></i>
                        <span className="cart__total-item">{cart?.length}</span>
                      </span>
                      <div className="cart__mini">
                        <div className="cart__close">
                          <button type="button" className="cart__close-btn">
                            <i className="fa fa-times"></i>
                          </button>
                        </div>
                             {(cart.length>0)?
                            <ModalContainer/>
                            :<div><p className="text-danger">سبد خرید شما خالی می باشد</p></div>}
                      </div>
                    </div>
                    <div className="header__hotline align-items-center d-none d-sm-flex  d-lg-none d-xl-flex">
                      <div className="header__hotline-icon">
                        <i className="fa fa-headset"></i>
                      </div>
                      <div className="header__hotline-info">
                        <span>پشتیبانی رایگان:</span>
                        <h6>
                          <a href="tel:06-900-6789-00">06-900-6789-00</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9">
                  <div className="header__info-right">
                    <div className="header__search f-right d-none d-sm-block">
                      <form action="#">
                        <div className="header__search-box" style={{position:"relative"}}>
                          <input
                            type="text"
                            placeholder="جست و جو محصولات"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <i className="fa fa-search" style={{position:"absolute",right:"1rem",bottom:"50%",transform:"translateY(50%)"}}></i>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content rounded-2">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    جست و جو کنید
                                  </h1>
                                </div>
                                <div className="modal-body">
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      searching(e.target.value, setResult,setLoading)
                                    }
                                  />
                                  {(loading)?<Loader size={1}/>:<div key={Math.random()} className="modal-holder">
                                    {(reslut?.length >0) ?
                                      reslut.map((item) => {
                                        return (
                                          <div className="card my-3 search-card">
                                            <Link to={`/product-details/${item.id}`}>
                                              <div className="row g-0">
                                                <div className="col-md-2">
                                                  <img
                                                    src={`${Config.shop}${item.pic}`}
                                                    className="img-fluid rounded-circle"
                                                    alt={item.name}
                                                    style={{ width: "10rem" }}
                                                  />
                                                </div>
                                                <div className="col-md-8">
                                                  <div className="card-body">
                                                    <p className="card-text" style={{textAlign:"right"}}>
                                                      {item.text}
                                                    </p>
                                                    <p className="card-text" style={{textAlign:"right"}}>
                                                      <small class="text-body-secondary">
                                                        ${" "}
                                                        {item.price.toFixed(2)}
                                                      </small>
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </Link>
                                          </div>
                                        );
                                      }):<div className="mt-3"><p className="text-danger text-center">مورد مطابقی یافت نشد</p></div>}
                                  </div>}
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="close-modal"
                                    data-bs-dismiss="modal"
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__bottom" id="header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-6">
                  <div className="header__bottom-left d-flex d-xl-block align-items-center">
                    <div className="side-menu d-xl-none mr-20">
                      <button
                        type="button"
                        className="side-menu-btn offcanvas-toggle-btn"
                      >
                        <i className="fa fa-bars"></i>
                      </button>
                    </div>
                    <div className="main-menu d-none d-md-block">
                      <Menu />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3  col-sm-6  col-6 d-md-none d-lg-block">
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="offcanvas__area">
        <div class="offcanvas__wrapper">
          <div class="offcanvas__close">
            <button class="offcanvas__close-btn" id="offcanvas__close-btn">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div class="offcanvas__content">
            <div class="offcanvas__logo mb-40">
              <a href="index.html">
                <img src="./img/logo/logo-black.png" alt="logo" />
              </a>
            </div>
            <div class="offcanvas__search mb-25">
              <form action="#">
                <input type="text" placeholder="به دنبال چه چیزی هستید ؟" />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div class="mobile-menu fix"></div>
            <div class="offcanvas__action"></div>
          </div>
        </div>
      </div>
      <div class="body-overlay"></div>
    </>
  );
};

export { Header };

