import { ProductContentlg } from "./product-content-lg";
import { ProductThumb } from "./product-thumb";
const ProductItemlg = (props)=> {
    return (
        <>
      <div className="product__item white-bg">
        <ProductThumb item={props?.slider}></ProductThumb>
        <ProductContentlg item={props?.slider}></ProductContentlg>
      </div>
    </>
    )
}
export { ProductItemlg };