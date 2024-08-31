import { Link } from "react-router-dom";
import { Banner } from "./banner";

const Sidebar = () => {
  function toggling() {
    window?.$(".cat__menu").slideToggle("slow");
  }
  return (
    <>
      <div className="cat__menu-wrapper h-100">
        {/* <div className="cat-toggle">
          <button type="button" className="cat-toggle-btn" onClick={toggling}>
            <i className="fa fa-bars"></i> خرید براساس دپارتمان
          </button>
          <div className="cat__menu">
            <nav id="mobile-menu">
              <ul>
                <li>
                  <Link to="products">
                    همه محصولات<i className="fa fa-angle-up"></i>
                  </Link>
                  <ul className="mega-menu">
                    <li>
                      <Link to="products">صفحات فروشگاهی</Link>
                      <ul className="mega-item">
                        <li>
                          <Link to="products">استاندارد</Link>
                        </li>
                        <li>
                          <Link to="products">سایدبار سمت راست</Link>
                        </li>
                        <li>
                          <Link to="products">سایدبار سمت چپ</Link>
                        </li>
                        <li>
                          <Link to="products">سه ستون</Link>
                        </li>
                        <li>
                          <Link to="products">چهار ستون</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="products">صفحه محصولات</Link>
                      <ul className="mega-item">
                        <li>
                          <Link to="products">تک محصول</Link>
                        </li>
                        <li>
                          <Link to="products">محصول V2</Link>
                        </li>
                        <li>
                          <Link to="products">محصول V3</Link>
                        </li>
                        <li>
                          <Link to="products">محصولات متغییر</Link>
                        </li>
                        <li>
                          <Link to="products">محصولات متغییر</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="products">دیگر صفحات</Link>
                      <ul className="mega-item">
                        <li>
                          <Link to="wishlist">علاقه مندی ها</Link>
                        </li>
                        <li>
                          <Link to="cart">سبد خرید</Link>
                        </li>
                        <li>
                          <Link to="checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="login">ورود</Link>
                        </li>
                        <li>
                          <Link to="register">ثبت نام</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="products">گوشی و تبلت</Link>
                      <ul className="mega-item">
                        <li>
                          <Link to="products">دسته بندی 1</Link>
                        </li>
                        <li>
                          <Link to="products">دسته بندی 2</Link>
                        </li>
                        <li>
                          <Link to="products">دسته بندی 3</Link>
                        </li>
                        <li>
                          <Link to="products">دسته بندی 4</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="products">گوشی و تبلت</Link>
                      <ul className="mega-item">
                        <li>
                          <Link to="products">دسته بندی 1</Link>
                        </li>
                        <li>
                          <Link to="products">دسته بندی 2</Link>
                        </li>
                        <li>
                          <Link to="products">دسته بندی 3</Link>
                        </li>
                        <li>
                          <Link to="products">دسته بندی 4</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="products">
                    بیشترین فروش
                    <span className="cat-label">داغ</span>
                  </Link>
                </li>
                <li>
                  <Link to="products">
                    ده محصول برتر
                    <span className="cat-label green">جدید</span>
                  </Link>
                </li>
                <li>
                  <Link to="products">
                    ورودی های جدید <i className="fa fa-angle-up"></i>
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="products">لوازم خانگی</Link>
                    </li>
                    <li>
                      <Link to="products">تکنولوژی</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="products">دستگاه های ذخیره سازی</Link>
                        </li>
                        <li>
                          <Link to="products">مانیتور ها</Link>
                        </li>
                        <li>
                          <Link to="products">لپتاپ ها</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="products">تجهیزات اداری</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="products">گوشی و تبلت</Link>
                </li>
                <li>
                  <Link to="products">الکترونیک و دیجیتال</Link>
                </li>
                <li className="d-laptop-none">
                  <Link to="products">مد و لباس</Link>
                </li>
                <li className="d-laptop-none">
                  <Link to="products">ساعت و جواهرات</Link>
                </li>
                <li>
                  <Link to="products">زیبایی و سلامتی</Link>
                </li>
                <li>
                  <Link to="products">تلوزیون</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
        <Banner src={"banner-sm-1.jpg"} alt={""} index={1}/>
      </div>
    </>
  );
};

export { Sidebar };
