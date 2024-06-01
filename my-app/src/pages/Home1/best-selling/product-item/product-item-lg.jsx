import { ProductThumb } from "./product-thumb";
import {ProductContentlg} from "./product-content-lg";
import { ProductAddbtn } from "./product-add-btn";
const ProductItemlg = (props)=> {
  console.log(props?.slider);
    return (
        <>
      <div className="product__item white-bg">
        <ProductThumb item={props?.slider}></ProductThumb>
        <ProductContentlg></ProductContentlg>
      </div>
    </>
    )
}

export {ProductItemlg};