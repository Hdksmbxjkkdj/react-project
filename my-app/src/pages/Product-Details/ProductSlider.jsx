// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// export const ProductSlider = () =>{
//     return<>
//            <div className="col-xxl-12">
//                         <div className="product__slider owl-carousel">
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-1.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-2.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html"> ترازوی آشپزخانه فوق نازک شیشه ای با کیفیت بالا</a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$500.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-3.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$560.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-5.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-6.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus  </a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$450.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-7.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html">سیستم دوربین امنیتی خانه چشمک زدن 01   </a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$720.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-9.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-10.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html"> تیشیر آبی مردانه (X, M, XL, XXL)   </a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$720.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-11.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-12.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html"> Samsung A20 Pro Ultra CPU 4/64 GB  </a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$720.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                             <div className="product__item white-bg mb-30">
//                                 <div className="product__thumb p-relative">
//                                     <a href="product-details.html" className="w-img">
//                                             <img src="assets/img/shop/product/product-7.jpg" alt="product" />
//                                             <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
//                                         </a>
//                                     <div className="product__action p-absolute">
//                                         <ul>
//                                             <li><a href="#" title="افزودن به علاقه مندی ها"><i className="fal fa-heart"></i></a></li>
//                                             <li><a href="#" title="نمایش سریع" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search"></i></a></li>
//                                             <li><a href="#"  title="مقایسه کنید"><i className="far fa-sliders-h"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="product__content text-center">
//                                     <h6 className="product-name">
//                                         <a className="product-item-link" href="product-details.html"> سیستم دوربین امنیتی خانه چشمک زدن 01   </a>
//                                     </h6>
//                                     <div className="rating">
//                                         <ul>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                             <li><a href="#"><i className="far fa-star"></i></a></li>
//                                         </ul>
//                                     </div>
//                                     <span className="price">$720.00</span>
//                                 </div>
//                                 <div className="product__add-btn">
//                                     <button type="button">به سبد خرید اضافه کنید</button>
//                                 </div>
//                             </div>
//                         </div>
//             </div>
//     </>
// }