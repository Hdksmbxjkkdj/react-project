import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { Loader } from "../Components/loader";
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btn";
import { BtnLike } from "../Product-Details/Btns/BtnLike";
import { Menu } from "./Menu";
import { ItemsSearch } from "./Search";
import { ModalContainer } from "./modalContainer";

const Header = () => {
  window?.$("document").ready(function () {
    if(localStorage.getItem("modal")==="true")
    {
      window?.$(".cart__mini").addClass("cart__opened");
    }
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
        localStorage.setItem("modal",true)
        window?.$(".cart__toggle").addClass("cart__toggle-open");

        cartToggleStatus = true;
      } else if (cartToggleStatus === true) {
        localStorage.setItem("modal",false)
        window?.$(".cart__toggle").removeClass("cart__toggle-open");
        window?.$(".cart__mini").removeClass("cart__opened");

        cartToggleStatus = false;
      }
    });
    window?.$(".cart__close-btn").on("click", function () {
      localStorage.setItem("modal",false)
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
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const param = window.location.pathname.split("/").pop();
  const user = localStorage.getItem("user");
  const use = JSON.parse(user);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("modal",false)
    window?.$(".cart__mini").removeClass("cart__opened");
  }, [navigate]);
      document.getElementById("exampleModal")?.addEventListener("shown.bs.modal",function(){
        document.getElementById("search-input").focus();
      })
      function LogOut()
      {
        localStorage.removeItem("user")
        navigate("/login")
      }
  return (
    <>
      <header
        id="header"
        className={
          param == "register" ||
          param == "Register" ||
          param == "login" ||
          param == "Login"
            ? "d-none"
            : ""
        }
      >
        <div className="header__area">
          <div className="header__top d-none d-sm-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                  {user && (
                    <div className="header__welcome">
                      <span>{use?.username} عزیز به سایت ما خوش آمدید</span>
                    </div>
                  )}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-7">
                  <div className="header__action d-flex justify-content-center justify-content-md-end">
                    <ul>
                      {user && (
                        <li>
                          <NavLink to="/profile">پروفایل</NavLink>
                        </li>
                      )}
                      {user && (
                        <li>
                          <NavLink to="wishlist">علاقه مندی ها</NavLink>
                        </li>
                      )}
                      {user?<li onClick={LogOut} style={{cursor:"pointer"}}>خروج</li>:<li>
                        <NavLink to="/register">ثبت نام/ورود</NavLink>
                      </li>}
                      <li>
                        <NavLink to="/comparison">مقایسه</NavLink>
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
                <div className="col-xl-4 col-lg-3 col-sm-8 col-12">
                  <div className="header__info-left d-flex justify-content-center justify-content-sm-between align-items-center">
                    <div
                      className="cart__mini-wrapper d-flex f-right p-relative"
                      key={Math.random()}
                    >
                      <span
                        className="cart__toggle text-center"
                        style={{ lineHeight: "3rem", cursor: "pointer" }}
                      >
                        <i className="fa fa-cart-shopping fs-5"></i>
                        <span className="cart__total-item">{cart?.length}</span>
                      </span>
                      <div className="cart__mini">
                        <div className="cart__close">
                          <button type="button" className="cart__close-btn">
                            <i className="fa fa-times"></i>
                          </button>
                        </div>
                        {cart.length > 0 ? (
                          <ModalContainer />
                        ) : (
                          <div className="text-center"><img src="/img/images/cart-empty.png" className="w-50" alt="" />
                            <p className="text-danger">
                              سبد خرید شما خالی می باشد
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="logo">
                      <Link to="/">
                        <img src={"/img/logo/logo-black.png"} alt="logo" />
                      </Link>
                    </div>

                    <div className="header__hotline align-items-center d-flex d-lg-none d-xl-flex">
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
                <div className="col-xl-8 col-lg-9 col-sm-4" col-12>
                  <div className="header__info-right">
                    <div className="header__search f-right">
                      <form action="#">
                        <div
                          className="header__search-box"
                          style={{ position: "relative" }}
                        >
                          <input
                            placeholder="جست و جو محصولات"
                            data-bs-toggle="modal"
                            type="text"
                            data-bs-target="#exampleModal"
                            className="d-none d-lg-block"
                          />
                          <i
                            className="fa fa-search d-none d-md-block"
                            style={{
                              position: "absolute",
                              right: "1rem",
                              bottom: "50%",
                              transform: "translateY(50%)",
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          ></i>
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
                                    id="search-input"
                                    onChange={(e) => {
                                      searching(
                                        e.target.value,
                                        setResult,
                                        setLoading
                                      );
                                      setSearch(e.target.value);
                                    }}
                                  />
                                  {loading ? (
                                    <Loader size={1} />
                                  ) : (
                                    <div
                                      key={Math.random()}
                                      className="modal-holder"
                                    >
                                      <div className="d-flex justify-content-between my-3">
                                      <p className="text-primary fs-11 mr-15" style={{textAlign:"right"}}>تعداد یافت شده : <span>{reslut?.length}</span></p>
                                      {(reslut?.length && search!=="")?<Link to={`/products?text_like=${search}`}>مشاهده همه</Link>:null}
                                      </div>
                                      {reslut?.length > 0
                                        ? reslut.map((item) => {
                                            return (
                                              <div className="my-3 search-card">
                                                  <div className="row g-0 align-items-center">
                                                    <div className="col-md-4">
                                                      <Link to={`/product-details/${item.id}`} style={{width:"fit-content"}}>
                                                      <img
                                                        src={`${Config.shop}${item.pic}`}
                                                        className="img-fluid rounded-circle"
                                                        alt={item.name}
                                                        style={{
                                                          width: "10rem",
                                                        }}
                                                      />
                                                      </Link>
                                                    </div>
                                                    <div className="col-md-6">
                                                      <div className="search-card-body">
                                                        <Link to={`/product-details/${item.id}`} style={{width:"fit-content"}}>
                                                        <p
                                                          className="search-card-text"
                                                          style={{
                                                            textAlign: "right",
                                                          }}
                                                        >
                                                          {item.text}
                                                        </p>
                                                        <p
                                                          className="search-card-text"
                                                          style={{
                                                            textAlign: "right",
                                                          }}
                                                        >
                                                          <small class="text-body-secondary">
                                                            تومان{" "}
                                                            {item.price.toFixed(
                                                              2
                                                            )}
                                                          </small>
                                                        </p>
                                                        </Link>
                                                      </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex flex-column gap-2 justify-content-center">
                                                      {(item.number!=0)?<ProductAddbtn item={item} className={"search-add-btn"}/>:<span>ناموجود</span>}
                                                      {/* <button className="btn btn-info"><i className="fa fa-heart text-light"></i></button> */}
                                                      <BtnLike items={item}/>
                                                    </div>
                                                  </div>
                                              </div>
                                            );
                                          })
                                        : search && (
                                            <div className="mt-3">
                                              <p className="text-danger text-center">
                                                مورد مطابقی یافت نشد
                                              </p>
                                            </div>
                                          )}
                                    </div>
                                  )}
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
                    <div className="side-menu d-xl-none ml-20">
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
                <div className="col-xl-3 col-lg-3  col-sm-6  col-6 d-md-none d-lg-block"></div>
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
              <form>
                <input
                  type="text"
                  placeholder="به دنبال چه چیزی هستید ؟"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                />
                <button
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div class="mobile-menu fix">
              <nav>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <li>
                    <Link to="/">
                      خانه <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="product">
                      ویژگی ها <i className="fa fa-shopping-bag"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      وبلاگ <i className="fa fa-blog"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="About">
                      درباره ما <i className="fa fa-eject"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="Contact">
                      ارتباط با ما <i className="fa fa-globe"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="profile">
                     پروفایل <i className="fa fa-user"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="offcanvas__action"></div>
          </div>
        </div>
      </div>
      <div class="body-overlay"></div>
    </>
  );
};

export { Header };

