// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Config } from "../../Utils"

// import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
export const Product = ({items})=>{
   
    return<>
        {items.map((item, i)=>{
            return  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                        <div className="product__item white-bg mb-30">
                            <div className="product__thumb p-relative">
                                <a href={"/product/" + item.id} className="w-img">
                                    {/* <img src={item.img} alt="product"/> */}
                                    <img src={Config.shop+""+item.pic} alt="product"/>
                                    
                                </a>
                                <div className="product__action p-absolute">
                                    {/* <ul>
                                        <li><a href="#" title="Add to Wishlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li>
                                        <li><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a></li>
                                        <li><a href="#" title="Compare"><FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="product__content text-center">
                                <h6 className="product-name">
                                    <a className="product-item-link" href="product-details.html">{item.title}</a>
                                </h6>
                                <div className="rating">
                                    <ul>
                                        {/* <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li> */}
                                        {/* <li><a href="#"><i className="far fa-star"></i></a></li>
                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                        <li><a href="#"><i className="far fa-star"></i></a></li> */}
                                    </ul>
                                </div>
                                <span className="price">${item.price}</span>
                            </div>
                            <div className="product__add-btn">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>
                    </div>

        }
        )}
        </>
            }