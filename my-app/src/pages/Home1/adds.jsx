import { Banner } from "./hero/banner";
const Adds = ({img}) => {
  var filename = [
    { pic: 'banner-1.jpg', name:'banner-1'},
    { pic: 'banner-2.jpg', name:'banner-2'},
    { pic: 'banner-3.jpg', name:'banner-3'},
  ];
  return (
    <>
      <section className="banner__area pt-20 pb-10 grey-bg-2">
        <div className="container">
          <div className="row">
            {img.map((e, index, length) => {
              console.log(length.length);
              return (
                <div className={(length.length>2)? "col-xl-4 col-lg-4 col-md-6" : "col-xl-6 col-lg-6 col-md-12"}>
                  <Banner src={e.pic}></Banner>
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
