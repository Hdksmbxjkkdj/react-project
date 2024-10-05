import { ProducDetailsImg } from "../../../Product-Details/ProductDetailsnav";
import { ProductAddbtn } from "./product-add-btn";
import { ProductContent } from "./product-content";
import { ProductThumb, ProductThumbflex } from "./product-thumb";
const ProductItem = ({ type, slider }) => {
  return (
    <>
      <div className="product__item white-bg text-center" key={Math.random()}>
        <ProductThumb item={slider}></ProductThumb>
        <ProductContent item={slider}></ProductContent>
        {(slider?.number!=0)?<ProductAddbtn item={slider}></ProductAddbtn>:<span className="not-exist">ناموجود</span>}
      </div>
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

