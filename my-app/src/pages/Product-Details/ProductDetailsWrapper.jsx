import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const ProductDetailsWrapper = ({ item, newprice, oldprice, sku }) => {
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


  

  


  return (
    <>
      <div class="col-xxl-7 col-xl-7 col-lg-7">
        <div class="product__details-wrapper">
          <div class="product__details">
            <h3 class="product__details-title">
              {/* <a href="product-details.html">Smart Mobile Phone 7/7plus/8/8plus/X/Xr W 32 to 128GB</a> */}
              <a href="product-details.html">{item}</a>
            </h3>
            <div class="product__review d-sm-flex">
              <div class="rating rating__shop mb-15 mr-35">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product__add-review mb-15">
                <span>
                  <a href="#">1 Review</a>
                </span>
                <span>
                  <a href="#">Add Review</a>
                </span>
              </div>
            </div>
            <div class="product__price">
              <span class="new">${newprice}</span>
              <span class="old">${oldprice}</span>
            </div>
            <div class="product__stock">
              <span>Availability :</span>
              <span>In Stock</span>
            </div>
            <div class="product__stock sku mb-30">
              <span>SKU:</span>
              <span>{sku}</span>
            </div>
            <div class="product__details-des mb-30">
              <p>
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when anunknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div class="product__details-stock">
              <h3>
                <span>Hurry Up!</span> Only 98 products left in stock.
              </h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-width="100%"
                ></div>
              </div>
            </div>
            <div class="product__details-quantity mb-20">
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
            <div class="product__details-action">
              <ul>
                <li>
                  <a href="#" title="Add to Wishlist">
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#" title="Compare">
                    <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#" title="Print">
                    <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="#" title="Print">
                    <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
