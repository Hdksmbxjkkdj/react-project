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
import { Rank } from "../Components/Rank";
import { Rate } from "../Product-Details/RateSubmit/Rate";
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
    items: 2,
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
var res2 = {
  item: 4,
  0: {
    items: 1,
  },
  576: {
    items: 2,
  },
  767: {
    items: 2,
  },
  992: {
    items: 4,
  },
  1200: {
    items: 4,
  },
  1600: {
    items: 4,
  },
};


const Home1 = () => {
  const [modal,setModal] = useState({
    title:"",
    des:"",
    price:0,
    img:"",
    seccondimg:"",
    id:"111111111",
    show:false,
    stars:0
  });
  useEffect(()=>{
    (modal.show) && window?.$(`#${modal.id}`).modal("show");
  },[modal])
  const [value,setValue] = useState(1);
  const {cart,setCart} = useContext(CartContext);
  const [check,setCheck] = useState([])
  useEffect(()=>{
    cart.map(el=>{
      if(el.id==modal.id)
      {
        setCheck([...check,modal])
      }
    })
  },[cart,modal])
  function handleSubmit(e){
    AddToCart(e,modal.id,modal.img,modal.text,modal.price,value,setCart,cart,null,"error",null)
  }
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
      <OnSell res={res2}></OnSell>
      <FromTheBlog res={res1}></FromTheBlog>
      <div className="modal fade quick-view-product" aria-labelledby="exampleModalXlLabel" id={modal.id} tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered product__modal" role="document">
          <div className="modal-content">
            <div className="product__modal-wrapper p-relative">
              <div className="product__modal-close p-absolute">
                <button data-bs-dismiss="modal">
                  <i className="fa fa-times"></i>
                </button>
              </div>
              <div className="product__modal-inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-box">
                      <div className="tab-content" id="modalTabContent">
                        <div className="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                          <div className="product__modal-img w-img">
                            <img src={Config.shop+""+modal.img} alt=""/>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                          <div className="product__modal-img w-img">
                            <img src={`${Config.shop}${modal.seccondimg}`} alt=""/>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs" id="modalTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                            <img src={`${Config.shop}${modal.img}`} alt=""/>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={`${Config.shop}${modal.seccondimg}`} alt=""/>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-content">
                      <h4>
                        <a href="product-details.html">
                         {modal.title}
                        </a>
                      </h4>
                      <div className="product__modal-des mb-40">
                        <p>
                          {modal.des}
                        </p>
                      </div>
                      <div className="product__stock">
                        <span>وضعیت :</span>
                        <span>موجود</span>
                      </div>
                      <div className="product__stock sku mb-30">
                        <span>عنوان:</span>
                        <span>{modal.title}</span>
                      </div>
                      <div className="product__review d-sm-flex">
                        <div className="rating rating__shop mb-15 mr-35">
                          <Rate stars={modal.stars}/>
                        </div>
                      </div>
                      <div className="product__price">
                        <span>${modal.price.toFixed(2)}</span>
                      </div>
                      <div className="product__modal-form mb-30" key={Math.random()}>
                        {(!check.includes(modal))?<form onSubmit={(event)=>handleSubmit(event)}>
                          <div className="pro-quan-area d-lg-flex align-items-center">
                            <div className="product-quantity ml-20 mb-20">
                              <div className="cart-plus-minus p-relative">
                                <input type="text" value={value} onChange={(e)=>setValue(()=>e.target.value>1?e.target.value:1)} autoFocus/>
                                <div className="inc qtybutton" onClick={()=>setValue(value+1)}>+</div>
                                <div className="dec qtybutton" onClick={()=>setValue(()=>value>1?value-1:1)}>-</div>
                              </div>
                            </div>
                            <div className="pro-cart-btn mb-20">
                              <button className="t-y-btn" type="submit">
                                افزودن به سبد
                              </button>
                            </div>
                          </div>
                        </form>:<div>
                          <button disabled className="t-y-btn t-y-btn-red">
                            افزوده شده به  سبد خرید
                          </button>
                          </div>}
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