export const ProducDetailsImg = () =>{
    return<>
    <div className="col-xxl-5 col-xl-5 col-lg-5">
    <div className="product__details-nav d-sm-flex align-items-start">
        <ul className="nav nav-tabs flex-sm-column justify-content-between" id="productThumbTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="thumbOne-tab" data-bs-toggle="tab" data-bs-target="#thumbOne" type="button" role="tab" aria-controls="thumbOne" aria-selected="true">
                      <img src="assets/img/shop/product/details/product-nav-1.jpg" alt=""/>
                  </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="thumbTwo-tab" data-bs-toggle="tab" data-bs-target="#thumbTwo" type="button" role="tab" aria-controls="thumbTwo" aria-selected="false">
                    <img src="assets/img/shop/product/details/product-nav-2.jpg" alt=""/>
                  </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="thumbThree-tab" data-bs-toggle="tab" data-bs-target="#thumbThree" type="button" role="tab" aria-controls="thumbThree" aria-selected="false">
                    <img src="assets/img/shop/product/details/product-nav-3.jpg" alt="" />
                  </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="thumbFour-tab" data-bs-toggle="tab" data-bs-target="#thumbFour" type="button" role="tab" aria-controls="thumbFour" aria-selected="false">
                    <img src="assets/img/shop/product/details/product-nav-4.jpg" alt="" />
                  </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="thumbFive-tab" data-bs-toggle="tab" data-bs-target="#thumbFive" type="button" role="tab" aria-controls="thumbFive" aria-selected="false">
                    <img src="assets/img/shop/product/details/product-nav-5.jpg" alt="" />
                  </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="thumbSix-tab" data-bs-toggle="tab" data-bs-target="#thumbSix" type="button" role="tab" aria-controls="thumbSix" aria-selected="false">
                    <img src="assets/img/shop/product/details/product-nav-6.jpg" alt="" />
                  </button>
            </li>
        </ul>
        <div className="product__details-thumb">
            <div className="tab-content" id="productThumbContent">
                <div className="tab-pane fade show active" id="thumbOne" role="tabpanel" aria-labelledby="thumbOne-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-1.jpg" alt=""/>
                    </div>
                </div>
                <div className="tab-pane fade" id="thumbTwo" role="tabpanel" aria-labelledby="thumbTwo-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-2.jpg" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="thumbThree" role="tabpanel" aria-labelledby="thumbThree-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-3.jpg" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="thumbFour" role="tabpanel" aria-labelledby="thumbFour-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-4.jpg" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="thumbFive" role="tabpanel" aria-labelledby="thumbFive-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-5.jpg" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="thumbSix" role="tabpanel" aria-labelledby="thumbSix-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
}