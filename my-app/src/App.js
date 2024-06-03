
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home1} from './pages/Home1/index';
import { Menu } from './pages/Components/Menu';
import Footer from './pages/Components/Footer';
import Layout from './pages/Layout';
// import Breadcrumb from './pages/Product/breadcrumb';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Home1 } from "./pages/Home1/index";
import { Home2 } from "./pages/Home2/index";
import { Home3 } from "./pages/Home3/index";
import { Home4 } from "./pages/Home4/index";
import { Header } from "./pages/Components/Header";
// import Footer from "./pages/Components/Footer";
import Blog from "./pages/Blog";
import BlogDetaile from "./pages/BlogDetailes";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
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
import {ProducDetails} from './pages/Product-Details/index'

import Shop from './pages/Shop/Shop'
import {productData} from './pages/Shop/productData';
import {Sidebar} from './pages/Sidebar/index';
import { Productpage } from './pages/Productpage';
// import { useState } from 'react';
import { SidebarData } from './pages/Sidebar/SidebarData';
import { BlogItem } from "./pages/Home1/best-selling/product-item/blog-item";


function App() {
  window?.$(window).on("load", function () {
    window?.$("#loading").fadeOut(500);
  });
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    
  axios.get("http://localhost:313/row").then((response)=>{
    setCart(response.data);
  })
  },[])

  // const [products,setproducts]=useState(productData);
  // const [sidebars,setSidebars]=useState(SidebarData);
 
  return (
  
    <>
    <CartContext.Provider value={{cart ,setCart}}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home3" element={<Home3 />} />
          <Route path="/Home4" element={<Home4 />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetaile/:id" element={<BlogDetaile />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="Login" element={<Login/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="Cart" element={<Cart/>}/>
          <Route path="wishlist" element={<WishList/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<Error/>}/>
          <Route path="/Footer" element={<Footer/>}/> 
          <Route path="/product" element={<Productpage/>}/> 
          <Route path="/product-details" element={<ProducDetails />}/> 
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
        <ToastContainer/>
      </BrowserRouter>
   
    </CartContext.Provider>
  
      {/* <Home1></Home1> */}
     
 
           {/* <section class="product__area box-plr-75 pb-70">
          <div className='container-fluid'>
                <div className='row'>
                     <Sidebar sidebars = {sidebars}/> 
                     <Shop products = {products}/> 
               
                </div>
          </div>
          </section>  */}
    
     
      {/* {
         state?(
          <Home1 />
         ):
        
        
      
      } */}
  
   
    
      
    </>
  );
}

export default App;
