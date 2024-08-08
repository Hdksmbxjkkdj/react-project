import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSlidersH, faTimes,fasearch } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Config } from "../../Utils"; 
import { Rank } from "./Rank";
import { Link } from "react-router-dom";
import{AddToWishlist} from "../Home1/best-selling/product-item/AddToWishlist"
import axios from "axios"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btn";

// import { faHeart } from "@fortawesome/free-solid-svg-icons";
export const Modal = ({index})=>{
  //
  const[item,setItem]=useState()
  
  useEffect(()=>{
          axios.get(`http://localhost:313/best_selling`).then((response)=>{
             setItem(response);

         });

      },[]);
  //
   window?.$(document).ready(() => {
    //  setBackgroundColor();
})
  //test
  const[backgroundColor,setBackgroundColor]=useState()
  //test
  //number product
  useEffect(() => {
    window
      ?.$(".cart-plus-minus")
      .append(
        '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
      );
    window?.$(".qtybutton").on("click", function () {
      var $button = window?.$(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  }, []);
  //number product
    const [modal,setModal]=useState({
        id:"1",
        show:false
    })
    useEffect(()=>{
      (modal.show) && window?.$(`#${modal.id}`).modal("show");
    },[modal])
    function handleModal()
    {
      setModal({'id':index.id,'show':true})
    }
   
    return (
        <>
        {/* <Quick handleModal={handleModal}></Quick> */}

        <div className="product__action p-absolute">
            <ul>
              <li > 
               {/* <Link to="#"  title="Add to Wishlist" onClick={()=>setBackgroundColor(backgroundColor==="#f1c40f"?"green":"#f1c40f")} style={{backgroundColor:backgroundColor}}> */}
                {/* <a onClick={()=>{AddToWishlist(item?.id,item?.pic,item?.text,item?.price);setBackgroundColor(backgroundColor==="#f1c40f"?"green":"#f1c40f")}} href="#" title="افزودن به علاقه مندی ها" style={{backgroundColor:backgroundColor}}><FontAwesomeIcon icon={faHeart} onclick={}></FontAwesomeIcon></a> */}
                <a className="Add-to-Wishlist" onFocus={()=>{AddToWishlist(item?.id,item?.pic,item?.text,item?.price);setBackgroundColor(backgroundColor==="red"?"white":"red")}}   style={{color:backgroundColor}} href="#" title="افزودن به علاقه مندی ها"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a>

              </li>
              <li> 
                <a href="#" title="Quick View" onClick={handleModal}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </a> 
              </li>
              <li>
                <a href="#" title="Compare">
                  {/* <i className="fa fa-sliders-h" onClick={()=>alert("هنوز این مورد وجود ندارد !")}></i> */}
                  <FontAwesomeIcon icon={faSlidersH} onClick={()=>alert("هنوز این مورد وجود ندارد !")}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
        </div> 
        {/* <button onClick={handleModal}>click</button> */}
        <div className="modal fade quick-view-product" aria-labelledby="exampleModalXlLabel" id={index.id} tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered product__modal" role="document">
          <div class="modal-content">
            <div class="product__modal-wrapper p-relative">
              <div class="product__modal-close p-absolute">
                <button data-bs-dismiss="modal">
                  {/* <i class="fa fa-times"></i> */}
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </button>
              </div>
              <div class="product__modal-inner">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="product__modal-box">
                      <div class="tab-content" id="modalTabContent">
                        <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                          <div class="product__modal-img w-img">
                            <img src={Config.shop+""+index.pic} alt=""/>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                          <div class="product__modal-img w-img">
                            <img src={Config.shop+""+index.pic} alt=""/>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs" id="modalTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="nav1-tab" data-bs-toggle="tab"data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                            <img src={Config.shop+""+index.pic} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={Config.shop+""+index.pic} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={Config.shop+""+index.pic} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={Config.shop+""+index.pic} alt=""/>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="product__modal-content">
                      <h4>
                        <a href="product-details.html">
                         {index.text}
                        </a>
                      </h4>
                      <div class="product__modal-des mb-40">
                        <p>
                          {index.des}
                        </p>
                      </div>
                      <div class="product__stock">
                        <span>وضعیت :</span>
                        <span>موجود</span>
                      </div>
                      <div class="product__stock sku mb-30">
                        <span>عنوان:</span>
                        <span></span>
                      </div>
                      <div class="product__review d-sm-flex">
                        <div class="rating rating__shop mb-15 mr-35">
                         <Rank></Rank>
                        </div>
                      </div>
                      <div class="product__price">
                        <span></span>
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
                                <ProductAddbtn></ProductAddbtn>
                              {/* <button class="t-y-btn" type="submit" >
                                لیست خرید +
                              </button> */}
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
        </>
    )
}