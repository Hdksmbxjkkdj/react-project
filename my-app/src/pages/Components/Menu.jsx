import { Link } from "react-router-dom";
// import {Footer} from '../Components/Footer';
import { Footer } from "../Components/Footer";
// import {} from '../Product/index';
export const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              خانه <i className="fa fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="products">محصولات <i className="fa fa-shopping-bag"></i></Link>
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
          {/* <li>
                    <Link href="about">صفحات <i className="fa fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="Login">ورود</Link></li>
                        <li><Link to="Register">ثبت نام</Link></li>
                        <li><Link to="Cart">لیست خرید</Link></li>
                        <li><Link to="wishlist">علاقه مندی ها</Link></li>
                        <li><Link to="checkout">Checkout</Link></li>
                        <li><Link to="error">404 ارور</Link></li>
                    </ul>
                </li> */}
        </ul>
      </nav>
    </>
  );
};
