import { Config } from "../../Utils/config";
const ProductDealItem = ({product}) => {
  return (
    <>
      <div className="product__deal-item border-right-2">
        <div className="product__item product__item-4 white-bg product__sale mb-30">
          <div className="row">
            <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6">
              <div className="product__thumb product__thumb-big p-relative">
                <a href="product-details.html" className="w-img">
                  <img
                    src={Config.shop+product.pic}
                    alt={product.alt}
                  />
                  <img
                    className="second-img"
                    src={Config.shop+product.secpic}
                    alt={product.alt}
                  />
                </a>
                <div className="product__offer">
                  <span className="discount">-{product.offer}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="product__content product__content-2 product__content-4">
                <h6 className="product-name product__deal-name">
                  <a className="product-item-link" href="product-details.html">
                    {product.title}
                  </a>
                </h6>
                <div className="rating rating-2">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-star"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="new mb-5">{product.count}</span>
                <span className="price-old mb-5">
                  {" "}
                  <del>{product.del}</del>{" "}
                </span>
                <p className="mt-10">
                  {product.text}
                </p>
                <div className="product__countdown">
                  <h4>{product.timetitle}</h4>
                  <div className="countdown-wrapper">
                    <div data-countdown data-date="Dec 02 2022 20:20:22">
                      <ul>
                        <li>
                          <span data-days>0</span>
                          <p>Days</p>
                        </li>
                        <li>
                          <span data-hours>0</span>
                          <p>Hours</p>
                        </li>
                        <li>
                          <span data-minutes>0</span>
                          <p>mins</p>
                        </li>
                        <li>
                          <span data-seconds>0</span>
                          <p>secs</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a href="#" className="t-y-btn t-y-btn-red w-100 mb-10">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export {ProductDealItem};