// import brand from '../../img/logo/logo-black.png';

import { Menu } from "./Menu";

const Header = ()=> {
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
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="#">Compare</a></li>
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
                                        <a href="index.html"><img src={"./img/logo/logo-black.png"} alt="logo"/></a>
                                    </div>
                                    <div className="header__hotline align-items-center d-none d-sm-flex  d-lg-none d-xl-flex">
                                        <div className="header__hotline-icon">
                                            <i className="fa fa-headset"></i>
                                        </div>
                                        <div className="header__hotline-info">
                                            <span>Hotline Free:</span>
                                            <h6><a href="tel:06-900-6789-00">06-900-6789-00</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-9">
                                <div className="header__info-right">
                                    <div className="header__search f-left d-none d-sm-block">
                                        <form action="#">
                                            <div className="header__search-box">
                                                <input type="text" placeholder="Search For Products..."/>
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
                                            <span className="cart__total-item">01</span>
                                        </a>
                                        <span className="cart__content">
                                            <span className="cart__my">My Cart:</span>
                                            <span className="cart__total-price">$ 255.00</span>
                                        </span>
                                        <div className="cart__mini">
                                          <div className="cart__close"><button type="button" className="cart__close-btn"><i className="fa fa-times"></i></button></div>
                                          <ul>
                                              <li>
                                                <div className="cart__title">
                                                  <h4>My Cart</h4>
                                                  <span>(1 Item in Cart)</span>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="cart__item d-flex justify-content-between align-items-center">
                                                  <div className="cart__inner d-flex">
                                                    <div className="cart__thumb">
                                                      <a href="product-details.html">
                                                        <img src="./img/shop/product/cart/cart-mini-1.jpg" alt=""/>
                                                      </a>
                                                    </div>
                                                    <div className="cart__details">
                                                      <h6><a href="product-details.html"> Samsung C49J89: £875, Debenhams Plus  </a></h6>
                                                      <div className="cart__price">
                                                        <span>$255.00</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="cart__del">
                                                      <a href="#"><i className="fa fa-trash-alt"></i></a>
                                                  </div>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="cart__sub d-flex justify-content-between align-items-center">
                                                  <h6>Car Subtotal</h6>
                                                  <span className="cart__sub-total">$255.00</span>
                                                </div>
                                              </li>
                                              <li>
                                                <a href="checkout.html" className="t-y-btn w-100 mb-10">Proceed to checkout</a>
                                                <a href="cart.html" className="t-y-btn t-y-btn-border w-100 mb-10">view add edit cart</a>
                                              </li>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-6">
                              <div className="header__bottom-left d-flex d-xl-block align-items-center">
                                <div className="side-menu d-xl-none mr-20">
                                  <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fa fa-bars"></i></button>
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
        </>
    )
}

export { Header };