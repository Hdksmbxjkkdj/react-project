import { BestSellingHead } from "./best-selling/best-selling-head";
import { TabContent } from "./best-selling/tab-content";
const BestSelling = ({type,res,item}) => {
  return (
    <section className="best__sell pt-15 pb-40 grey-bg-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
          <div className="section__head d-md-flex justify-content-between mb-40">
              <div className="section__title">
                <h3>
                  قابل فروش<span>محصولات</span>
                </h3>
              </div>
            <BestSellingHead></BestSellingHead>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <TabContent type={type} res={res} item={item}></TabContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export { BestSelling };
