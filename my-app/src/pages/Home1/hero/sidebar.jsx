import { Link } from "react-router-dom";

const Sidebar = ()=> {
    return (
        <>
            <div className="cat__menu-wrapper">
                                <div className="cat-toggle">
                                    <button type="button" className="cat-toggle-btn"><i className="fa fa-bars"></i> Shop by department</button>
                                    <div className="cat__menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <Link to="product">All Categories <i className="fa fa-angle-down"></i></Link>
                                                    <ul className="mega-menu">
                                                        <li><Link to="product">Shop Pages</Link>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">Standard SHop Page</Link></li>
                                                                <li><Link to="product">Shop Right Sidebar</Link></li>
                                                                <li><Link to="product">Shop Left Sidebar</Link></li>
                                                                <li><Link to="product">Shop 3 Column</Link></li>
                                                                <li><Link to="product">Shop 4 Column</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Product Pages</a>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">Product Details</Link></li>
                                                                <li><Link to="product">Product V2</Link></li>
                                                                <li><Link to="product">Product V3</Link></li>
                                                                <li><Link to="product">Varriable Product</Link></li>
                                                                <li><Link to="product">External Product</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Other Pages</a>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">wishlist</Link></li>
                                                                <li><Link to="product">Shopping Cart</Link></li>
                                                                <li><Link to="product">Checkout</Link></li>
                                                                <li><Link to="product">Login</Link></li>
                                                                <li><Link to="product">Register</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Phone & Tablets</a>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">Catagory 1</Link></li>
                                                                <li><Link to="product">Catagory 2</Link></li>
                                                                <li><Link to="product">Catagory 3</Link></li>
                                                                <li><Link to="product">Catagory 4</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Phone & Tablets</a>
                                                            <ul className="mega-item">
                                                                <li><Link to="product">Catagory 1</Link></li>
                                                                <li><Link to="product">Catagory 2</Link></li>
                                                                <li><Link to="product">Catagory 3</Link></li>
                                                                <li><Link to="product">Catagory 4</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="product">Best Seller Products
                                                        <span className="cat-label">hot!</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="product">Top 10 Offers
                                                        <span className="cat-label green">new!</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="product.html">New Arrivals <i className="fa fa-angle-down"></i></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="product">Home Appliances</Link></li>
                                                        <li><Link to="product">Technology</Link>
                                                            <ul className="submenu">
                                                                <li><Link to="product">Storage Devices</Link></li>
                                                                <li><Link to="product">Monitors</Link></li>
                                                                <li><Link to="product">Laptops</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="product">Office Equipments</Link></li>
                                                    </ul>
                                                </li>
                                                <li><a href="product.html">Phones & Tablets</a></li>
                                                <li><a href="product.html">Electronics & Digital</a></li>
                                                <li className="d-laptop-none"><a href="product.html">Fashion & Clothings</a></li>
                                                <li className="d-laptop-none"><a href="product.html">Jewelry & Watches</a></li>
                                                <li><a href="product.html">Health & Beauty</a></li>
                                                <li><a href="product.html">TV & Audio</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export {Sidebar};