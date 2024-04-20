import { ProductAction } from "./product-action";
import { Config } from "../../../../Utils/config";
const ProductThumb = ({item}) => {
  return (
    <>
      <div className="product__thumb p-relative">
        <a href="product-details.html" className="w-img">
          <img src={Config.shop+"product-1.jpg"} alt="product" />
          <img className="second-img" src={Config.shop+"product-2.jpg"} />
        </a>
        <ProductAction></ProductAction>
      </div>
    </>
  );
};

export { ProductThumb };
