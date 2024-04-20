const ProductContentlg = () => {
  return (
    <div class="product__content text-center">
      <h6 class="product-name">
        <a class="product-item-link" href="product-details.html">
          {" "}
          Original Mobile Android Dual SIM Smart Phone G3{" "}
        </a>
      </h6>
      <div class="rating">
        <ul>
          <li>
            <a href="#">
              <i class="far fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-star"></i>
            </a>
          </li>
        </ul>
      </div>
      <span class="new mb-5">$120.00</span>
      <span class="price-old mb-5">
        {" "}
        <del>$125.00</del>{" "}
      </span>
      <p>
        Typi non habent claritatem insitam, est usus legentis in iis qui facit
        eorum claritatem. Investigationes demonstraverunt lectores legere me
        lius quod
      </p>
      <div class="add-cart">
        <button class="t-y-btn t-y-btn-2">add to cart</button>
      </div>
    </div>
  );
};

export {ProductContentlg};