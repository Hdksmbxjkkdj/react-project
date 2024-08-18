const BestSellingHead = ({setFilter}) => {
  function handleFilter(value)
  {
    setFilter(value)
  }
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
                onClick={()=>handleFilter(500)}
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
                onClick={()=>handleFilter(560)}
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
                onClick={()=>handleFilter(650)}
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
                onClick={()=>handleFilter(700)}
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