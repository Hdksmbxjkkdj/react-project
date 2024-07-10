import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home1 } from "./pages/Home1/index";
import { Menu } from "./pages/Components/Menu";
import Footer from "./pages/Components/Footer";
import Layout from "./pages/Layout";
// import Breadcrumb from './pages/Product/breadcrumb';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./pages/Components/Header";
import Blog from "./pages/Blog";
import BlogDetaile from "./pages/BlogDetailes";
import { AboutUs } from "./pages/AboutUs";
import { Login } from "./pages/Auth/login";
import { Profile } from "./pages/Auth/profile";
import { Register } from "./pages/Auth/register";
import { Cart } from "./pages/Cart/cart";
import { WishList } from "./pages/WishList/wishlist";
import { Checkout } from "./pages/Auth/checkout";
import { Error } from "./pages/Auth/404error";
import { BackToTop } from "./pages/Components/backtotop";
import { CartContext } from "./context/CardContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProducDetails } from "./pages/Product-Details/index";

import Shop from "./pages/Shop/Shop";
import { Sidebar } from "./pages/Sidebar/index";
import { Productpage } from "./pages/Productpage";
import { BlogItem } from "./pages/Home1/best-selling/product-item/blog-item";
import Show from "./pages/Show";
import { Product } from "./pages/Shop/Product";
import { ContactUs } from "./pages/ContactUs";
import { Products } from "./pages/Shop/index";

function App() {
  window?.$(window).on("load", function () {
    window?.$("#loading").fadeOut(500);
  });
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:313/row").then((response) => {
      setCart(response.data);
    });
  }, []);

  useEffect(() => {
    var name = window.location.pathname.split("/").pop();
    if (name == "") {
      name = "Home";
    } else {
      name = name;
    }
    document.getElementsByTagName("title")[0].innerHTML = name;
  },[]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="product/:id" element={<ProducDetails />} />

            <Route path="/" element={<Home1 />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/BlogDetaile/:id" element={<BlogDetaile />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="Login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/Contact" element={<ContactUs />} />

            <Route path="/Register" element={<Register />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/Footer" element={<Footer />} />
            {/* <Route path="*" element={<Error/>}/> */}
            <Route path="/Footer" element={<Footer />} />
            {/* <Route path="/product-details/:id" element={<ProducDetails />}/>  */}
            <Route path="/product" element={<Productpage />} exact={true} />
            {/* <Route path="product/:id" element={<Show />}/>  */}
            {/* <Route path="/Contact" element={<Contact/>}/> */}
            <Route path="/products" element={<Products />} />

            <Route path="/product-details/:id" element={<ProducDetails />} />
            <Route path="/product" element={<Productpage />} exact={true} />
            {/* <Route path="*" element={<Error/>}/> */}
          </Routes>
          <div id="loading">
            <div id="loading-center">
              <div id="loading-center-absolute">
                <div id="object"></div>
              </div>
            </div>
          </div>
          <BackToTop></BackToTop>
          <Footer></Footer>
          <ToastContainer />
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
