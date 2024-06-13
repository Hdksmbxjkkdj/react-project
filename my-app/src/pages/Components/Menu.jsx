import {Link} from 'react-router-dom';
// import {Footer} from '../Components/Footer';
import {Footer} from '../Components/Footer';
// import {} from '../Product/index';
export const Menu = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/">خانه <i className="fa fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="/">خانه طرح 1</Link></li>
                        <li><Link  to="Home2">خانه طرح 2</Link></li>
                       
                        <li><Link to="Home3">خانه طرح 3</Link></li>
                        <li><Link to="Home4">خانه طرح 4</Link></li>
                    </ul>
                </li>
                <li><Link to="product">ویژگی ها <i className="fa fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="product">نوع محصول</Link></li>
                        <li><Link to="product">ویژگی محصول <i className="fa fa-angle-down"></i></Link>
                            <ul className="submenu">
                                <li><Link to="product-details">محصول ساده</Link></li>
                                <li><Link to="product-details-config">محصولات مرتبط</Link></li>
                                <li><Link to="product-details-group">گروه محصولات</Link></li>
                                <li><Link to="product-details-download">محصولات قابل دانلود</Link></li>
                            </ul>
                        </li>
                        <li><Link فخ="product">خرید بر اساس برند</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="blog">وبلاگ <i className="fa fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="Blog">وبلاگ</Link></li>
                        <li><Link to="BlogDetaile">جزییات وبلاگ</Link></li>
                    </ul>
                </li>
                <li><Link to="About">درباره ما</Link></li>
                <li><Link to="Contact">ارتباط با ما</Link></li>
                <li>
                    <Link href="about">صفحات <i className="fa fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="Login">ورود</Link></li>
                        <li><Link to="Register">ثبت نام</Link></li>
                        <li><Link to="Cart">لیست خرید</Link></li>
                        <li><Link to="wishlist">علاقه مندی ها</Link></li>
                        <li><Link to="checkout">Checkout</Link></li>
                        <li><Link to="error">404 ارور</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
}