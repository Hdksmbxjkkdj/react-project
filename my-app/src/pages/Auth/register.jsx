import { useState } from "react";
import {Notif} from "../../Utils/Notif";
import axios from "axios";
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
      Notif('error',"please complete your informations");
      return
    }
    else {
      axios.post("http://localhost:313/register",{username:register.username,email:register.emailAddres,pass:register.passowrd}).then((e)=>{
        status=e.status;
        if(status==201)
        {
          Notif('success',"welcome !");
        }
        else
        {
          Notif('error',"there is e problem with you !")
          return
        }
      })
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
                  <h3 class="text-center mb-60">Signup From Here</h3>
                  <form action="#" onSubmit={()=>registering()}>
                    <label for="name">
                      Username <span>**</span>
                    </label>
                    <input id="name" type="text" placeholder="Enter Username" onChange={(e)=>setregister({...register,username:e.target.value})} />
                    <label for="email-id">
                      Email Address <span>**</span>
                    </label>
                    <input id="email-id" type="email" placeholder="Email address..." onChange={(e)=>setregister({...register,emailAddres:e.target.value})}/>
                    <label for="pass">
                      Password <span>**</span>
                    </label>
                    <input id="pass" type="password" placeholder="Enter password..." onChange={(e)=>setregister({...register,passowrd:e.target.value})}/>
                    <div class="mt-10"></div>
                    <button class="t-y-btn w-100" type="submit" >Register Now</button>
                    <div class="or-divide">
                      <span>or</span>
                    </div>
                    <a href="login.html" class="t-y-btn t-y-btn-grey w-100">
                      login Now
                    </a>
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