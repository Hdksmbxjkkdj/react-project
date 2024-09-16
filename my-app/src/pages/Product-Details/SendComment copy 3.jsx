import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Input, Textarea } from "../../Compont/Forms";
import { Notif } from "../../Utils";
// import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CustomerComment } from "./CustomerComment";
import { RateSubmit } from "./RateSubmit/RateSubmit";
import { TapContent } from "./TapContent";
// import { schema } from "@hookform/resolvers/yup/src/__tests__/__fixtures__/data.js";
// import { schema } from "@hookform/resolvers/computed-types/src/__tests__/__fixtures__/data.js";
// import { schema } from "@hookform/resolvers/arktype/src/__tests__/__fixtures__/data.js";
//test
export const SendComment = ({
  id,
  tab,
  productId,
  ProductComment,
  commentNumber,
  item,
  info,
  items,
}) => {
//
const run=()=>{
  let preview=window?.$('#run').css({opacity:"1"})
  setTimeout( MyMessage , 2000 );


  // preview.attr('src', window?.$(event.target).parent().find('img').attr('src'))
  // preview.fadeIn(300)
 }
 
 const MyMessage=()=>{
 window?.$("#run").css({opacity:"0"})

 }
 
//



  //new
  const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);
  let loginMessage = "ابتدا باید وارد سایت شوید";
  let eMessage = "error_message";
  let sMessage = "success_message";

  let today = new Date().toLocaleDateString("fa-IR");

  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const schema = yup.object().shape({
    comment: yup
      .string()
      .min(10, "تعداد کاراکتر ها نباید کمتر از 10 باشد")
      .required("لطفا نظر خود را بنویسید"),
    name: yup.string().required("لطفا نام خود را بنویسید"),
    email: yup
      .string()
      .email("فرمت ایمیل صحیح نیست")
      .required("این فیلد الزامی است"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [data, setData] = useState({});

  const [error, setError] = useState();
  let url = `http://localhost:313/product_comments`;

  // function t (event)
  // {
  //   event.preventDefault()
  //   if (user == null) {
  //     Notif("error", loginMessage);
  //     return;
  //   }
  //   // run()
  //   console.log('ppppp')
  //   handleSubmit(onFormSubmit)
  // }
  
  const onFormSubmit = async (data) => {
    
    await axios
      .post(url, {
        sender_name: user
          ? user?.username
            ? user?.username
            : user?.full_name
          : "",
        sender_email: user?.id,
        comment: data?.comment,
        id_product: id,
        date: today,
        id_customer: user?.id,
        rate: quality,
      })
      .then((response) => {
        let message = "پیام شما با موفقیت ارسال شد";
        if (response?.status == 201) {
          Notif("success", message);
          reset();
          return;
        } else {
          Notif("error", "خالی است");

          return;
        }
      })
      .catch((errors) => {});
  };
  return (
    <>
      <div className="col-xxl-12">
        <div className="tab-content" id="prodductDesTaContent">
          <TapContent items={items} tab={tab}></TapContent>
          <div
            className={
              tab === 2 ? "tab-pane fade" : "tab-pane fade show active"
            }
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            <div className="product__details-review">
              <div className="row">
                <CustomerComment
                  comment={info?.data}
                  id={id}
                  ProductComment={ProductComment}
                  commentNumber={commentNumber}
                ></CustomerComment>
                <div className="col-xxl-4 col-xl-4 col-lg-4" id="send">
                  <div className="review-form">
                    <h3>بررسی شما</h3>
                    <p>سیب های سلطنتی گالا ارگانیک تایید شده استرالیا</p>
                    {/* <form onSubmit={(event) => submit(event)}> */}
                    {/* <form onSubmit={handleSubmit(onFormSubmit)}> */}
                    {/* <form onSubmit={(event) => t(event)} onClick={() => run()}> */}
                    <form onSubmit={(event) => submit(event)}>

                      <div className="review-input-box mb-15 d-flex align-items-start">
                        <h4 className="review-input-title">امتیاز شما</h4>
                        <div className="review-input">
                          <div className="review-ratings mb-10">
                            <div className="review-ratings-single d-flex align-items-start">
                              <span>کیفیت</span>
                              {/* <Rank></Rank> */}
                              <RateSubmit
                                item={item}
                                type="lg"
                                setQuality={setQuality}
                                setPrice={setPrice}
                              ></RateSubmit>
                            </div>
                            {/* <div className="review-ratings-single d-flex align-items-center">
                              <span>قیمت</span>
                              <RateSubmit
                                item={item}
                                type="lg"
                                setPrice={setPrice}
                              ></RateSubmit>
                            </div> */}
                            {/* <div className="review-ratings-single d-flex align-items-center">
                                                    <span>ارزش</span>
                                                      <Rank></Rank>
                                                      <RateSubmit  sendValue={setValue}></RateSubmit>
                                                </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="review-input-box d-flex align-items-start">
                        <h4 className="review-input-title">
                          نام و نام خانوادگی
                        </h4>
                        <div className="review-input">
                          <input
                            readonly
                            id="sender_name"
                            name="sender_name"
                            // value={data?.sender_name}
                            value={user?.username}
                            // error={errors?.sender_name}
                            autoComplete="username"
                            onChange={(e) =>
                              setData({ ...data, sender_name: e.target.value })
                            }
                            {...register("name")}
                          />
                          {errors?.name && (
                            <p className="text-danger text-end mb-3">
                              {errors.name?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="review-input-box d-flex align-items-start">
                        <h4 className="review-input-title">ایمیل</h4>
                        <div className="review-input">
                          <input
                            readonly
                            value={user?.id}
                            type="email"
                            id="sender_email"
                            name="sender_email"
                            // value={data?.sender_email}
                            // error={errors?.sender_email}
                            autoComplete="useremail"
                            onChange={(e) =>
                              setData({ ...data, sender_email: e.target.value })
                            }
                            {...register("email")}
                          />
                          {errors?.email && (
                            <p className="text-danger text-end mb-3">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="review-input-box d-flex align-items-start">
                        <h4 className="review-input-title">نظر</h4>
                        <div className="review-input">
                          <textarea
                            id="comment"
                            // name="comment"
                            // value={data?.comment}
                            // error={errors?.comment}
                            placeholder="نظر خود را بنویسید..."
                            autoComplete="username"
                            type="text"
                            onChange={(e) =>
                              setData({ ...data, comment: e.target.value })
                            }
                            {...register("comment")}
                          />
                          {errors?.comment && (
                            <p className="text-danger text-end mb-3">
                              {errors.comment?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="review-sub-btn">
                        <button
                          type="submit"
                          className="t-y-btn t-y-btn-grey"
                         
                        >
                            <span>                          ارسال بررسی
                            </span>
                        <span className="spinner-border spinner-border-sm" id="run" style={{marginRight:" 0.5rem",opacity:"0"}} aria-hidden="true"></span>
                      
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
