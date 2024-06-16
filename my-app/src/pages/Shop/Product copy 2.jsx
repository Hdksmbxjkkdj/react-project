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
                                    <img src={Config.shop+""+item.pic} alt="product"/>
                                    
                                </a>
                                <div className="product__action p-absolute">
                                </div>
                            </div>
                            <div className="product__content text-center">
                                <h6 className="product-name">
                                    <a className="product-item-link" href="product-details.html">{item.title}</a>
                                </h6>
                                <div className="rating">
                                    <ul>
                                  
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