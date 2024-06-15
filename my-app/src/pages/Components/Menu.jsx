import {Link} from 'react-router-dom';
// import {Footer} from '../Components/Footer';
import {Footer} from '../Components/Footer';
// import {} from '../Product/index';
export const Menu = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home <i className="fa fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="/">Home Style 1</Link></li>
                        <li><Link  href="Home2">Home Style 2</Link></li>
                       
                        <li><Link href="Home3">Home Style 3</Link></li>
                        <li><Link href="Home4">Home Style 4</Link></li>
                    </ul>
                </li>
                {/* <li><Link to="product">Features <i className="far fa-angle-down"></i></Link>
                    <ul className="submenu">
                        <li><Link to="">Product Type</Link></li>
                        <li><a href="product.html">Product Features <i className="far fa-angle-down"></i></a></li>
                        <li><Link to="/">Home Style 1</Link></li>
                        <li><Link to="Home2">Home Style 2</Link></li>
                        <li><Link to="Home3">Home Style 3</Link></li>
                        <li><Link to="Home4">Home Style 4</Link></li>
                    </ul>
                </li> */}
                <li><a href="product.html">Features <i className="fa fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><a href="product.html">Product Type</a></li>
                        <li><a href="product.html">Product Features <i className="fa fa-angle-down"></i></a>
                            <ul className="submenu">
                                <li><Link to="product-details">Simple Product</Link></li>
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
                <li><Link to="/Contact">contact</Link></li>
                <li>
                    <a href="about.html">pages <i className="fa fa-angle-down"></i></a>
                    <ul className="submenu">
                        <li><Link to="Login">Login</Link></li>
                        <li><Link to="Register">Register</Link></li>
                        <li><Link to="Cart">Cart</Link></li>
                        <li><Link to="wishlist">Wishlist</Link></li>
                        <li><Link to="checkout">Checkout</Link></li>
                        <li><Link to="error">404 Error</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
}