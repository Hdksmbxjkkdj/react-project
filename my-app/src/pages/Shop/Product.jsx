 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import axios from "axios";
import { Config } from "../../Utils"
import { Rank } from "../Components/Rank";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
export const Product = ({items,setItems})=>{
 
    return<>
        {items?.data?.map((item) =>{
            return<>
                 
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                        <div className="product__item white-bg mb-30">
                            <div className="product__thumb p-relative">
                                <a href={"/product/" + item.id} className="w-img">
                                    <img src={Config.shop+""+item.pic} alt="product"/>
                                    
                                </a>
                                <div className="product__action p-absolute">
                                </div>
                            </div>
                            <div className="product__content text-center">
                                <h6 className="product-name">
                                    <a className="product-item-link" href="product-details.html">{item.text}</a>
                                </h6>
                                <div className="rating">
                                   <Rank></Rank>
                                </div>
                                <div class="product__sm-price">
                                    <span className="price">${item.price}</span>
                                </div>
                            </div>
                            <div className="product__add-btn">
                                <button type="button">Add to Cart</button>
                        </div>
                        </div>
                </div>
             </>
        }
        )}
        </>
            }
 export const ProductList = ({items,setItems})=>{
 
    return<>
        {items?.data?.map((item) =>{
            return<>
            <div className="col-xxl-12">
                <div className="product__item product__list white-bg mb-30 d-md-flex">
                    <div className="product__thumb p-relative mr-20">
                        <a href={"/product/" + item.id} className="w-img">
                           <img src={Config.shop+""+item.pic} alt="product"/>
                            <img className="second-img" src={Config.shop+""+item.seccondpic} alt="product"/>
                        </a>
                    </div>
                   <div className="product__content">
                        <h6 className="product-name">
                        <a className="product-item-link" href="product-details.html">{item.text}</a>
                         </h6>
                                                        <div className="rating d-sm-flex d-lg-block d-xl-flex align-items-end" style={{"direction":"rtl"}} >
                                                            <Rank></Rank>
                                                            <div className="product-review-action ml-30">
                                                                <span><a href="#">2 Reviews</a></span>
                                                                <span><a href="#">Add Your Review</a></span>
                                                            </div>
                                                        </div>
                                                        <span className="price">${item.price}</span>
                                                        <p className="product-text">
                                                            Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum
                                                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                                                           </p>
                                                        <div className="product__list-features">
                                                            <ul>
                                                                <li>Light green crewneck sweatshirt.</li>
                                                                <li>Hand pockets.</li>
                                                                <li>Relaxed fit.</li>
                                                                <li>Machine wash/dry.</li>
                                                            </ul>
                                                        </div>
                                                        <div className="product__action product__action-list d-sm-flex d-lg-block d-xl-flex align-items-center">
                                                            <button className="t-y-btn mr-10">add to cart</button>
                                                            <ul>
                                                                <li><a href="#" title="Add to Wishlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li>
                                                                <li><a href="#" title="Compare"><FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon></a></li>
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