const Features = () => {
  const array = [
    { title: "Free Shipping", text: "Free Shipping On All Order" },
    { title: "Money Guarantee", text: "30 Day Money Back Guarantee" },
    { title: "Secure Payment", text: "All Payment Method are accepted" },
    { title: "Secure Payment", text: "All Payment Method are accepted" },
    { title: "Member Discount", text: "Upto 40% Discount All Products" },
  ];
  return (
    <>
      <section className="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
            {/* <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-15">
                  <i className="fal fa-rocket-launch"></i>
                </div>
                <div className="features__content">
                  <h6>Free Shipping</h6>
                  <p>Free Shipping On All Order</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-15">
                  <i className="fal fa-sync"></i>
                </div>
                <div className="features__content">
                  <h6>Money Guarantee</h6>
                  <p>30 Day Money Back Guarantee</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-15">
                  <i className="fal fa-user-headset"></i>
                </div>
                <div className="features__content">
                  <h6>Online Support 24/7</h6>
                  <p>Technical Support Stand By</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item d-flex white-bg">
                <div className="features__icon mr-15">
                  <i className="fal fa-thumbs-up"></i>
                </div>
                <div className="features__content">
                  <h6>Secure Payment</h6>
                  <p>All Payment Method are accepted</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="features__item features__item-last d-flex white-bg">
                <div className="features__icon mr-15">
                  <i className="fal fa-badge-dollar"></i>
                </div>
                <div className="features__content">
                  <h6>Member Discount</h6>
                  <p>Upto 40% Discount All Products</p>
                </div>
              </div>
            </div> */}
            {array.map(function (e) {
              return (
                <>
                  <div className="col">
                    <div className="features__item features__item-last d-flex white-bg">
                      <div className="features__icon mr-15">
                        <i className="fa fa-badge-dollar"></i>
                      </div>
                      <div className="features__content">
                        <h6>{e.title}</h6>
                        <p>{e.text}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { Features };
