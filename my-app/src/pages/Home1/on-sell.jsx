import { TabContent } from "./best-selling/tab-content";
import { BestSellingHead } from "./best-selling/best-selling-head";
const OnSell = ({res}) => {
  return (
    <section className="best__sell pt-15 pb-40 grey-bg-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-md-flex justify-content-between mb-40">
              <div className="section__title">
                <h3>
                <span>محصولات</span> قابل فروش
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <TabContent type={"flex"} res={res}></TabContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OnSell };
