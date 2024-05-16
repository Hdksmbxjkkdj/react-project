// import brand from '../../img/logo/logo-black.png';

import { CartContext } from "../../context/CardContext";
import { useContext } from "react";
import { Menu } from "./Menu";
import { Config } from "../../Utils/config";

const Header = () => {
  window?.$("document").ready(function () {
    window?.$("select").niceSelect();
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
  const { cart, setCart } = useContext(CartContext);
  const eMessage="error"
  return (
    <>
      <header>
        <div className="header__area">
          <div className="header__top d-none d-sm-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                  <div className="header__welcome">
                    <span>Welcome to Worldwide Electronics Store</span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-7">
                  <div className="header__action d-flex justify-content-center justify-content-md-end">
                    <ul>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="#">Compare</a>
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
                      <a href="index.html">
                        <img src={"./img/logo/logo-black.png"} alt="logo" />
                      </a>
                    </div>
                    <div className="header__hotline align-items-center d-none d-sm-flex  d-lg-none d-xl-flex">
                      <div className="header__hotline-icon">
                        <i className="fa fa-headset"></i>
                      </div>
                      <div className="header__hotline-info">
                        <span>Hotline Free:</span>
                        <h6>
                          <a href="tel:06-900-6789-00">06-900-6789-00</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9">
                  <div className="header__info-right">
                    <div className="header__search f-left d-none d-sm-block">
                      <form action="#">
                        <div className="header__search-box">
                          <input
                            type="text"
                            placeholder="Search For Products..."
                          />
                          <button type="submit">Search</button>
                        </div>
                        <div className="header__search-cat">
                          <select>
                            <option>All Categories</option>
                            <option>Best Seller Products</option>
                            <option>Top 10 Offers</option>
                            <option>New Arrivals</option>
                            <option>Phones & Tablets</option>
                            <option>Electronics & Digital</option>
                            <option>Fashion & Clothings</option>
                            <option>Jewelry & Watches</option>
                            <option>Health & Beauty</option>
                            <option>Sound & Speakers</option>
                            <option>TV & Audio</option>
                            <option>Computers</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="cart__mini-wrapper d-none d-md-flex f-right p-relative">
                      <a href="javascript:void(0);" className="cart__toggle">
                        <span className="cart__total-item">{cart?.length}</span>
                      </a>
                      <span className="cart__content">
                        <span className="cart__my">My Cart:</span>
                        <span className="cart__total-price">$ 255.00</span>
                      </span>
                      <div className="cart__mini">
                        <div className="cart__close">
                          <button type="button" className="cart__close-btn">
                            <i className="fa fa-times"></i>
                          </button>
                        </div>
                        <ul>
                          <li>
                            <div className="cart__title">
                              <h4>My Cart</h4>
                              <span>({cart?.length} Item in Cart)</span>
                            </div>
                          </li>
                          {cart?.length > 0 && cart.map((item) => {
                            return (
                              <>
                                <li>
                                  <div className="cart__item d-flex justify-content-between align-items-center">
                                    <div className="cart__inner d-flex">
                                      <div className="cart__thumb">
                                        <a href="product-details.html">
                                          <img
                                            src={Config.shop+""+item.pic}
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                      <div className="cart__details">
                                        <h6>
                                          <a href="product-details.html">
                                            {" "}
                                            {item.name}
                                          </a>
                                        </h6>
                                        <div className="cart__price">
                                          <span>{item.unitprice}$</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cart__del">
                                      <a href="#">
                                        <i className="fa fa-trash-alt"></i>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </>
                            );
                          })}

                          <li>
                            <div className="cart__sub d-flex justify-content-between align-items-center">
                              <h6>Cart Subtotal</h6>
                              <span className="cart__sub-total">$250.50</span>
                            </div>
                          </li>
                          <li>
                            <a
                              href="checkout.html"
                              className="t-y-btn w-100 mb-10"
                            >
                              Proceed to checkout
                            </a>
                            <a
                              href="cart?.html"
                              className="t-y-btn t-y-btn-border w-100 mb-10"
                            >
                              view add edit cart
                            </a>
                          </li>
                        </ul>
                      </div>
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
                  <div className="header__bottom-right d-flex justify-content-end">
                    <div className="header__currency">
                      <select>
                        <option>USD</option>
                        <option>USD</option>
                        <option>USD</option>
                        <option>USD</option>
                        <option>USD</option>
                      </select>
                    </div>
                    <div className="header__lang d-md-none d-lg-block">
                      <select>
                        <option>English</option>
                        <option>Bangla</option>
                        <option>Arabic</option>
                        <option>Hindi</option>
                        <option>Urdu</option>
                      </select>
                    </div>
                  </div>
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
                <input type="text" placeholder="What are you searching for?" />
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
