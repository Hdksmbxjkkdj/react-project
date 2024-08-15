import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Rank } from "../Components/Rank";
import { useEffect, useState } from "react";
import axios from "axios";
import {ProductList} from "../Shop/Product"
export const  CustomerComment=({comment,id,productId })=>{
   //comments
   let url=`http://localhost:313/product_comments?product_id=`+ productId
   const [ProductComment, setProductComment] = useState();
 
          axios.get(url).then((res) => {

                setProductComment(res);
        });
       //comments

 

    return<>
            <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="review-wrapper">
                    <h3 class="block-title">نظرات مشتریان</h3>
                        {ProductComment?.data?.map((g)=>{
                        return <>
                        <div class="review-item">
                            <h3 class="review-title">محصول فوق العاده</h3>
                            <div class="review-ratings mb-10">
                                <div class="review-ratings-single d-flex align-items-center">
                                    <span>کیفیت</span>
                                    <Rank></Rank>
                                </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>قیمت</span>
                                      <Rank></Rank>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                    <span>ارزش</span>
                                   
                                    <Rank></Rank>
                                     </div>
                                </div>
                                <div class="review-text">
                                <p>{g?.comment}</p>
                                </div>
                                <div class="review-meta">
                                <div class="review-author">
                                    <span>بررسی توسط</span>
                                    <span>{g?.sender_name}</span>
                                </div>
                                <div class="review-date">
                                 <span>نوشته شده در</span>
                                   <span>{g?.date}</span>
                                </div>
                            </div>
                        </div>
                    </>
                                    
                }
            )}
            </div>
             </div>

    </>
}