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
      <section class="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10">
        <div class="container">
          <div class="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
            {/* <div class="col">
              <div class="features__item d-flex white-bg">
                <div class="features__icon mr-15">
                  <i class="fal fa-rocket-launch"></i>
                </div>
                <div class="features__content">
                  <h6>Free Shipping</h6>
                  <p>Free Shipping On All Order</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="features__item d-flex white-bg">
                <div class="features__icon mr-15">
                  <i class="fal fa-sync"></i>
                </div>
                <div class="features__content">
                  <h6>Money Guarantee</h6>
                  <p>30 Day Money Back Guarantee</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="features__item d-flex white-bg">
                <div class="features__icon mr-15">
                  <i class="fal fa-user-headset"></i>
                </div>
                <div class="features__content">
                  <h6>Online Support 24/7</h6>
                  <p>Technical Support Stand By</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="features__item d-flex white-bg">
                <div class="features__icon mr-15">
                  <i class="fal fa-thumbs-up"></i>
                </div>
                <div class="features__content">
                  <h6>Secure Payment</h6>
                  <p>All Payment Method are accepted</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="features__item features__item-last d-flex white-bg">
                <div class="features__icon mr-15">
                  <i class="fal fa-badge-dollar"></i>
                </div>
                <div class="features__content">
                  <h6>Member Discount</h6>
                  <p>Upto 40% Discount All Products</p>
                </div>
              </div>
            </div> */}
            {array.map(function (e) {
              return (
                <>
                  <div class="col">
                    <div class="features__item features__item-last d-flex white-bg">
                      <div class="features__icon mr-15">
                        <i class="fal fa-badge-dollar"></i>
                      </div>
                      <div class="features__content">
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
