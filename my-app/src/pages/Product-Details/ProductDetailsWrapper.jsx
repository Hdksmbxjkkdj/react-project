import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Rank } from "../Components/Rank";
import { Rate } from "./RateSubmit/Rate";
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btncopy";
import { BtnLike } from "./Btns/BtnLike"
import { BtnShare } from "./Btns/BtnShare";
import { BtnShareBody } from "./Btns/BtnShareBody";
import { BtnCompare } from "./Btns/BtnCompare";
import { BtnPrint } from "./Btns/BtnPrint";
import { Link } from "react-router-dom";
export const ProductDetailsWrapper = ({ item, count }) => {

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
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  }, []);
  //
  const [show, setShow] = useState(false)

  //btnshare
  const currentPageUrl = "tutorend.com";
  const [modal, setModal] = useState(false);
  const close = () => {
    setModal(!modal)
  }
  //btnshare

  //scroll 
  const comment = () => {
    window?.$('#review-tab').click()

    window.scrollTo({ top: document.getElementById('productDesTab').offsetTop - 100, behavior: 'smooth' })
  }
  //scroll
  return (
    <>
      <div className="col-xxl-7 col-xl-7 col-lg-7">
        <div className="product__details-wrapper">
          <div className="product__details">
            <h3 className="product__details-title">
              <Link to={"/product-details/" + item?.data.id}>{item?.data.text}</Link>
            </h3>
            <div className="product__review d-sm-flex">
              <div className="
              ">
                <Rate stars={item?.data?.rate} type="lg" className="ms-3" />

              </div>
              <div className="product__add-review mb-15" >
                <span>
                  <a href="#">{count == 0 ? "نظری نیست" : count + "نظر"}</a>

                </span>
                <span>
                  <a href="javascript:void(0)" onClick={() => comment()}>افزودن نظر</a>
                </span>
              </div>
            </div>
            <div className="product__price">
              <span className="new">{item?.data.price}/000تومان</span>
              <span className="old">{item?.data.oldprice == 0 ? "این محصول تخفیف ندارد" : item?.data.oldprice + "/000تومان"}</span>
            </div>
            <div className="product__stock">
              <span>دسترسی :</span>
              <span>{item?.data.number == 0 ? "نا موجود" : "در انبار"}</span>
            </div>
            <div className="product__stock sku mb-30">
              <span>برند:</span>
              <span>{item?.data.SKU}</span>
            </div>
            <div className="product__details-des mb-30">
              <p>
                {item?.data?.des}
              </p>
            </div>
            {item?.data.number == 0 ? "" : <div className="product__details-stock">
              <h3>
                <span>{item?.data.number == 0 ? "" : "عجله کن!"}</span>  {item?.data.number == 0 ? "موجودی این محصول به پایان رسیده است" : item?.data.number + "عدد محصول در انبار موجود است"}
              </h3>
              <div className="progress d-flex">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${item?.data?.number}%`, backgroundColor: "#fcb700", transition: "width 0.5s" }}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-width="100%"
                ></div>
              </div>
            </div>}

            <div className="product__details-quantity mb-20">

              <ProductAddbtn item={item?.data} className={"t-y-btn"} type={"productDetails"}></ProductAddbtn>

            </div>
            <div className="product__details-action" style={{ position: "relative" }}>
              <ul>
                <BtnLike items={item?.data}></BtnLike>



                <BtnCompare item={item?.data}></BtnCompare>


                <BtnPrint></BtnPrint>


                <BtnShareBody></BtnShareBody>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
