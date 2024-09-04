import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Textarea } from "../../Compont/Forms";
import { Notif, User } from "../../Utils";
export const ContactForm = () => {
  let auth = User();
  let loginMessage = "ابتدا وارد سایت شوید";
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  const [errors, setErrors] = useState();
  const initialState ={
    user_name: auth ? auth.username : "",
    sender_email: auth ? auth.id : "",
    comment: "",
    sender_phone: "",
    date: today,
  }
  const [data, setData] = useState(initialState);
  const [error, setError] = useState();
  let url = `http://localhost:313/ContactUs`;
  const submit = async (e) => {
    e.preventDefault();
    if (auth) {
      try {
        await axios.post(url, data).then((response) => {
            console.log(response);
          let message = "پیام شما با موفقیت ارسال گردید !";
          if (response?.status == 201) {
            Notif("success", message);
            setData(initialState);
          }
          else
          {
            Notif("error","در این جا یک خطا رخ داده است")
          }
        })
      } catch (errorss) {
        alert("hello")
        setErrors(errors?.response.data?.errors);
        Notif("error", error);
      }
    } else Notif("error", loginMessage);
  };

  return (
    <>
      <div
        className="col-xxl-8 col-xl-8 col-lg-7 text-end"
        style={{ direction: "rtl" }}
      >
        <div className="contact__form">
          <h3 className="contact__title">دفتر اصلی ما</h3>
          <form onSubmit={(e) => submit(e)}>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="contact__input">
                  <span>نام</span>
                  <Input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={data?.user_name}
                    error={errors?.user_name}
                    utoComplete="username"
                    onChange={(e) =>
                      setData({ ...data, user_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="contact__input">
                  <span>ایمیل</span>
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
                  />
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="contact__input">
                  <span>شماره تماس</span>
                  <Input
                    type="phone"
                    id="sender_phone"
                    name="sender_phone"
                    value={data?.sender_phone}
                    error={errors?.sender_phone}
                    autoComplete="userphone"
                    onChange={(e) =>
                      setData({ ...data, sender_phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="contact__input">
                  <span>چه چیزی در ذهن شماست؟</span>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={data?.comment}
                    error={errors?.comment}
                    placeholder="your_comment"
                    autoComplete="username"
                    onChange={(e) =>
                      setData({ ...data, comment: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="contact__btn">
                  <button type="submit" className="t-y-btn">
                    ارسال پیام
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
