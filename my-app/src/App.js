// import logo from './logo.svg';
// import './App.css';
// import './css/fontAwesome5Pro.css';
import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/backToTop.css';
import './css/default.css';
import './css/jquery.fancybox.min.css';
import './css/meanmenu.css';
import './css/nice-select.css';
// import './css/owl.carousel.min.css';
import './css/preloader.css';
import './css/slick.css';
// import './js/bootstrap.bundle.min'

// import './css/ui-range-slider.css';
import './css/style.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home1} from './pages/Home1/index';
import { Menu } from './pages/Components/Menu';
import Footer from './pages/Components/Footer';
// import Product from './pages/Product';
import Layout from './pages/Layout';
// import Breadcrumb from './pages/Product/breadcrumb';
import Shop from './pages/Shop/Shop'
import {productData} from './pages/Shop/productData';
import {Sidebar} from './pages/Sidebar/index';
import { Productpage } from './pages/Productpage';
import { useState } from 'react';
import { SidebarData } from './pages/Sidebar/SidebarData';


function App() {
  const [products,setproducts]=useState(productData);
  const [sidebars,setSidebars]=useState(SidebarData);
 
  return (
  
    <>
      <BrowserRouter>
      
      {/* <Home1></Home1> */}
      <Layout>
      <Routes>
        {/* <Route path="/" element={<Shop products = {products}/>}/> */}
         <Route path="/Footer" element={<Footer/>}/> 
          <Route path="/product" element={<Productpage/>}/> 

      </Routes>
      
      
      </Layout>
      </BrowserRouter>
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
