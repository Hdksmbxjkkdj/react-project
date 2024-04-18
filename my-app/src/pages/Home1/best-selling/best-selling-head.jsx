const BestSellingHead = () => {
  return (
    <>
      <div className="section__head d-md-flex justify-content-between mb-40">
        <div className="section__title">
          <h3>
            Best Selling<span>Products</span>
          </h3>
        </div>
        <div className="product__nav-tab mr-75">
          <ul className="nav nav-tabs" id="best-sell-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="new-tab"
                data-bs-toggle="tab"
                data-bs-target="#new"
                type="button"
                role="tab"
                aria-controls="new"
                aria-selected="true"
              >
                New Arrival
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="featured-tab"
                data-bs-toggle="tab"
                data-bs-target="#featured"
                type="button"
                role="tab"
                aria-controls="featured"
                aria-selected="false"
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="hot-tab"
                data-bs-toggle="tab"
                data-bs-target="#hot"
                type="button"
                role="tab"
                aria-controls="hot"
                aria-selected="false"
              >
                Hot Sale
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="random-tab"
                data-bs-toggle="tab"
                data-bs-target="#random"
                type="button"
                role="tab"
                aria-controls="random"
                aria-selected="false"
              >
                Random
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export {BestSellingHead};