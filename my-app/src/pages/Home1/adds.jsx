import { Banner } from "./hero/banner";
const Adds = ({img}) => {
 
  return (
    <>
      <section className="banner__area pt-20 pb-10 grey-bg-2">
        <div className="container">
          <div className="row">
            {img.map((e, index, length) => { 
              return (
                <div className={(length.length>2)? "col-xl-4 col-lg-4 col-md-6" : "col-xl-6 col-lg-6 col-md-12"}>
                  <Banner src={e.pic} alt={e.name}></Banner>
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
