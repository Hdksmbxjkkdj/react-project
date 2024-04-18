import { ProductAction } from "./product-action";
const ProductThumb = () => {
  return (
    <>
      <div className="product__thumb p-relative">
        <a href="product-details.html" className="w-img">
          <img src="./img/shop/product/product-1.jpg" alt="product" />
          <img className="second-img" src="./img/shop/product/product-2.jpg" />
        </a>
        <ProductAction></ProductAction>
      </div>
    </>
  );
};

export { ProductThumb };
