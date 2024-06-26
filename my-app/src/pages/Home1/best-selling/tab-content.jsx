import { ProductSlider } from "./product-slider";
const TabContent = ({type,res}) => {
  return (
    <>
      <div className="tab-content" id="best-sell">
        <div className="tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new-tab">
          <ProductSlider type={type} res={res}></ProductSlider>
        </div>
      </div>
    </>
  );
};

export { TabContent,};
