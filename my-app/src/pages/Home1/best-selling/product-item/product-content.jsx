const ProductContent = ()=> {
    return (
        <>
            <div className="product__content text-center">
          <h6 className="product-name">
            <a className="product-item-link" href="product-details.html">
              {" "}
              High Quality Glass Ultra-Thin Kitchen Scale
            </a>
          </h6>
          <div className="rating">
            <ul>
              <li>
                <a href="#">
                  <i className="far fa-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-star"></i>
                </a>
              </li>
            </ul>
          </div>
          <span className="price">$500.00</span>
        </div>
        </>
    )
}

export {ProductContent};