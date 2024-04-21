import { ProductItem } from "../best-selling/product-item/product-item";
import { ProductItemlg } from "../best-selling/product-item/product-item-lg";
const TabPane = () => {
  return (
    <div
      class="tab-pane fade show active"
      id="computer"
      role="tabpanel"
      aria-labelledby="computer-tab"
    >
      <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6">
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 ">
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <div class="product__item-wrapper mb-20">
            <ProductItemlg></ProductItemlg>
          </div>
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
        <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
          <div class="product__item-wrapper mb-20">
            <ProductItem></ProductItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export {TabPane};