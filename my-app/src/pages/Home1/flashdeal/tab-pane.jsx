import { ProductItem } from "../best-selling/product-item/product-item";
import { ProductItemlg } from "../best-selling/product-item/product-item-lg";
const TabPane = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="computer"
      role="tabpanel"
      aria-labelledby="computer-tab"
    >
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6">
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 ">
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <div className="product__item-wrapper mb-20">
            <ProductItemlg></ProductItemlg>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export {TabPane};