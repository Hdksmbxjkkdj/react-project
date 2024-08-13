import { ProductThumb } from "./product-thumb";
import { ProductThumbflex } from "./product-thumb";
import { ProductContent } from "./product-content";
import { ProductAddbtn } from "./product-add-btn";
import { ProducDetailsImg } from "../../../Product-Details/ProductDetailsnav";
const ProductItem = ({type, slider}) => {
 
  return (
    <>
      <div className="product__item white-bg" key={Math.random()}>
        <ProductThumb item={slider}></ProductThumb>
        <ProductContent item={slider}></ProductContent>
        <ProductAddbtn item={slider}></ProductAddbtn>
      </div>
    </>
  );
};

const ProductItemflex = ({type, slider}) => {
  
  return (
    <>
      <div className="product__item white-bg d-flex mb-4">
        <ProductThumbflex item={slider}></ProductThumbflex>
        <ProductContent item={slider}></ProductContent>
      </div>
    </>
  );
};
//test

const  ProducDetailsImgs= ({type, slider}) => {
  return (
    <>
      <ProducDetailsImg item={slider}></ProducDetailsImg>
    </>
  );
};
export { ProductItem,ProductItemflex,ProducDetailsImgs };