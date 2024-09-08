import { Config } from "../../../Utils";
import ModalBody from "./ModalBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { Rate } from "../RateSubmit/Rate";
import { useEffect, useState } from "react";
import { ProductAddbtn } from "../../Home1/best-selling/product-item/product-add-btncopy";
import { BtnLike } from "../Btns/BtnLike";
import { BtnShareBody } from "../Btns/BtnShareBody";
import { BtnPrint } from "../Btns/BtnPrint";
import { BtnCompare } from "../Btns/BtnCompare";
import { Link } from "react-router-dom";
export const Modal = ({ children, setModal, modal, commentNumber }) => {
  const handleImg = (event,i) => {
    window?.$(".delete").removeAttr('style')
    window?.$(".show-"+i).css({border:"2px solid #ffc107"})

    let preview = window?.$(".tab-content img");
    preview.fadeOut(100);

    preview.attr(
      "src",
      window?.$(event.target).parent().parent().parent().find(".product__modal-img").attr("src")
    );
    preview.fadeIn(300);
  };
  //num
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
  //num
  //btnshare
  const currentPageUrl = "tutorend.com";
  const [modals, setModals] = useState(false);
  const close = () => {
    setModals(!modals);
  };
  //btnshare

  return (
    <>
      <div
        className="position-fixed w-100 h-100 d-flex align-items-center"
        style={{
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          
          zIndex: "1000",
        }}
        onClick={() =>
          setModal({ show:false})
      }
      >
        <div className="container d-flex justify-content-center">
          {/* <div className="row justify-content-center align-items-center"> */}
          <div className="modal-content w-75 moodal">
            <div className="product__modal-wrapper p-relative">
              {/* <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
                        </div> */}

              <button
                className="btn btn-outline-warning"
                onClick={() => setModal({ show: false })}
              >
                x
              </button>
              <div className="container product__modal-inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-box">
                      <div className="tab-content" id="modalTabContent">
                        <div
                          className="tab-pane fade show active oo"
                          id="nav1"
                          role="tabpanel"
                          aria-labelledby="nav1-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src={Config.shop + "" + modal.data.pic}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <ul
                        className="nav nav-tabs d-flex flex-nowrap max-vw-25"
                        id="modalTab"
                        role="tablist"
                        style={{ overflowX: "auto", overflowY: "hidden" }}
                      >
                        {modal?.data?.gallery.map((item,i) => {
                          console.log(modal?.data?.gallery,item.name)
                          return (
                            <>
                              <li className="nav-item" role="presentation">
                                <button
                                  onClick={(event) => handleImg(event,i)}
                                  className="nav-link active"
                                  // id="nav1-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav1"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav1"
                                  aria-selected="true"
                                >
                                  <img src={Config.shop + "" + item.name} className={"delete show-"+i}/>
                                </button>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div
                      className="product__modal-content"
                      style={{ direction: "rtl" }}
                    >
                      <h4>
                        <a href="#">{modal.data.title}</a>
                      </h4>
                      <div className="product__modal-des mb-40">
                        <p>{modal.data.des}</p>
                      </div>
                      <div className="product__stock">
                        <span>دسترسی :</span>
                        <span>در انبار</span>
                      </div>
                      <div className="product__stock sku mb-30">
                        <span>SKU:{modal.data.SKU}</span>
                        <span>{modal.data.text}</span>
                      </div>
                      <div className="product__review d-sm-flex">
                        <div className="rating rating__shop mb-15 ml-35">
                          <Rate
                            stars={modal?.data?.rate}
                            type="comment"
                            className="ms-3"
                          />
                        </div>
                        <div className="product__add-review mb-15">
                          <span>
                            <a href="#">
                              {commentNumber == 0
                                ? "نظری نیست"
                                : commentNumber + "نظر"}
                            </a>
                          </span>
                          <span>
                            <Link to={`/product/${modal?.data?.id}`}>افزودن نظر</Link>
                          </span>
                        </div>
                      </div>
                      <div className="product__price">
                        <span>{modal.data.price}/000 تومان</span>
                      </div>
                      <div className="product__modal-form mb-30">
                        {/* <form action="#">
                            <div className="pro-quan-area d-lg-flex align-items-start">
                              <div className="product-quantity  mb-25">
                                <div className="cart-plus-minus p-relative">
                                  <input type="text" value="1" />
                                </div>
                              </div>
                              <div className="pro-cart-btn mb-25"> */}
                        {/* <button className="t-y-btn fs-6 "  style={{fontWeight:"100"}} type="submit">
                                  افزودن به کارت
                                </button> */}
                        <ProductAddbtn
                          type={"modal"}
                          item={modal?.data}
                          className={"t-y-btn"}
                        ></ProductAddbtn>
                        {/* </div>
                            </div>
                          </form> */}
                      </div>
                      <div className="product__modal-links">
                        <ul>
                          {/* <li>
  <a href="#" title="افزودن به علاقه مندی ها">
    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
  </a>
</li> */}
                          {/* <AddToWishlist item={item}></AddToWishlist> */}
                          {/* <li>
  <a href="#"  title="علاقه مندی ها">
    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
  </a>
</li> */}
                          <BtnLike items={modal?.data}></BtnLike>
                          <li>
                            {/* <a href="#" title="مقایسه کنید">
                              <FontAwesomeIcon
                                icon={faSliders}
                              ></FontAwesomeIcon>
                            </a> */}
                            <BtnCompare item={modal?.data}></BtnCompare>
                          </li>
                          <li>
                            <BtnPrint></BtnPrint>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="اشتراک گذاری"
                              onClick={() => {
                                setModals(true);
                                close(true);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faShareAlt}
                              ></FontAwesomeIcon>
                            </a>
                          </li>
                        </ul>
                        {modals && (
                          <BtnShareBody setModal={setModals} modal={modals}>
                            {/* <ModalBody data={modalInfo.data} /> */}
                          </BtnShareBody>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
