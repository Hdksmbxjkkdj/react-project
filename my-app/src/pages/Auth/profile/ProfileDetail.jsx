import { useState } from "react"
import { Notif } from "../../../Utils/Notif";

export const ProfileDetail = ()=> {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user);
    const [form,setForm] = useState({
        name:user?.username,
        email:user?.id,
        phone:"",
        pass:""
    })
    function handleSubmit(e)
    {
        e.preventDefault();
        Notif('info',"در نسخه آزمایشی در دسترس نمیباشد");
    }
    return <div className="main-content">
    <div className="user-info bg-white padding-30 font-size-13">
        <form onSubmit={handleSubmit}>
            <input className="text" placeholder="نام کاربری" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input className="text text-left" placeholder="ایمیل" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <input className="text text-left" placeholder="شماره موبایل" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/>
            <input className="text text-left" placeholder="رمز عبور" value={form.pass} onChange={(e)=>setForm({...form,pass:e.target.value})}/>
            <p className="rules">رمز عبور باید حداقل ۶ کاراکتر و ترکیبی از حروف بزرگ، حروف کوچک، اعداد و کاراکترهای
                غیر الفبا مانند <strong>!@#$%^&*()</strong> باشد.</p>
            <button className="btn btn-netcopy_net text-light" type="submit">ذخیره تغییرات</button>
        </form>
    </div>
</div>
}