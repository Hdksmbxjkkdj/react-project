// import logo from './logo.svg';
// import './App.css';
// import './css/fontAwesome5Pro.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home1 } from "./pages/Home1/index";
import { Home2 } from "./pages/Home2/index";
import { Home3 } from "./pages/Home3/index";
import { Home4 } from "./pages/Home4/index";
import { Header } from "./pages/Components/Header";
import { Menu } from "./pages/Components/Menu";
import Footer from "./pages/Components/Footer";
import Blog from "./pages/Blog";
import BlogDetaile from "./pages/BlogDetailes";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Auth/login";
import { Register } from "./pages/Auth/register";
import { Cart } from "./pages/Cart/cart";
import { WishList } from "./pages/Auth/wishlist";
import { Checkout } from "./pages/Auth/checkout";
import { Error } from "./pages/Auth/404error";
import { BackToTop } from "./pages/Components/backtotop";
import { CartContext } from "./context/CardContext";
import { useState } from "react";

function App() {
  window?.$(window).on("load", function () {
    window?.$("#loading").fadeOut(500);
  });
  const [cart,setCart] = useState([]);
  return (
    <>
    <CartContext.Provider value={{cart ,setCart}}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/Home1" element={<Home1 />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home3" element={<Home3 />} />
          <Route path="/Home4" element={<Home4 />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetaile/:id" element={<BlogDetaile />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="Login" element={<Login/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="Cart" element={<Cart/>}/>
          <Route path="wishlist" element={<WishList/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="error" element={<Error/>}/>
          <Route path="/Footer" element={<Footer />} />
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
      </BrowserRouter>
    </CartContext.Provider>
    </>
  );
}

export default App;
