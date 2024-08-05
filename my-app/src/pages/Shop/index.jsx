import { BreadCrumb } from "./BreadCrumb"
 import{ProductGraidWrapper} from "./ProductGraidWrapper"
import {Tab } from "./Tab"
import { Config } from "../../Utils"
import { useContext } from "react";
import {Product} from "./Product"
import { SidebarData } from "../Sidebar/SidebarData"
import { Sidebar } from "../Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import {BrandSlider} from "../Product-Details/BrandSlider"
import { ModalContext } from "../../context/modal";
import { modal } from "./modal"
// import { createContext } from "react";
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
    //colors
    const[colors,setColors]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:313/colors`).then((res)=>{
        setColors(res);
        });
      
    },[]);
    
    //size
    //colors
    const[size,setSize]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:313/sizing`).then((res)=>{
        setSize(res);
        });
      
    },[]);
    //modal

     
        const [modal,setModal] = useState({
          title:"",
          text:"",
          price:0,
          img:"",
          seccondimg:"",
          id:"111111111",
          show:false
        });
        var rand = Math.random();
        useEffect(()=>{
          (modal.show) && window?.$(`#${modal.id}`).modal("show");
        },[modal])
        //test
        const[showmodal,setshowmodal]=useState(false)
         const closebtn=()=>{
            setshowmodal(false)
         }
        //test
    ///modal

    return<>
               <ModalContext.Provider value={{modal,setModal}}>
                <main>

                <BreadCrumb></BreadCrumb> 
             
                <section className="product__area box-plr-75 pb-70">
                    <div className="container-fluid">
                        <div className="row">
                        <Sidebar domain_price={price} colors={colors} size={size} productLength={items?.length} setItems={setItems} ></Sidebar> 
                        <div className="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
                            <div className="product__grid-wrapper">
                            <ProductGraidWrapper></ProductGraidWrapper>  
                            </div>
                            <div className="product__grid-item-wrapper pt-70">
                                <Tab  key={Math.random()} setItems={setItems} items={items} item={{setModal}} setshowmodal={setshowmodal} showmodal={showmodal} closebtn={closebtn} modal={modal}></Tab> 
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <BrandSlider></BrandSlider>
                <div className="modal fade quick-view-product" aria-labelledby="exampleModalXlLabel" id={modal.id} tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered product__modal" role="document">
          <div class="modal-content">
            <div class="product__modal-wrapper p-relative">
              <div class="product__modal-close p-absolute">
                <button data-bs-dismiss="modal">
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div class="product__modal-inner">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="product__modal-box">
                      <div class="tab-content" id="modalTabContent">
                        <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                          <div class="product__modal-img w-img">
                            <img src={Config.shop+""+modal.img} alt=""/>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                          <div class="product__modal-img w-img">
                            <img src={`${Config.shop}${modal.seccondimg}`} alt=""/>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs" id="modalTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="nav1-tab" data-bs-toggle="tab"data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                            <img src={`${Config.shop}${modal.img}`} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={`${Config.shop}${modal.seccondimg}`} alt=""/>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="product__modal-content">
                      <h4>
                        <a href="product-details.html">
                         {modal.title}
                        </a>
                      </h4>
                      <div class="product__modal-des mb-40">
                        <p>
                          {modal.text}
                        </p>
                      </div>
                      <div class="product__stock">
                        <span>وضعیت :</span>
                        <span>موجود</span>
                      </div>
                      <div class="product__stock sku mb-30">
                        <span>عنوان:</span>
                        <span>{modal.title}</span>
                      </div>
                      <div class="product__review d-sm-flex">
                        <div class="rating rating__shop mb-15 mr-35">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product__price">
                        {/* <span>${modal.price.toFixed(2)}</span> */}
                      </div>
                      <div class="product__modal-form mb-30">
                        <form action="#">
                          <div class="pro-quan-area d-lg-flex align-items-center">
                            <div class="product-quantity mr-20 mb-25">
                              <div class="cart-plus-minus p-relative">
                                <input type="text" value="1" />
                              </div>
                            </div>
                            <div class="pro-cart-btn mb-25">
                              <button class="t-y-btn" type="submit">
                                لیست خرید +
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                </div>
                </main>
                </ModalContext.Provider>
       
    </>
}
