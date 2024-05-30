
export const Product = ()=>{
    console.log('123456')
    return<>
         <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                                                     <div class="product__item white-bg mb-30">
                                                         <div class="product__thumb p-relative">
                                                             <a href="product-details.html" class="w-img">
                                                                 <img src="assets/img/shop/product/product-1.jpg" alt="product"/>
                                                                 <img class="second-img" src="" alt="product"/>
                                                             </a>
                                                             <div class="product__action p-absolute">
                                                                 <ul>
                                                                     <li><a href="#" title="Add to Wishlist"><i class="fal fa-heart"></i></a></li>
                                                                     <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i class="fal fa-search"></i></a></li>
                                                                     <li><a href="#" title="Compare"><i class="far fa-sliders-h"></i></a></li>
                                                                 </ul>
                                                             </div>
                                                         </div>
                                                         <div class="product__content text-center">
                                                             <h6 class="product-name">
                                                                 <a class="product-item-link" href="product-details.html">{props.title}</a>
                                                             </h6>
                                                             <div class="rating">
                                                                 <ul>
                                                                     <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                     <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                     <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                     <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                     <li><a href="#"><i class="far fa-star"></i></a></li>
                                                                 </ul>
                                                             </div>
                                                             <span class="price">{props.price}</span>
                                                         </div>
                                                         <div class="product__add-btn">
                                                             <button type="button">Add to Cart</button>
                                                         </div>
                                                     </div>
         </div>
    </>
         

    //     <div className="">
    //         <img src={props.img} alt=""/>
    //         <h2>{props.title}</h2>
    //         <p>{props.price}</p>
    //         <button>Add</button>

    //     </div>
    // alert('h')
    // console.log('1234567898')
}