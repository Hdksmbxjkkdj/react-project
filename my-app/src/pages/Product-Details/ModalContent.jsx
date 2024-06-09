export const ModalContent = () =>{
    return<>
         <div className="modal-content">
                    <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
                        </div>
                        <div className="product__modal-inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product__modal-box">
                                        <div className="tab-content" id="modalTabContent">
                                            <div className="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="assets/img/shop/product/quick-view/quick-view-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="assets/img/shop/product/quick-view/quick-view-2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="assets/img/shop/product/quick-view/quick-view-3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                                <div className="product__modal-img w-img">
                                                    <img src="assets/img/shop/product/quick-view/quick-view-4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="nav nav-tabs" id="modalTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab" data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                                                    <img src="assets/img/shop/product/quick-view/nav/quick-nav-1.jpg" alt="" />
                                              </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                                                <img src="assets/img/shop/product/quick-view/nav/quick-nav-2.jpg" alt="" />
                                              </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3" aria-selected="false">
                                                <img src="assets/img/shop/product/quick-view/nav/quick-nav-3.jpg" alt="" />
                                              </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4" aria-selected="false">
                                                <img src="assets/img/shop/product/quick-view/nav/quick-nav-4.jpg" alt="" />
                                              </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product__modal-content">
                                        <h4><a href="product-details.html">Samsung C49J89: £875, Debenhams Plus</a></h4>
                                        <div className="product__modal-des mb-40">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  </p>
                                        </div>
                                        <div className="product__stock">
                                            <span>دسترسی :</span>
                                            <span>در انبار</span>
                                        </div>
                                        <div className="product__stock sku mb-30">
                                            <span>SKU:</span>
                                            <span>Samsung C49J89: £875, Debenhams Plus</span>
                                        </div>
                                        <div className="product__review d-sm-flex">
                                            <div className="rating rating__shop mb-15 mr-35">
                                                <ul>
                                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__add-review mb-15">
                                                <span><a href="#">1 نظر</a></span>
                                                <span><a href="#">افزودن نظر</a></span>
                                            </div>
                                        </div>
                                        <div className="product__price">
                                            <span>$560.00</span>
                                        </div>
                                        <div className="product__modal-form mb-30">
                                            <form action="#">
                                                <div className="pro-quan-area d-lg-flex align-items-center">
                                                    <div className="product-quantity mr-20 mb-25">
                                                        <div className="cart-plus-minus p-relative"><input type="text" value="1" /></div>
                                                    </div>
                                                    <div className="pro-cart-btn mb-25">
                                                        <button className="t-y-btn" type="submit">به سبد خرید اضافه کنید</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="product__modal-links">
                                            <ul>
                                                <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
                                                <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
                                                <li><a href="#" title="Print"><i className="fal fa-print"></i></a></li>
                                                <li><a href="#" title="Print"><i className="fal fa-share-alt"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
}