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
  console.log(ProductComment?.data)

//   const [info, setInfo] = useState();
//   const [m, setM] = useState();

//    useEffect(() => {
//     axios.get(`http://localhost:313/product_comments?_start=1&_end=6`).then((res) => {
//       setInfo(res);
//   });
// }, []);
  const  less=(e)=>{
    (e.target()).parent().find("#show").removeAttr("style")
   
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
          ) : ( (ProductComment?.data?.length <= 5) ?<div id="show" style={{display:"none"}}>
             {ProductComment?.data?.map((item) => {

              return <> <div className="review-item">
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
                
              
              

                </>
                
             
            })}

          </div>
           :(<div >
            {ProductComment?.data?.map((item) => {

             return <> <div className="review-item bg-danger">
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
               
             
             

               </>
               
            
           })}
                       <button onClick={(e)=>less(e)} id="more">نظرات  بیشتر</button>

         </div>))}

           

          

        </div>
        {/* <button onClick={()=>less()} id="less" type="less"></button> */}
        <button  id="more" className="bg-warning">نظرات بیشتر</button>
      </div>
    

    </>
  );
};
