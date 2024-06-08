import { ProductAction } from "./product-action";
import { Config } from "../../../../Utils/config";
import { Link } from "react-router-dom";
const ProductThumb = ({item}) => {
  return (
    <>
      <div className="product__thumb p-relative">
        <Link to={"product-details/:"+item?.id} className="w-img">
          <img src={Config.shop+""+item?.pic} alt="product" />
          <img className="second-img" src={Config.shop+""+item?.seccondpic} />
        </Link>
        <ProductAction item={item}></ProductAction>
      </div>
    </>
  );
};

const ProductThumbflex = ({item})=> {
  return (
    <>
      <div className="product__thumb p-relative">
        <Link to={"product-details/:"+item.id} className="w-img">
          <img src={Config.shop+""+item.pic} alt="product" />
          <img className="second-img" src={Config.shop+""+item.seccondpic} />
        </Link>
      </div>
    </>
  )
}

export { ProductThumb,ProductThumbflex };
