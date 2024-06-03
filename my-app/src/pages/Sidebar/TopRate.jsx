// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
export const Rate = ({items}) =>{
    return<>
           
                                    
         {items.map((item,i)=>{
            return <li class="product__sm-item d-flex align-items-center">
                        <div class="product__sm-thumb mr-20">
                            <a href="product-details.html">
                                    <img src={item.img} alt=""/>
                                </a>
                        </div>
                        <div class="product__sm-content">
                            <h3 class="product__sm-title">
                                <a href="#">{item.title}</a>
                            </h3>
                            <div class="rating">
                                {/* <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                </ul> */}
                            </div>
                            <div class="product__sm-price">
                                <span class="price">{item.price}</span>
                            </div>
                        </div>
                    </li>
            })
        }
    </>
}