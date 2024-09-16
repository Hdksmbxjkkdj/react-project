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
  commentNumber
}) => {
const [infor, setInfor] = useState();
  const [more, setMore] = useState();
  const [start, setStart] = useState(0);


   useEffect(() => {
    axios.get(`http://localhost:313/product_comments?id_product=`+ id+`&_start=${start}&_end=${start + 5}`).then((res) => {
      setInfor(res);})



}, []);
const moreComment =(event)=>{
         setStart(start+5)
 console.log(start)

  // axios.get(`http://localhost:313/product_comments?id_product=`+ id+`&_start=4&_end=${commentNumber}`).then((res) => {
      axios.get(`http://localhost:313/product_comments?id_product=`+ id+`&_start=4&_end=${commentNumber}`).then((res) => {

          setMore(res);
          window?.$("#p").css({display:"inline"})
          event.target.remove()
      });
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
          <div >
             {infor?.data?.map((item) => {
              
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
                {/* <button onClick={()=>less()} id="more" className="bg-danger">نظرات  بیشتر</button> */}

              </div>
                

                </>
                
             
            })}

          </div>
        )}
               <div style={{display:"none"}} id="p">
                      {more?.data?.map((item) => {
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
                {/* <button onClick={()=>less()} id="more" className="bg-danger">نظرات  بیشتر</button> */}

              </div>
                

                </>
                
             
            })}
            </div>
         <div className="d-flex justify-content-end">
              <button onClick={(e)=>{moreComment(e)}} className="btn btn-outline-warning mt-5 btn-lg">همه نظرات</button>
  
              </div>
           
           
               

        </div>
      </div>
    

    </>
  );
};
