const ProductAction = ()=> {
    return (
        <>
            <div className="product__action p-absolute">
            <ul>
              <li>
                <a href="#" title="Add to Wishlist">
                  <i className="fal fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId">
                  <i className="fal fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Compare">
                  <i className="far fa-sliders-h"></i>
                </a>
              </li>
            </ul>
          </div>
        </>
    )
}

export {ProductAction};