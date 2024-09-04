import { useState } from "react";
import { Notif } from "../../Utils/Notif";
import axios from "axios";

const Form = () => {
  const [email,setEmail] = useState();
  function submit(e)
  {
    e.preventDefault();
    let status =201;
    if(email===""||email===null||email===undefined)
    {
      Notif('error',"باید ایمیلتان را وارد کنید !")
      return
    }
    try
    {
      axios.post("http://localhost:313/aboutus",{email:email}).then((res)=>{
        setEmail("");
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
      <form onSubmit={(e)=>submit(e)}>
        <input type="email" placeholder="ایمیلتان را وارد کنید ..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button className="t-y-btn t-y-btn-sub" type="submit">عضویت</button>
      </form>
    </>
  );
};

export {Form};