import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faComments,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Rank } from "../Components/Rank";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductList } from "../Shop/Product";
import { Rate } from "./RateSubmit/Rate";
import { RateSubmit } from "./RateSubmit/RateSubmit";
export const CustomerComment = ({
  comment,
  id,
  productId,
  info,
  ProductComment,
}) => {
  const readMore =()=>{
    let dots =window?.$("#dots")
    let moreText =window?.$("#more")
    let btnText =window?.$("#myBtn")
    if (dots.style.display === "none") {
      dots.css.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.css.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
    // if (dots.style.display === "none") {
    //   dots.style.display = "inline";
    //   btnText.innerHTML = "Read more"; 
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Read less"; 
    //   moreText.style.display = "inline";
    // }
  }
  return (
    <>
      <div className="col-xxl-6 col-xl-6 col-lg-6">
        
        <div className="review-wrapper">
          <h3 className="block-title">نظرات مشتریان</h3>
          {ProductComment?.data?.length == 0 ? (
            <div className="text-center justify-content-center p-3 Larger rounded mt-5">
              <FontAwesomeIcon
                icon={faComments}
                className="Larger fs-3"
              ></FontAwesomeIcon>

              <h5 className="d-flex text-center justify-content-center ">
                اولین نظر را شما بنویسید
              </h5>
            </div>
          ) : (
            ProductComment?.data?.map((item) => {
              return (
                <>
                {
                  (ProductComment?.data?.length )==5?
                 (<div className="review-item">
                  <h3 className="review-title">محصول فوق العاده</h3>
                  <div className="review-ratings mb-10">
                    <div className="review-ratings-single d-flex align-items-end">
                      <span>کیفیت</span>
                      {/* <Rate></Rate>
                       */}
                      <Rate
                        stars={item.rate}
                        type="comment"
                        className="ms-3"
                      />
                      
                    </div>
                    {/* <div className="review-ratings-single d-flex align-items-center">
                                      <span>قیمت</span>
                                    <Rank></Rank>
                                  </div> */}
                    {/* <div className="review-ratings-single d-flex align-items-center">
                                  <span>ارزش</span>
                                 
                                  <Rank></Rank>
                                   </div> */}
                  </div>
                  <div className="review-text">
                    <p>{item?.comment}</p>
                  </div>
                  <div className="review-meta">
                    <div className="review-author">
                      <span>بررسی توسط </span>
                      <span>{item?.sender_name}</span>
                    </div>
                    <div className="review-date">
                      <span>نوشته شده در</span>
                      <span>{item?.date}</span>
                    </div>
                  </div>
                  <span id="dost ">....</span>

                </div>
              ) :(
              <div className="review-item">
                  <h3 className="review-title">محصول فوق العاده</h3>
                  <div className="review-ratings mb-10" id="more">
                    <div className="review-ratings-single d-flex align-items-end">
                      <span>کیفیت</span>
                      {/* <Rate></Rate>
                       */}
                      <Rate
                        stars={item.rate}
                        type="comment"
                        className="ms-3"
                      />
                      
                    </div>
                    {/* <div className="review-ratings-single d-flex align-items-center">
                                      <span>قیمت</span>
                                    <Rank></Rank>
                                  </div> */}
                    {/* <div className="review-ratings-single d-flex align-items-center">
                                  <span>ارزش</span>
                                 
                                  <Rank></Rank>
                                   </div> */}
                  </div>
                  <div className="review-text">
                    <p>{item?.comment}</p>
                  </div>
                  <div className="review-meta">
                    <div className="review-author">
                      <span>بررسی توسط </span>
                      <span>{item?.sender_name}</span>
                    </div>
                    <div className="review-date">
                      <span>نوشته شده در</span>
                      <span>{item?.date}</span>
                    </div>
                  </div>

                </div>

                
                )
                }

                </>
                
              );
            })
          )}
                                                      <button onClick={()=>readMore()} id="myBtn" className="bg-warning">بیشتر نظرات</button>

        </div>
      </div>
    </>
  );
};
