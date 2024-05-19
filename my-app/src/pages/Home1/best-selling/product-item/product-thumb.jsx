import { ProductAction } from "./product-action";
import { Config } from "../../../../Utils/config";
const ProductThumb = ({item}) => {
  return (
    <>
      <div className="product__thumb p-relative">
        <a href="product-details.html" className="w-img">
          <img src={Config.shop+""+item?.pic} alt="product" />
          <img className="second-img" src={Config.shop+""+item?.seccondpic} />
        </a>
        <ProductAction></ProductAction>
      </div>
    </>
  );
};

const ProductThumbflex = ({item})=> {
  return (
    <>
      <div className="product__thumb p-relative">
        <a href="product-details.html" className="w-img">
          <img src={Config.shop+""+item.pic} alt="product" />
          <img className="second-img" src={Config.shop+""+item.seccondpic} />
        </a>
      </div>
    </>
  )
}

export { ProductThumb,ProductThumbflex };
