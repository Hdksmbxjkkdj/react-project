import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Rank } from "../Components/Rank";
import { useEffect, useState } from "react";
import axios from "axios";
import {ProductList} from "../Shop/Product"
export const  CustomerComment=({comment,id,productId })=>{
   //comments
//    let url=`http://localhost:313/product_comments?id=`+id+`&_sort=date`
let url=`http://localhost:313/product_comments?id=`+id+`&_sort=-date`

   const [ProductComment, setProductComment] = useState();
          useEffect(() => {

          axios.get(url).then((res) => {

                setProductComment(res);
        });
            }, []);
       //comments
 
       

    return<>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="review-wrapper">
                    <h3 className="block-title">نظرات مشتریان</h3>
                        {ProductComment?.data?.map((item)=>{
                           
                        return <>
                        <div className="review-item">
                            <h3 className="review-title">محصول فوق العاده</h3>
                            <div className="review-ratings mb-10">
                                <div className="review-ratings-single d-flex align-items-center">
                                    <span>کیفیت</span>
                                    <Rank></Rank>
                                </div>
                                    <div className="review-ratings-single d-flex align-items-center">
                                        <span>قیمت</span>
                                      <Rank></Rank>
                                    </div>
                                    <div className="review-ratings-single d-flex align-items-center">
                                    <span>ارزش</span>
                                   
                                    <Rank></Rank>
                                     </div>
                                </div>
                                <div className="review-text">
                                <p>{item?.comment}</p>
                                </div>
                                <div className="review-meta">
                                <div className="review-author">
                                    <span>بررسی توسط</span>
                                    <span>{item?.sender_name}</span>
                                </div>
                                <div className="review-date">
                                 <span>نوشته شده در</span>
                                   <span>{item?.date}</span>
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