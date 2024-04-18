import { ProductThumb } from "./product-thumb";
import { ProductContent } from "./product-content";
import { ProductAddbtn } from "./product-add-btn";
const ProductItem = () => {
  return (
    <>
      <div className="product__item white-bg">
        <ProductThumb></ProductThumb>
        <ProductContent></ProductContent>
        <ProductAddbtn></ProductAddbtn>
      </div>
    </>
  );
};

export {ProductItem};