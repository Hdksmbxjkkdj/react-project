import {Link} from 'react-router-dom';
// import {Footer} from '../Components/Footer';
import {Footer} from '../Components/Footer';
import {} from '../Product/index';
export const Menu = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <a href="index.html">Home <i className="far fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><Link href="index.html">Home Style 1</Link></li>
                        <li><Link  href="index-2.html">Home Style 2</Link></li>
                       
                        <li><Link href="index-3.html">Home Style 3</Link></li>
                        <li><Link href="index-4.html">Home Style 4</Link></li>
                    </ul>
                </li>
                <li><Link to="product">Features <i className="far fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="">Product Type</Link></li>
                        <li><a href="product.html">Product Features <i className="far fa-angle-down"></i></a>
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
                    <a href="blog.html">Blog <i className="far fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="about.html">about us</a></li>
                <li><a href="contact.html">contact</a></li>
                <li>
                    <a href="about.html">pages <i className="far fa-angle-down"></i></a>
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