import { event } from "jquery";
import { Config } from "../../Utils";
import { useEffect, useState } from "react";
import {ShowProduct} from '../../Compont/ShowProduct'
import { faSearch, faSearchPlus, faSlidersH, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ProducDetailsImg = ({item,picturs}) =>{
      //showproduct
      const[showproduct,setShowproduct]=useState({show: false, data: null, tittle: null})
      //showproduct
    const handleImg = (event) => {
        let preview = window?.$('.product__details-thumb img')
        preview.fadeOut(100)
        
        preview.attr('src', window?.$(event.target).parent().find('img').attr('src'))
        preview.fadeIn(300)
    }

   
    return<>
   
    <div className="col-xxl-5 col-xl-5 col-lg-5 test">
    <div className="product__details-nav d-sm-flex align-items-start">
        <ul className="nav nav-tabs flex-sm-column justify-content-between" id="productThumbTab" role="tablist">
        {picturs?.map((g)=>{
                return <li className="nav-item" role="presentation">
                    <button onClick={(event) => handleImg(event)} className="nav-link active" id="thumbOne-tab" data-bs-toggle="tab" data-bs-target="#thumbOne" type="button" role="tab" aria-controls="thumbOne" aria-selected="true">
                        <img src={Config.shop+ "" + g?.name} alt=""/>  
                    </button>
                </li>
            }
        )}
           
        </ul>
        <div className="product__details-thumb">
            <div className="tab-content" id="productThumbContent">
                <div className="tab-pane fade show active" id="thumbOne" role="tabpanel" aria-labelledby="thumbOne-tab">
                    <div className="product__details-nav-thumb">
                        {/* <img src="assets/img/shop/product/details/big/product-nav-big-1.jpg" alt=""/> */}
                        <img src={Config.shop+ "" +item} alt=""  onClick={() => setShowproduct({show: true})}/>  
                        {showproduct.show && <ShowProduct setShowproduct={setShowproduct} item={item}>
          {/* <ModalBody data={modalInfo.data} /> */}
                       </ShowProduct>}
                    
                       <FontAwesomeIcon icon={faSearchPlus} style={{fontSize:"25px"}} className="me-5"  onClick={() => setShowproduct({show: true})}></FontAwesomeIcon>
                      
                    </div>
                   
                </div>
                <div className="tab-pane fade" id="thumbTwo" role="tabpanel" aria-labelledby="thumbTwo-tab">
                    <div className="product__details-nav-thumb">
                        <img src="assets/img/shop/product/details/big/product-nav-big-2.jpg" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="thumbThree" role="tabpanel" aria-labelledby="thumbThree-tab">
                    <div className="product__details-nav-thumb">
                        <img src={Config.shop+ "" +item} alt="" />
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