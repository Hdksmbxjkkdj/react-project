// import Shop from "./Shop/Shop"
import { Sidebar } from "./Sidebar"
import { useEffect, useState } from 'react';
import { SidebarData } from "./Sidebar/SidebarData";
import {productData} from './Shop/productData';
import { ProductGraidBanners } from "./Components/Slider/ProductGraidBanners";
import axios from "axios";
// import { ProductGraidBanner } from './Components/Slider/ProductGraidBanner';

export const Productpage = ({}) =>{
    const [products,setproducts]=useState(productData);
    const [sidebars,setSidebars]=useState(SidebarData);
    useEffect(() => {
        axios.get('http://localhost:313/row').then((res) => {
            setproducts(res.data)
        })
    }, [])
    return<> 
         <section class="product__area box-plr-75 pb-70">
        
     
                <div className='container-fluid'>
                    <div className='row'>
                     
                     
                     <Sidebar sidebars = {sidebars}/> 
                      {/* <Shop products = {products}/>  */}
                      <div class="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
                        <div class="product__grid-wrapper">
                                <ProductGraidBanners/>
                            </div>
                            </div>
                </div>
          </div>
          </section> 
    </>
}