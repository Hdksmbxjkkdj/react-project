import { ProductAddbtn } from "./product-add-btn";

const ProductContentlg = () => {
  return (
    <div className="product__content text-center">
      <h6 className="product-name">
        <a className="product-item-link" href="product-details.html">
          {" "}
          Original Mobile Android Dual SIM Smart Phone G3{" "}
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
      <span className="new mb-5">$120.00</span>
      <span className="price-old mb-5">
        {" "}
        <del>$125.00</del>{" "}
      </span>
      <p>
        Typi non habent claritatem insitam, est usus legentis in iis qui facit
        eorum claritatem. Investigationes demonstraverunt lectores legere me
        lius quod
      </p>
      <ProductAddbtn type="show" disabled={true}></ProductAddbtn>
    </div>
  );
};

export {ProductContentlg};