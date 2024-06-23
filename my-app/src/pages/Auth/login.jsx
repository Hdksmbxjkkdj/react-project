import { useEffect, useState } from "react";
import {Notif} from "../../Utils/Notif";
import axios from "axios";
import {Link} from "react-router-dom";

const Login = () => {
  const [login,setLogin] = useState({
    email:"",
    password:""
  })
  function loginUser()
  {
    axios.get(`http://localhost:313/register?email=${login.email}`).then((e)=>{
      if(e.data[0]==undefined || e?.data[0].pass!=login.password)
      {
        Notif('error',"نام کاربری یا ایمیل تعریف نشده !")
        return
      }
      Notif('success',"خوش آمدید :)");
    })
  }
  return (
    <>
      <main>
        <section class="login-area pb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="basic-login">
                  <h3 class="text-center mb-60">فرم ورود</h3>
                  <form action="#" onSubmit={loginUser}>
                    <label for="name">
                      آدرس ایمیل <span>**</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="آدرس ایمیل"
                      onChange={(e)=>setLogin({...login,email:e.target.value})}
                      required
                    />
                    <label for="pass">
                      کلمه عبور <span>**</span>
                    </label>
                    <input
                      id="pass"
                      type="password"
                      placeholder="وارد کردن کلمه عبور"
                      onChange={(e)=>setLogin({...login,password:e.target.value})}
                      required
                    />
                    <div class="login-action mb-20 fix">
                      <span class="log-rem f-left">
                        <input id="remember" type="checkbox"/>
                        <label for="remember">مرا به خاطر داشته باش</label>
                      </span>
                      <span class="forgot-login f-right">
                        <a onClick={()=>alert("متاسفانه کاری نمیتوان برای شما انجام داد")}>فراموشی رمز عبور</a>
                      </span>
                    </div>
                    <button class="t-y-btn w-100" type="submit">ورود</button>
                    <div class="or-divide">
                      <span>یا</span>
                    </div>
                    <Link to="/register" class="t-y-btn t-y-btn-grey w-100">
                      ثبت نام
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export {Login};