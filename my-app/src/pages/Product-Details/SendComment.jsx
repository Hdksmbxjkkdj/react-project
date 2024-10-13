
import { Notif } from "../../Utils";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CustomerComment } from "./CustomerComment";
import { RateSubmit } from "./RateSubmit/RateSubmit";
import { TapContent } from "./TapContent";

//test
export const SendComment = ({
  id,
  tab,
  setLengthComment,
  lengthComment,
  item,
  items,
  setCount,
  count
}) => {
  const[Rate,SetRate]=useState()
  const[Hover,SetHover]=useState()
  const [preScore, setPreScore] = useState(0)
  const [information, setInformation] = useState();
    const [more, setMore] = useState(5);
    const [t, setT] = useState();

  const send_btn = document.querySelector(".send-btn");
  const[load,setLoad]=useState(false)
  //

  //  let limit=5
  useEffect(() => {
   
    axios
    .get(
      `http://localhost:313/product_comments?id_product=${id}&_sort=-id&_page=1&_limit=${more}`
    )
    .then((res) => {
      // setMore(more + 5);
      setT(res?.data);
     
      window?.$("#p").css({ display: "inline" });
    });
  }, [more]);
  const getData = async () => {

     
  }
const moreComment = (event) => {
        setMore(more + 5);


  }
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
//star
  const ClassN =(index)=>{
    let TempClass
  
    index < (Hover || Rate) ? TempClass= "actives" : TempClass=""
    return TempClass
}
const [loadingg,setLoadingg]=useState(false)

//star
//loading


//loading
  const onFormSubmit = async (data,ClassN) => {
    console.log(user,"llllllllllllllll")
    if (user==null){
      Notif("error", "ابتدا وارد سایت شوید")
      return
    }
       
  setLengthComment(lengthComment+1)
  window?.$(".loading").css({display:"inline-block"})
    
    setLoad(true)
   
    send_btn.classList.add("loading");
     
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
        id:lengthComment
      })
      .then((response) => {
        setLoad(false)
   
        send_btn.classList.remove("loading");
        
        let message = "پیام شما با موفقیت ارسال شد";
        if (response?.status == 201) {
           setCount(count+1)
          setT([response.data, ...t])
           SetHover(0)//حذف ستاره های امتیاز 
           SetRate(0)//حذف امتیاز ستاره ها
           setPreScore(0)
          // setQuality()
          window?.$(".loading").css({display:"none"})
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
                // getData={getData}
                  // information={information}
                  // comment={info?.data}
                  // id={id}
                  // ProductComment={ProductComment}
                  // commentNumber={commentNumber}
                  moreComment={(event)=>moreComment(event)}
                  t={t}
                  count={count}
                ></CustomerComment>
                <div className="col-xxl-4 col-xl-4 col-lg-4" id="send">
                  <div className="review-form">
                    <h3>بررسی شما</h3>
                    <p>{items?.data?.text}</p>
                  
                    <form onSubmit={handleSubmit(onFormSubmit)} >
                      <div className="review-input-box mb-15 d-flex align-items-start">
                        <h4 className="review-input-title">امتیاز شما</h4>
                        <div className="review-input">
                          <div className="review-ratings mb-10">
                            <div className="review-ratings-single d-flex align-items-start">
                              <span>کیفیت</span>
                            
                              <RateSubmit
                                item={item}
                                type="lg"
                                 Rate={Rate}
                                SetRate={SetRate}
                                quality={quality}
                                setQuality={setQuality}
                                setPrice={setPrice}
                                setPreScore={setPreScore}
                                preScore={preScore}
                                ClassN={(index)=>ClassN(index)}
                                Hover={Hover}
                                SetHover={SetHover}
                              
                              ></RateSubmit>
                              {/* } */}
                            
                            </div>
                          
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
                            value={user?.username}
                            autoComplete="username"
                            onChange={(e) =>
                              setData({ ...data, sender_name: e.target.value })
                            }
                            {...register("name")}
                          />
                          {errors?.name && (
                            <p className="text-danger text-end mb-5">
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
                           
                            autoComplete="useremail"
                            onChange={(e) =>
                              setData({ ...data, sender_email: e.target.value })
                            }
                            {...register("email")}
                          />
                          {errors?.email && (
                            <p className="text-danger text-end mb-5">
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
                            
                            placeholder="نظر خود را بنویسید..."
                            autoComplete="username"
                            type="text"
                            onChange={(e) =>
                              setData({ ...data, comment: e.target.value })
                            }
                            {...register("comment")}
                          />
                          {errors?.comment && (
                            <p className="text-danger text-end mb-5">
                              {errors.comment?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="review-sub-btn">
                     
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
