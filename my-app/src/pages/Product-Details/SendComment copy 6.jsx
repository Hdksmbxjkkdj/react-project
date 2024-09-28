import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Input, Textarea } from "../../Compont/Forms";
import { Notif } from "../../Utils";
// import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CustomerComment } from "./CustomerComment";
import { RateSubmit } from "./RateSubmit/RateSubmit";
import { TapContent } from "./TapContent";
import { ButtonLoader } from "../Components/ButtonLoader";
import { cleanData } from "jquery";
// import { schema } from "@hookform/resolvers/yup/src/__tests__/__fixtures__/data.js";
// import { schema } from "@hookform/resolvers/computed-types/src/__tests__/__fixtures__/data.js";
// import { schema } from "@hookform/resolvers/arktype/src/__tests__/__fixtures__/data.js";
//test
export const SendComment = ({
  id,
  tab,
  productId,
  ProductComment,
  setProductComment,
  commentNumber,
  lengthComment,
  item,
  info,
  setInfo,
  items,
}) => {
    const [information, setInformation] = useState();
    // const [start, setStart] = useState(0);
    const [more, setMore] = useState(5);
    const [t, setT] = useState();

  const send_btn = document.querySelector(".send-btn");
  const[load,setLoad]=useState(false)
  //
 
  //  let limit=5
  useEffect(() => {
    getData();
    axios
    .get(
      `http://localhost:313/product_comments?id_product=${id}&_sort=-id&_page=1&_limit=${more}`
    )
    .then((res) => {
      // setMore(more + 5);
      setT(res?.data);
      // window?.$("#p").css({ display: "inline" });
      // console.log(t,"l")
    });
  }, [more]);
  const getData = async () => {
//   // let params = new URLSearchParams(window.location.search);

//   axios
//     .get(
//       `http://localhost:313/product_comments?id_product=` +
//         id +
//         // `&_sort=-id&_start=${start}&_end=${start + 5}&${params}`
//                 `&_sort=-id&_start=${start}&_limit=${limit}`

//     )
//     .then((res) => {
//       setInformation(res?.data);
    // });
     
  }
const moreComment = (event) => {
        setMore(more + 5);

// };
  //
  //
  }
  //new
  // const[ids,setIds]=useState(commentNumber ? commentNumber : 'no comment!')
  const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);
  const[resetStar,setresetStar]=useState(false)
  let loginMessage = "ابتدا باید وارد سایت شوید";
  let eMessage = "error_message";
  let sMessage = "success_message";
  let today = new Date().toLocaleDateString("fa-IR");

  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  // const u =()=>{
  //   setIds(ids+1)
  // }
  // console.log(ids,"button")
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

  // function t (event){
    
  //   event.target.preventDefault()
  //   handleSubmit(onFormSubmit)
  // }
  const onFormSubmit = async (data) => {
   
    // setInfo(info?.data?.length+1)
    setLoad(true)
    send_btn.classList.add("loading");
    // setIds(ids+1)
    // setIds(ids+1)
    // getData()
    // console.log(commentNumber + 1);
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
        id:lengthComment + 1
      })
      .then((response) => {
        setLoad(false)
        // console.log(response.data,"response")
        send_btn.classList.remove("loading");
        let message = "پیام شما با موفقیت ارسال شد";

        // setProductComment([...ProductComment?.data?.length+response?.data?.length])
        // ProductComment?.data?.length+1
       
        // console.log(ProductComment,"ProductCommentProductComment")

      

        // setProductComment([response?.data?.length])
        // setInfo(response.data.length)
        if (response?.status == 201) {
         
          //  setProductComment((ProductComment.data.length)+1)
          console.log(ProductComment?.data?.length,"ol")
          // setInformation([...information,response.data])
        
          setT([...t,response.data])
          setProductComment(ProductComment?.data?.length + 1)
          Notif("success", message);
         
          // setIds(ids+1)
          reset();
          return;
        } else {
          Notif("error", "خالی است");

          return;
        }
      })
      .catch((errors) => {});

  };

  // const run=()=>{
  //   alert(load)

  //   if(load)
  //     {

  //       let preview=window?.$('#run').css({opacity:"1"})
  //     }
  //     else
  //     {
  //       setTimeout( MyMessage , 2000 );
  //     }
  //  }
   
  //  const MyMessage=()=>{
  //  window?.$("#run").css({opacity:"0"})
  
  //  }
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
                getData={getData}
                  information={information}
                  comment={info?.data}
                  id={id}
                  ProductComment={ProductComment}
                  commentNumber={commentNumber}
                  moreComment={(event)=>moreComment(event)}
                  t={t}
                ></CustomerComment>
                <div className="col-xxl-4 col-xl-4 col-lg-4" id="send">
                  <div className="review-form">
                    <h3>بررسی شما</h3>
                    <p>سیب های سلطنتی گالا ارگانیک تایید شده استرالیا</p>
                    {/* <form onSubmit={(event) => submit(event)}> */}
                    {/* <form onSubmit={handleSubmit(onFormSubmit)}> */}
                    <form onSubmit={handleSubmit(onFormSubmit)} >
                      <div className="review-input-box mb-15 d-flex align-items-start">
                        <h4 className="review-input-title">امتیاز شما</h4>
                        <div className="review-input">
                          <div className="review-ratings mb-10">
                            <div className="review-ratings-single d-flex align-items-start">
                              <span>کیفیت</span>
                              {/* <Rank></Rank> */}
                              {/* {resetStar&&   */}
                              <RateSubmit
                                item={item}
                                type="lg"
                                setQuality={setQuality}
                                setPrice={setPrice}
                                resetStar={resetStar}
                              ></RateSubmit>
                              {/* } */}
                            
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
                        {/* {(load)?<ButtonLoader bg={"#000"}>در حال ارسال</ButtonLoader>:<button
                          type="submit"
                          className="t-y-btn t-y-btn-grey"
                          // onClick={(event) => submit(event)}
                        >
                          <span>                          ارسال بررسی
                            </span>
                        <span className="spinner-border spinner-border-sm" id="run" style={{marginRight:" 0.5rem",opacity:"0"}} aria-hidden="true"></span>
                        </button>} */}
                        <button className="send-btn" type="submit">
                    <i className="fa fa-paper-plane"></i>
                    <span className="text">ارسال نظر</span>
                    <span className="loading-animate"></span>
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
