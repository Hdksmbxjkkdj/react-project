import { ProductItem } from "./product-item/product-item";
const ProductSlider = () => {
  return (
    <>
      <div className="owl-stage">
        <ProductItem></ProductItem>
      </div>
    </>
  );
};

export { ProductSlider };
