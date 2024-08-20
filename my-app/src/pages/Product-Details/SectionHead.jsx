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
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btn";
// import {ShowProduct} from './Modal/ShowProduct'
import Modal from "./Modal/Modal";
export const SectionHead = ({ commentNumber }) => {
  const [items, setItems] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/best_selling`).then((res) => {
      setItems(res);
    });
  }, []);
  //modal
  const [modal, setModal] = useState({ show: false, data: null, tittle: null });
  //modal

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
                    پرفروش ترین<span>محصولات</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel
                className="product__slider OwlCarousel owl-theme"
                items={5}
                loop
                autoPlay
                // key={Math.random()}
                // nav
                fs-1
              >
                {items?.data?.map((item, index) => {
                  return (
                    <>
                      <div className="product__item white-bg mb-30 item">
                        <div className="product__thumb p-relative">
                          <a href="product-details.html" className="w-img">
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
                              <li>
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
                              </li>
                              <li>
                                <a
                                  href="#"
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
                                <a href="#" title="مقایسه">
                                  <FontAwesomeIcon
                                    icon={faSlidersH}
                                  ></FontAwesomeIcon>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="product__content text-center">
                          <h6 className="product-name">
                            <a
                              className="product-item-link"
                              href="product-details.html"
                            >
                              {item.text}
                            </a>
                          </h6>
                          <div className="rating">
                            <Rank></Rank>
                          </div>
                          <span className="price">{item.price}.000 تومان</span>
                        </div>
                        <div className="product__add-btn">
                          <button type="button">افزودن به سبد خرید</button>
                        </div>

                        {/* <AddToCart></AddToCart> */}
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
              <div className="col-xl-12">
                {modal.show && (
                  <Modal
                    setModal={setModal}
                    modal={modal}
                    commentNumber={commentNumber}
                  >
                    {/* <ModalBody data={modalInfo.data} /> */}
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
