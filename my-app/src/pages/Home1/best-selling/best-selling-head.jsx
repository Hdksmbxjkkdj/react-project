const BestSellingHead = () => {
  return (
    <>
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
                تازه
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
                ویژگی ها
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
                داغ ترین ها
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
                رندوم
              </button>
            </li>
          </ul>
        </div>
    </>
  );
};

export {BestSellingHead};