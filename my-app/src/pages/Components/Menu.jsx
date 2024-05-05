import {Link} from 'react-router-dom';
// import {Footer} from '../Components/Footer';
import {Footer} from '../Components/Footer';
export const Menu = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <a href="index.html">Home <i className="fa fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><Link to="Home1">Home Style 1</Link></li>
                        <li><Link to="Home2">Home Style 2</Link></li>
                        <li><Link to="Home3">Home Style 3</Link></li>
                        <li><Link to="Home4">Home Style 4</Link></li>
                    </ul>
                </li>
                <li><a href="product.html">Features <i className="fa fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><a href="product.html">Product Type</a></li>
                        <li><a href="product.html">Product Features <i className="fa fa-angle-down"></i></a>
                            <ul className="submenu">
                                <li><a href="product-details.html">Simple Product</a></li>
                                <li><a href="product-details-config.html">Configurable Product</a></li>
                                <li><a href="product-details-group.html">Group Product</a></li>
                                <li><a href="product-details-download.html">Downloadable Product</a></li>
                            </ul>
                        </li>
                        <li><a href="product.html">Shop By Brand</a></li>
                    </ul>
                </li>
                <li>
                    <a href="blog.html">Blog <i className="fa fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><Link to="Blog">Blog</Link></li>
                        <li><Link to="BlogDetaile">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link to="About">about us</Link></li>
                <li><Link to="Contact">contact</Link></li>
                <li>
                    <a href="about.html">pages <i className="fa fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="error.html">404 Error</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
}