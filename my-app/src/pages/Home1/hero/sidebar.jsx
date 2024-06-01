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
                                                    <a href="product.html">All Categories <i className="fa fa-angle-down"></i></a>
                                                    <ul className="mega-menu">
                                                        <li><a href="product.html">Shop Pages</a>
                                                            <ul className="mega-item">
                                                                <li><a href="product-details.html">Standard SHop Page</a></li>
                                                                <li><a href="product-details.html">Shop Right Sidebar</a></li>
                                                                <li><a href="product-details.html">Shop Left Sidebar</a></li>
                                                                <li><a href="product-details.html">Shop 3 Column</a></li>
                                                                <li><a href="product-details.html">Shop 4 Column</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Product Pages</a>
                                                            <ul className="mega-item">
                                                                <li><a href="product-details.html">Product Details</a></li>
                                                                <li><a href="product-details.html">Product V2</a></li>
                                                                <li><a href="product-details.html">Product V3</a></li>
                                                                <li><a href="product-details.html">Varriable Product</a></li>
                                                                <li><a href="product-details.html">External Product</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Other Pages</a>
                                                            <ul className="mega-item">
                                                                <li><a href="product-details.html">wishlist</a></li>
                                                                <li><a href="product-details.html">Shopping Cart</a></li>
                                                                <li><a href="product-details.html">Checkout</a></li>
                                                                <li><a href="product-details.html">Login</a></li>
                                                                <li><a href="product-details.html">Register</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Phone & Tablets</a>
                                                            <ul className="mega-item">
                                                                <li><a href="product-details.html">Catagory 1</a></li>
                                                                <li><a href="product-details.html">Catagory 2</a></li>
                                                                <li><a href="product-details.html">Catagory 3</a></li>
                                                                <li><a href="product-details.html">Catagory 4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Phone & Tablets</a>
                                                            <ul className="mega-item">
                                                                <li><a href="product-details.html">Catagory 1</a></li>
                                                                <li><a href="product-details.html">Catagory 2</a></li>
                                                                <li><a href="product-details.html">Catagory 3</a></li>
                                                                <li><a href="product-details.html">Catagory 4</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="product.html">Best Seller Products
                                                        <span className="cat-label">hot!</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="product.html">Top 10 Offers
                                                        <span className="cat-label green">new!</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="product.html">New Arrivals <i className="fa fa-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="product.html">Home Appliances</a></li>
                                                        <li><a href="product.html">Technology</a>
                                                            <ul className="submenu">
                                                                <li><a href="product.html">Storage Devices</a></li>
                                                                <li><a href="product.html">Monitors</a></li>
                                                                <li><a href="product.html">Laptops</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="product.html">Office Equipments</a></li>
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