import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
export const Product = ({items})=>{
    console.log('items');
    console.log(items);
    return<>
        {items.map((item, i)=>{
            return  <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                        <div class="product__item white-bg mb-30">
                            <div class="product__thumb p-relative">
                                <a href="product-details.html" class="w-img">
                                    <img src={item.img} alt="product"/>
                                    
                                </a>
                                <div class="product__action p-absolute">
                                    <ul>
                                        <li><a href="#" title="Add to Wishlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li>
                                        <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a></li>
                                        <li><a href="#" title="Compare"><FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="product__content text-center">
                                <h6 class="product-name">
                                    <a class="product-item-link" href="product-details.html">{item.title}</a>
                                </h6>
                                <div class="rating">
                                    <ul>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        {/* <li><a href="#"><i class="far fa-star"></i></a></li>
                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                        <li><a href="#"><i class="far fa-star"></i></a></li>
                                        <li><a href="#"><i class="far fa-star"></i></a></li> */}
                                    </ul>
                                </div>
                                <span class="price">${item.price}</span>
                            </div>
                            <div class="product__add-btn">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>
                    </div>

        }
        )}
        </>
                    

                //     <div className="">
                //         <img src={item.img} alt=""/>
                //         <h2>{item.title}</h2>
                //         <p>{item.price}</p>
                //         <button>Add</button>

                //     </div>
                // alert('h')
                // console.log('1234567898')
            }