 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import axios from "axios";
import { Config } from "../../Utils"
import { Rank } from "../Components/Rank";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import {AddToCart} from "../Cart/AddToCart"
import { ProductAddbtn} from "../Home1/best-selling/product-item/product-add-btn"
import{AddToWishlist} from "../Home1/best-selling/product-item/AddToWishlist"
import {ModalContext} from '../../context/modal'
import {ProductAction} from '../Home1/best-selling/product-item/product-action'
// import{ModalContent} from '../Product-Details/ModalContent'
import { useContext } from "react";
import { Modal } from "../Components/modal";
// export const Product = ({items,setItems,showmodal,setshowmodal,closebtn,item})=>{
    export const Product = ({items,setItems,showmodal,setshowmodal,closebtn,item})=>{
    // const [item,setItem]=useState();
    // useEffect(()=>{
    //   axios.get("http://localhost:313/best_selling").then((res)=>{
    //     setItem(res);
        
    //   })
    // },[])
    //  "use srict";
    // const {modal,setModal} = useContext(ModalContext)

    // function Set()
    // {

    //   setModal({...modal,'title':item.title,'text':item.text,'img':item.pic,'price':item.price,'seccondimg':item.seccondpic,'id':item.id,'show':true})
    // }
    return<>
            {items?.data?.map((index) =>{
            return<>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                        <div className="product__item white-bg mb-30">
                            <div className="product__thumb p-relative">
                                <a href={"/product/" + index.id} className="w-img">
                                    <img src={Config.shop+""+index.pic} alt="product"/>
                                </a>
                              {/* <ProductAction></ProductAction>  */}
 <div className="product__action p-absolute">
            <ul>
              <li> 
               <a href="#" onClick={()=>AddToWishlist(item?.id,item?.pic,item?.text,item?.price)} title="Add to Wishlist">
                  <i className="fa-regular fa-heart"></i>
                </a> 
              </li>
              <li> 
                <a href="#" title="Quick View" onClick={()=>setshowmodal(true)}>
                  <i className="fa fa-search"></i>
                </a> 
              </li>
              <li>
                <a href="#" title="Compare">
                  <i className="fa fa-sliders-h" onClick={()=>alert("هنوز این مورد وجود ندارد !")}></i>
                </a>
              </li>
            </ul>
                                </div> 
                                <Modal index={index}></Modal>
                            </div> 
                            <div className="product__content text-center">
                                <h6 className="product-name">
                                    <a className="product-item-link" href="product-details.html">{index.text}</a>
                                </h6>
                                <div className="rating">
                                   <Rank></Rank>
                                </div>
                                <div class="product__sm-price">
                                    <span className="price">${index.price}</span>
                                </div>
                            </div>
                             {/* <div className="product__add-btn">
                                <button type="button">Add to Cart</button>
                             </div>  */}
                             <ProductAddbtn></ProductAddbtn>
                       
                        </div>
                        {/* {showmodal&&<ModalContent closebtn={closebtn}>
         
                         </ModalContent>} */}
                </div>
             </>
        }
        )}
        
      
        </>
            }
 export const ProductList = ({items,setItems})=>{
 
    return<>
        {items?.data?.map((index) =>{
            return<>
            <div className="col-xxl-12">
                <div className="product__item product__list white-bg mb-30 d-md-flex">
                    <div className="product__thumb p-relative mr-20">
                        <a href={"/product/" + index.id} className="w-img">
                           <img src={Config.shop+""+index.pic} alt="product"/>
                            <img className="second-img" src={Config.shop+""+index.seccondpic} alt="product"/>
                        </a>
                    </div>
                   <div className="product__content">
                        <h6 className="product-name">
                        <a className="product-item-link" href="product-details.html">{index.text}</a>
                         </h6>
                                                        <div className="rating d-sm-flex d-lg-block d-xl-flex align-items-end" style={{"direction":"rtl"}} >
                                                            <Rank></Rank>
                                                            <div className="product-review-action ml-30">
                                                                <span><a href="#">2نظر</a></span>
                                                                <span><a href="#">نظر خود را اضافه کنید</a></span>
                                                            </div>
                                                        </div>
                                                        <span className="price">${index.price}</span>
                                                        <p className="product-text">
                                                        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                                                           </p>
                                                        <div className="product__list-features">
                                                            <ul>
                                                                <li>سویشرت یقه ای سبز روشن.</li>
                                                                <li>جیب های دستی</li>
                                                                <li>تناسب آرام.</li>
                                                                <li>ماشین لباسشویی/خشک کن.</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product__action product__action-list d-sm-flex d-lg-block d-xl-flex align-items-center">
                                                             <button className="t-y-btn mr-10">افزودن به سبد خرید</button> 
                                                            {/* <button className="t-y-btn mr-10" type="button" onClick={()=>AddToCart(event,props.item?.id,props.item?.pic,props.item?.text,props.item?.price,1,setCart,cart)}>سبد خرید +</button> */}
                                                            <ul>
                                                                {/* <li><a  onClick={()=>AddToWishlist(item?.id,item?.pic,item?.text,item?.price)} href="#" title="افزودن به علاقه مندی ها"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li> */}
                                                                <li><a href="#" title="مقایسه کنید" onClick={()=>alert("هنوز این مورد وجود ندارد !")}><FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon></a></li>
                                                            </ul>
                                                        </div>
                    </div>
                </div>
            </div>
            </>
            }
        )}
    </>
}