import { Banner } from "./hero/banner";
const Adds = () => {
  var filename = [1,2,3];
  return (
    <>
      <section className="banner__area pt-20 pb-10 grey-bg-2">
        <div className="container">
          <div className="row">
            {filename.map((e) => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <Banner src={"banner-3.jpg"}></Banner>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { Adds };
