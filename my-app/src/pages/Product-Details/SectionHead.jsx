import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Rank } from "../Components/Rank";
import { Config } from "../../Utils";
import { AddToCart } from "../Cart/AddToCart";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { AddToWishlist } from "../Home1/best-selling/product-item/AddToWishlist";
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btn copy2";
// import {ShowProduct} from './Modal/ShowProduct'
import Modal from "./Modal/Modal";
import { Rate } from "./RateSubmit/Rate";
import { Link } from "react-router-dom";
import { Btns } from "./Modal/Btn";
import { BtnLike } from "./Btns/BtnLike";
import { BtnCompare } from "./Btns/BtnCompare";
export const SectionHead = ({commentNumber,res1}) => {
  const [items, setItems] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/best_selling`).then((res) => {
      setItems(res);
    });
  }, []);
  //modal
  const [modal, setModal] = useState({ show: false, data: null, tittle: null });
  //modal
//responsive
const Option = {
  loop: true,
  margin: 20,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // smartSpeed: 500,
  // items: 6,
  navText: [
    '<button><i class="fa fa-angle-left"></i></button>',
    '<button><i class="fa fa-angle-right"></i></button>',
  ],
  // nav: true,
  dots: false,
  responsive: res1,
  autoplayHoverPause: true,
};
//responsive
  return (
    <>
      <section
        className="product__area box-plr-75 pb-20"
        style={{ direction: "ltr" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__head mb-40">
                <div className="section__title">
                  <h3 className="text-end">
                     محصولات مرتبط<span></span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
             <div className="row"> 
             <div class="col-xxl-12">
              <OwlCarousel
                className="product__slider OwlCarousel owl-theme owl-carousel sectionHead"
                {...Option}
                items={5}
                loop
                autoplay
                autoplayTimeout={2000}
                
              
                // key={Math.random()}
                //  nav
                fs-1
              
              >
                {items?.data?.map((item, index) => {
                  
                  return (
                    <>
                      <div className="product__item white-bg mb-30 item">
                        <div className="product__thumb p-relative">
                          <a href={"/product/" + item.id} className="w-img">
                            <img
                              src={Config.shop + "" + item.pic}
                              alt="product"
                            
                            />
                            <img
                              className="second-img"
                              src={Config.shop + "" + item.seccondpic}
                              alt="product"
                             
                            />
                          </a>
                          {/* <Modal items={item}></Modal> */}

                        <div className="product__action p-absolute">
                            <ul>
                              {/* <li>
                                <a
                                  href="#"
                                  onClick={() =>
                                    AddToWishlist(
                                      item?.id,
                                      item?.pic,
                                      item?.text,
                                      item?.price
                                    )
                                  }
                                  title="افزودن به علاقه مندی ها"
                                >
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                  ></FontAwesomeIcon>
                                </a>
                              </li> */}
                              <BtnLike items={item}></BtnLike>
                              <li>
                                <a
                                    href="javascript:void(0)"
                                  title="نمایش سریع"
                                  onClick={() =>
                                    setModal({ show: true, data: item })
                                  }
                                >
                                  <FontAwesomeIcon
                                    icon={faSearch}
                                  ></FontAwesomeIcon>
                                </a>
                              </li>
                              <li>
                                {/* <a href="#" title="مقایسه">
                                  <FontAwesomeIcon
                                    icon={faSlidersH}
                                  ></FontAwesomeIcon>
                                </a> */}
                                <BtnCompare item={item}></BtnCompare>
                              </li>
                            </ul>
                          </div> 
                          {/* <Btns items={items}></Btns> */}
                        </div>

                        <div className="product__content text-center">
                          <h6 className="product-name "
                          //  style={{width:"fit-content"}}
                          >
                            <a
                              className="product-item-link"
                              href={"/product/" + item.id}
                             
                            >
                              {item.text}
                            </a>
                          </h6>
                          <div className="rating d-block">
                          <Rate stars={item?.rate} type="comment" className="ms-3"/> 

                          </div>
                          <span className="price" style={{direction:"rtl"}}>{item.price}.000تومان </span>
                        </div>
                        {/* <div className="product__add-btn">
                          <button type="button">افزودن به سبد خرید</button>
                        </div> */}
                       
                           {item.number!=0?<ProductAddbtn item={item}></ProductAddbtn>:<div className="d-flex justify-content-center position-absolute w-25" style={{top:"1rem",right:"0"}}><p className="bg-danger text-white rounded w-100 text-center">ناموجود</p></div>}

                        {/* <AddToCart></AddToCart> */}
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
              {/* <div className="col-xl-12"> */}
                {modal.show && (
                  <Modal
                    type={"direction"}
                    setModal={setModal}
                    modal={modal}
                    commentNumber={commentNumber}
                  >
                    {/* <ModalBody data={modalInfo.data} /> */}
                  </Modal>
                )}
              {/* </div> */}
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};
