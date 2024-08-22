import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Input, Textarea } from "../../Compont/Forms";
import { Notif, User } from "../../Utils";
// import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { TapContent } from "./TapContent";
import { CustomerComment } from "./CustomerComment";
import { Rank } from "../Components/Rank";
import { RateSubmit } from "./RateSubmit/RateSubmit";
//test
export const SendComment = ({
  id,
  tab,
  productId,
  commentNumber,
  item,
  info,
}) => {
  // const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);
  //  const [value, setValue] = useState(0);

  // let local = Local()
  let auth = User();
  let loginMessage = "first_login";
  let eMessage = "error_message";
  let sMessage = "success_message";
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();
  // today = dd + '/' + mm + '/' + yyyy;
  let today = new Date().toLocaleDateString("fa-IR");
  // let time = new Time().toLocaleDateString('fa-IR');
  //    const[idproduct,setIdproduct]=useState(1)
  const [errors, setErrors] = useState();
  const [data, setData] = useState({
    sender_name: auth ? (auth.username ? auth.username : auth.full_name) : "",
    sender_email: auth ? auth.email : "",
    comment: "",
    // product_id: id,
    id: id,
    date: today,
    quality,
  });
  const [error, setError] = useState();
  let url = `http://localhost:313/product_comments`;
  const submit = async (e) => {
    e.preventDefault();

    if (auth) {
      // clearErrors()

      await axios
        .post(url, data)
        .then((response) => {
        //   console.log(response);
          // let message = response.data?.message;
          //   let message = "Insert";
          let message = "پیام شما با موفقیت ارسال شد";

          //    if (response.data?.status == 201) {
          //    if (data!= ""&&response?.status == 201) {
          if (response?.status == 201) {
            Notif("success", message);
            // Notif("error", "status خالی میباشد");

            // reset()
            return;
          }
        })
        .catch((errors) => {
          setError(errors?.response.data?.errors);
        });

      // errors?.length > 0 && Notif('error', eMessage)

      return;
    }

    Notif("error", loginMessage);
  };

  //test

  //CustomerCommen
  // const [info, setInfo] = useState();
  // useEffect(() => {
  //     // axios.get(`http://localhost:313/row/${id}`).then((res) => {
  //         axios.get(`http://localhost:313/product_comments`).then((res) => {

  //         setInfo(res);

  //     });
  // }, []);
  //CustomerCommen

  return (
    <>
      <div className="col-xxl-12">
        <div className="tab-content" id="prodductDesTaContent">
          <TapContent tab={tab}></TapContent>
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
                <CustomerComment comment={info?.data} id={id}></CustomerComment>
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="review-form">
                    <h3>بررسی شما</h3>
                    <p>سیب های سلطنتی گالا ارگانیک تایید شده استرالیا</p>
                    <form action="#">
                      <div className="review-input-box mb-15 d-flex align-items-start">
                        <h4 className="review-input-title">امتیاز شما</h4>
                        <div className="review-input">
                          <div className="review-ratings mb-10">
                            <div className="review-ratings-single d-flex align-items-start">
                              <span>کیفیت</span>
                              {/* <Rank></Rank> */}
                              <RateSubmit
                                sendQuality={setQuality}
                                quality={quality}
                                item={info}
                                type="lg"
                              ></RateSubmit>
                            </div>
                            {/* <div className="review-ratings-single d-flex align-items-center">
                                                    <span>قیمت</span>
                                                     <Rank></Rank>
                                                     <RateSubmit sendPrice={setPrice}></RateSubmit>
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
                          <Input
                            id="sender_name"
                            name="sender_name"
                            value={data?.sender_name}
                            error={errors?.sender_name}
                            autoComplete="username"
                            onChange={(e) =>
                              setData({ ...data, sender_name: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="review-input-box d-flex align-items-start">
                        <h4 className="review-input-title">ایمیل</h4>
                        <div className="review-input">
                          <Input
                            type="email"
                            id="sender_email"
                            name="sender_email"
                            value={data?.sender_email}
                            error={errors?.sender_email}
                            autoComplete="useremail"
                            onChange={(e) =>
                              setData({ ...data, sender_email: e.target.value })
                            }
                            required=""
                          />
                        </div>
                      </div>
                      <div className="review-input-box d-flex align-items-start">
                        <h4 className="review-input-title">نظر</h4>
                        <div className="review-input">
                          <Textarea
                            id="comment"
                            name="comment"
                            value={data?.comment}
                            error={errors?.comment}
                            placeholder="نظر خود را بنویسید..."
                            autoComplete="username"
                            onChange={(e) =>
                              setData({ ...data, comment: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="review-sub-btn">
                        <button
                          type="submit"
                          className="t-y-btn t-y-btn-grey"
                          onClick={(event) => submit(event)}
                        >
                          ارسال بررسی
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
