import { useState } from "react";
import { Notif } from "../../Utils/Notif";
import axios from "axios";

const Form = () => {
  const [email,setEmail] = useState();
  function submit()
  {
    let status =201;
    console.log(email);
    if(email==""||email==null||email==undefined)
    {
      Notif('error',"باید ایمیلتان را وارد کنید !")
      return
    }
    try
    {
      axios.post("http://localhost:313/aboutus",{email:email}).then((res)=>{
      status=res.status;
    })
    if(status==201)
    {
      Notif('success',"ایمیلتان با موفقیت ثبت گردید :)");
    }
    else
    {
      Notif('error',"در اینجا یک مشکلی وجود دارد !");
    }
    }
    catch(error)
    {
      Notif('error',"ایمیلتان ثبت نشد !")
    }
  }
  return (
    <>
      <form action="#" onSubmit={()=>submit()}>
        <input type="email" placeholder="Enter your email here..." onChange={(e)=>setEmail(e.target.value)}/>
        <button className="t-y-btn t-y-btn-sub" type="submit">subscribe</button>
      </form>
    </>
  );
};

export {Form};