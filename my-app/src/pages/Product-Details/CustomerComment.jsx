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
  commentNumber,
  getData,
  information,
  moreComment,
  t,
  count

}) => {
  // console.log( moreComment," moreComment")
  // console.log(ProductComment?.data?.length,"aaaaaaaa")
   // const [more, setMore] = useState(5);
  // const [start, setStart] = useState(0);
  // const [t, setT] = useState();
  // const moreComment = (event) => {
  //     axios
  //       .get(
  //         `http://localhost:313/product_comments?id_product=` +
  //           id +
  //           `&_sort=-id&_start=5&_end=${more + 5}`
  //       )
  //       .then((res) => {
  //         setMore(more + 5);
  //         setT(res?.data);
  //         window?.$("#p").css({ display: "inline" });
  //       });
  //   };
  // const [information, setinformation] = useState();
  // const [more, setMore] = useState(5);
  // const [start, setStart] = useState(0);
  // const [t, setT] = useState();

  // const moreComment = (event) => {
  //   axios
  //     .get(
  //       `http://localhost:313/product_comments?id_product=` +
  //         id +
  //         `&_sort=-id&_start=5&_end=${more + 5}`
  //     )
  //     .then((res) => {
  //       setMore(more + 5);
  //       setT(res);
  //       window?.$("#p").css({ display: "inline" });
  //     });
  // };

  return (
    <>
      <div className="col-xxl-6 col-xl-6 col-lg-6">
        <div className="review-wrapper">
          <h3 className="block-title">نظرات مشتریان</h3>
          {count == 0 ? (
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
            <div>
              {t?.map((item) => {

                return (
                  <>
                    {/* {" "} */}
                    <div className="review-item ">
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
                );
              })}
            </div>
          )}
          {/* <div style={{ display: "none" }} id="p">
            {t?.data?.map((item) => {
              return (
                <>
                  <p>{item?.length}</p>
                  <div className="review-item">
                    <h3 className="review-title">محصول فوق العاده</h3>
                    <div className="review-ratings mb-10">
                      <div className="review-ratings-single d-flex align-items-end">
                        <span>کیفیت</span>
                         
                        <Rate
                          stars={item.rate}
                          type="comment"
                          className="ms-3"
                        />
                      </div>
                    
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
              );
            })}
          </div> */}
          {count > 4 && (
            <div className="d-flex justify-content-end">
              <button
                onClick={(e) => {
                  moreComment(e);
                }}
                className="btn btn-outline-warning mt-5 btn-lg"
              >
                نظرات بیشتر
              </button>
            </div>
           )} 
        </div>
      </div>
    </>
  );
};
