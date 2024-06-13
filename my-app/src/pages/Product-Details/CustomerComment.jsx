import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const  CustomerComment=({comment,id })=>{
    return<>
            <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="review-wrapper">
                    <h3 class="block-title">نظرات مشتریان</h3>
                        {comment?.map((g)=>{
                        return <>
                        <div class="review-item">
                            <h3 class="review-title">محصول فوق العاده</h3>
                            <div class="review-ratings mb-10">
                                <div class="review-ratings-single d-flex align-items-center">
                                    <span>کیفیت</span>
                                    <ul>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar}/></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>قیمت</span>
                                        <ul>
                                             <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                             <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                    <span>ارزش</span>
                                                                                                        
                                    <ul>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                    </ul>
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
                                // <div class="review-date">
                                //     <span>نوشته شده در</span>
                                //     <span>{g?.date}</span>
                                // </div>
                            </div>
                        </div>
                    </>
                                    
                }
            )}
            </div>
             </div>

    </>
}