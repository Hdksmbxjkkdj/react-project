import { BestSellingHead } from "./best-selling/best-selling-head";
import { TabContent } from "./best-selling/tab-content";
const FromTheBlog = () => {
  return (
    <>
      <section className="best__sell pt-15 pb-40 grey-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-md-flex justify-content-between mb-40">
                <div className="section__title">
                  <h3>
                    از <span>وبلاگ</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <TabContent type={"blog"}></TabContent>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export {FromTheBlog};