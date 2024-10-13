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
  moreComment,
  t,
  count

}) => {


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
            <div className="">
              <div className="d-flex justify-content-center position-relative">
                <div className="load loading"></div>
              </div>
              {t?.map((item) => {

                return (
                  <>

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
            </div>
          )}

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
