import { BreadCrumb } from "./BreadCrumb"
 import{ProductGraidWrapper} from "./ProductGraidWrapper"
import {Filter} from "./Filter"
import {Product} from "./Product"
import { SidebarData } from "../Sidebar/SidebarData"
import { Sidebar } from "../Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
export const Products = ({sidebars}) =>{
    const[category,setCategory]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:313/product-category`).then((res)=>{
            setCategory(res);
        });
    },[]);
    //allitems
    const[items,setItems]=useState()
  
    useEffect(()=>{
            axios.get(`http://localhost:313/best_selling`).then((response)=>{
               setItems(response);
           });
            
        },[]);
    //price
    const[price,setPrice]=useState()//برای پایگاه داده اصلی است
    useEffect(()=>{
        axios.get(`http://localhost:313/domain-price`).then((res)=>{
            setPrice(res);
        });
      
    },[]);
    
    
    return<>
        <main>
        {/* <BreadCrumb></BreadCrumb> */}
        <section class="product__area box-plr-75 pb-70">
            <div class="container-fluid">
                <div class="row">
                   <Sidebar  productLength={items?.length} setItems={setItems} items={items} domain_price={price}></Sidebar> 
                <div class="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
                    <div class="product__grid-wrapper">
                       <ProductGraidWrapper></ProductGraidWrapper>  
                    </div>
                    <div class="product__grid-item-wrapper pt-70">
                        <Filter></Filter> 
                        <div class="tab-content" id="productGridTabContent">
                            <div class="tab-pane fade  show active" id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
                                <div class="row">
                                    <Product key={Math.random()} setItems={setItems} items={items}></Product>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </main>
    </>
}