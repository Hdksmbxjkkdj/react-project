import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const Rate = ({items}) =>{
    return<>                            
         {items.map((item,i)=>{
                return<div class="product__widget-item">
                                        <h3 class="product__widget-title mb-25">Top Rate</h3>
                                         <div class="product__sm">
                                         <ul>
                                        <li class="product__sm-item d-flex align-items-center">
                                            <div class="product__sm-thumb mr-20">
                                                <a href="product-details.html">
                                                        <img src={item.img} alt=""/>
                                                    </a>
                                            </div>
                                            <div class="product__sm-content">
                                                <h3 class="product__sm-title">
                                                    <a href="#">Organic Greenhouse Tomatoes New 18kg</a>
                                                </h3>
                                                <div class="rating">
                                                    <ul>
                                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                                        <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                                    </ul>
                                                </div>
                                                <div class="product__sm-price">
                                                    <span class="price">{item.price}</span>
                                                </div>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
         })}
           
    </>
}