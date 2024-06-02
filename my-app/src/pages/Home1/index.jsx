import { Hero } from "./hero";
import { Banner } from "./hero/banner";
import { Features } from "./features";
import { BestSelling } from "./best-selling";
import { Adds } from "./adds";
import { FlashDeal } from "./flashdeal";
import { OnSell } from "./on-sell";
import { FromTheBlog } from "./from-the-blog";
import { ProgressWrap } from "../Components/Progress-wrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Config } from "../../Utils/config";
import { ModalContext } from "../../context/modal";
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
    title:"Samsung C49J89: £875, Debenhams Plus",
    text:"Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt",
    price:560,
    img:"quick-view/quick-view-1.jpg",
    seccondimg:"quick-view/quick-view-2.jpg"
  });
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
      <div class="modal fade" id="productModalId" tabindex="-1" role="dialog" aria-hidden="true">
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
                        <div class="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                          <div class="product__modal-img w-img">
                            <img src="./img/shop/product/quick-view/quick-view-3.jpg" alt=""/>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab" >
                          <div class="product__modal-img w-img">
                            <img src="./img/shop/product/quick-view/quick-view-4.jpg"alt=""/>
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
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3" aria-selected="false">
                            <img src="./img/shop/product/quick-view/nav/quick-nav-3.jpg" alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4" aria-selected="false">
                            <img src="./img/shop/product/quick-view/nav/quick-nav-4.jpg" alt=""/>
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
                        <span>Availability :</span>
                        <span>In Stock</span>
                      </div>
                      <div class="product__stock sku mb-30">
                        <span>SKU:</span>
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
                        <form action="#">
                          <div class="pro-quan-area d-lg-flex align-items-center">
                            <div class="product-quantity mr-20 mb-25">
                              <div class="cart-plus-minus p-relative">
                                <input type="text" value="1" />
                              </div>
                            </div>
                            <div class="pro-cart-btn mb-25">
                              <button class="t-y-btn" type="submit">
                                Add to cart
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
