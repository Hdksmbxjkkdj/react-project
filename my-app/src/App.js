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
import Product from './pages/Product';
import Layout from './pages/Layout';
// import Breadcrumb from './pages/Product/breadcrumb';
import Shop from './pages/Shop/Shop'
import {productData} from './pages/Shop/productData';
import {Sidebar} from './pages/Sidebar/index';
import {Color} from './pages/Sidebar/Color';

import { useState } from 'react';
function App() {
  const [products,setproducts]=useState(productData);
  const[state, setstate] =useState(false);
 
  return (
    <>
       <div className='container'>
          <div className='row'>
           <Sidebar></Sidebar>
          </div>
       </div>
      {/* {
         state?(
          <Home1 />
         ):
         console.log('bye')
        
      
      } */}
      <BrowserRouter>
      
      {/* <Home1></Home1> */}
      <Layout>
      <Routes>
        {/* <Route path="/" element={<Shop products = {products}/>}/> */}
        {/* <Route path="/Footer" element={<Footer/>}/> */}
        <Route path="/product" element={<Product/>}/>

      </Routes>
      <Shop products = {products}/> 
      </Layout>
      </BrowserRouter>
    
      
    </>
  );
}

export default App;
