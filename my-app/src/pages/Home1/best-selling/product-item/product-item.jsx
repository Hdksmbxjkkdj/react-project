import { Config } from "../../../../Utils";
import { ProducDetailsImg } from "../../../Product-Details/ProductDetailsnav";
import { Rate } from "../../../Product-Details/RateSubmit/Rate";
import { ProductAction } from "./product-action";
import { ProductAddbtn } from "./product-add-btn";
import { ProductContent } from "./product-content";
import { ProductThumb } from "./product-thumb";
import { ProductThumbflex } from "./product-thumb";
import { Link } from "react-router-dom";
const ProductItem = ({ type, slider }) => {
  return (
    <>
      <div className="product__item white-bg text-center" key={Math.random()}>
        <ProductThumb item={slider}></ProductThumb>
        <ProductContent item={slider}></ProductContent>
        <ProductAddbtn item={slider}></ProductAddbtn>
      </div>
      {/* <div className="card" key={Math.random()}>
        <Link to={"/product-details/" + slider?.id}>
          <div className="image-container">
            <div className="first">
              <div className="d-flex justify-content-between align-items-center">
                <span className="discount">
                  {Math.round(100 - (slider?.price * 100) / slider?.oldprice)} %
                </span>
              </div>
            </div>

            <img
              src={`${Config.shop}${slider?.pic}`}
              className="img-fluid rounded thumbnail-image first__pic"
            />
            <img
              src={`${Config.shop}${slider?.seccondpic}`}
              className="img-fluid rounded thumbnail-image second__pic"
            />
          </div>

          <div className="product-detail-container p-2">
            <div className="d-flex justify-content-between ">
              <h5 className="dress-name">{slider?.title}</h5>

              <div className="d-flex flex-column mb-2">
                <span className="new-price">{slider?.price} ت</span>
                <small className="old-price text-right">
                  {slider?.oldprice} ت
                </small>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-1">
              <div className=" d-flex ">
                <div className="rating-star">
                  <Rate stars={slider?.rate} />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <ProductAction item={slider} />
        <ProductAddbtn item={slider} />
      </div> */}
    </>
  );
};

const ProductItemflex = ({ type, slider }) => {
  return (
    <>
      <div className="product__item white-bg d-flex mb-4">
        <ProductThumbflex item={slider}></ProductThumbflex>
        <ProductContent item={slider} type={"flex"}></ProductContent>
      </div>
    </>
  );
};
//test

const ProducDetailsImgs = ({ type, slider }) => {
  return (
    <>
      <ProducDetailsImg item={slider}></ProducDetailsImg>
    </>
  );
};
export { ProducDetailsImgs, ProductItem, ProductItemflex };
