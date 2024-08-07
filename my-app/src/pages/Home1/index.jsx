import { event } from "jquery";
import { useContext, useEffect, useState } from "react";
import { Config } from "../../Utils/config";
import { CartContext } from "../../context/CardContext";
import { ModalContext } from "../../context/modal";
import { AddToCart } from "../Cart/AddToCart";
import { ProgressWrap } from "../Components/Progress-wrap";
import { Adds } from "./adds";
import { BestSelling } from "./best-selling";
import { Features } from "./features";
import { FlashDeal } from "./flashdeal";
import { FromTheBlog } from "./from-the-blog";
import { Hero } from "./hero";
import { OnSell } from "./on-sell";
var filename1 = [
  { pic: "top/banner-top-1.jpg", name: "banner-1" },
  { pic: "top/banner-top-2.jpg", name: "banner-2" },
];
var filename2 = [
  { pic: "banner-1.jpg", name: "banner-1" },
  { pic: "banner-2.jpg", name: "banner-2" },
  { pic: "banner-3.jpg", name: "banner-3" },
];
var filename3 = [
  { pic: "banner-4.jpg", name: "banner-1" },
  { pic: "banner-5.jpg", name: "banner-2" },
];
var filename4 = [
  { pic: "banner-6.jpg", name: "banner-1" },
  { pic: "banner-7.jpg", name: "banner-2" },
  { pic: "banner-8.jpg", name: "banner-2" },
];
var res1 = {
  item: 6,
  0: {
    items: 1,
  },
  576: {
    items: 2,
  },
  767: {
    items: 3,
  },
  992: {
    items: 4,
  },
  1200: {
    items: 5,
  },
  1600: {
    items: 6,
  },
};


const Home1 = () => {
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
  const [value,setValue] = useState(1);
  const {cart,setCart} = useContext(CartContext)
  return (
    <>
      <ModalContext.Provider value={{modal,setModal}}>
      <ProgressWrap></ProgressWrap>
      <Hero></Hero>
      <Features></Features>
      <Adds img={filename2}></Adds>
      <BestSelling res={res1} item={{setModal}}></BestSelling>
      <Adds img={filename3}></Adds>
      <FlashDeal res={res1}></FlashDeal>
      <Adds img={filename4}></Adds>
      <OnSell res={res1}></OnSell>
      <FromTheBlog res={res1}></FromTheBlog>
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
                        <span>${modal.price.toFixed(2)}</span>
                      </div>
                      <div class="product__modal-form mb-30">
                        <form onSubmit={(event)=>AddToCart(event,modal.id,modal.img,modal.text,modal.price,value,setCart,cart,"error",null)}>
                          <div class="pro-quan-area d-lg-flex align-items-center">
                            <div class="product-quantity mr-20 mb-25">
                              <div class="cart-plus-minus p-relative">
                                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
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
      </ModalContext.Provider>
    </>
  );
};

export { Home1 };

