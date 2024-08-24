import axios from "axios";
import { useState } from "react";
import { Notif } from "../../Utils";
import { useNavigate } from "react-router-dom";

export const ForgottenPass = ()=> {
    const [email,setEmail] = useState();
    const navigate = useNavigate()
    async function changePass()
    {
        let status = 201;
        try{
            const res = await axios.post("http://localhost:313/forgotPass",{email:email});
        if(res.status) status = res.status;
        if(status===201)
        {
            Notif("success",`ایمیل شما با موفقیت ثبت شد و به این آدرس ${email} یک کد حاوی کلمه عبور ارسال شد`)
            navigate("/login");
        }
        else
        {
            throw "متاسفانه ایملتان  ثبت نشد !"
        }
        } catch(error)
        {
            Notif("error",error)
        }
    }
    return (
        <>
          <main>
            <section className="login-area pb-100">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="basic-login">
                      <h3 className="text-center mb-60">فراموشی رمز عبور</h3>
                      <div>
                        <label for="name">
                          آدرس ایمیل <span>**</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="آدرس ایمیل"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          required
                        />
                        <button
                          className="t-y-btn w-100"
                          type="button"
                          onClick={changePass}
                        >
                          تغییر کلمه عبور
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      ); 
}