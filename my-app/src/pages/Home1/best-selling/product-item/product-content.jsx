const ProductContent = ({type,item})=> {
    return (
        <>
            <div className="product__content text-center">
          <h6 className="product-name">
            <a className="product-item-link">
              {
                item?.text
              }
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
          <span className="price">تومان {item?.price}</span>
        </div>
        </>
    )
}

export {ProductContent};