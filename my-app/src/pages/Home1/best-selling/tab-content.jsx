import { ProductSlider } from "./product-slider";
const TabContent = () => {
  return (
    <>
      <div className="tab-content" id="best-sell">
        <div className="tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new-tab">
          <ProductSlider></ProductSlider>
        </div>
      </div>
    </>
  );
};

export { TabContent };
