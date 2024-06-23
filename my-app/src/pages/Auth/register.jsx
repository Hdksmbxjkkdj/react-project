import { useState } from "react";
import {Notif} from "../../Utils/Notif";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [register,setregister] = useState({
    username:"",
    emailAddres:"",
    passowrd:""
  });

  function registering() {
    let status=201;
    if(register.username=="" || register.emailAddres=="" || register.emailAddres=="")
    {
      Notif('error',"لطفا اطلاعات خود را تکمیل کنید");
      return
    }
    else {
      try
      {
        axios.post("http://localhost:313/register",{username:register.username,email:register.emailAddres,pass:register.passowrd}).then((e)=>{
        status=e.status;
        if(status==201)
        {
          Notif('success',"خوش آمدید !");
          setTimeout(() => {
            window.location.assign("/");
          }, 500);
        }
        else
        {
          Notif('error',"در اینجا یک مشکل وجود دارد !")
          return
        }
      })
      }
      catch(error)
      {
        Notif('error',"در این جا یک مشکل وحود دارد !")
        return
      }
    }
  }

  return (
    <>
      <main>
        <section class="login-area pb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="basic-login">
                  <h3 class="text-center mb-60">فرم ثبت نام</h3>
                  <form action="#" onSubmit={()=>registering()}>
                    <label for="name">
                      نام کاربری <span>**</span>
                    </label>
                    <input id="name" type="text" placeholder="نام کاربری خود را وارد کنید" onChange={(e)=>setregister({...register,username:e.target.value})} />
                    <label for="email-id">
                      آدرس ایمیل <span>**</span>
                    </label>
                    <input id="email-id" type="email" placeholder="آدرس ایمیل" onChange={(e)=>setregister({...register,emailAddres:e.target.value})}/>
                    <label for="pass">
                      رمز عبور <span>**</span>
                    </label>
                    <input id="pass" type="password" placeholder="کلمه عبورتان را وارد کنید" onChange={(e)=>setregister({...register,passowrd:e.target.value})}/>
                    <div class="mt-10"></div>
                    <button class="t-y-btn w-100" type="submit" >ثبت نام</button>
                    <div class="or-divide">
                      <span>یا</span>
                    </div>
                    <Link to="/login" class="t-y-btn t-y-btn-grey w-100">
                      ورود
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
export {Register}