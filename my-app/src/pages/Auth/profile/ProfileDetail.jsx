import { useState } from "react"
import { Notif } from "../../../Utils/Notif";
import axios from "axios";

export const ProfileDetail = ()=> {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const [form,setForm] = useState({
        name:user?.username,
        email:user?.id,
        pass:""
    })
    function handleSubmit(e)
    {
        const newFile = {
            username:form.name,
            id:form.email,
            pass:form.pass
        }
        e.preventDefault();
        axios.put(`http://localhost:313/register/${user?.id}`,newFile)
        Notif('info',"تغییرات با موفقیت ثبت شد");
    }
    return <div className="main-content">
    <div className="user-info bg-white padding-30 font-size-13">
        <form onSubmit={handleSubmit}>
            <input className="text" placeholder="نام کاربری" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required/>
            <input className="text text-left" placeholder="ایمیل" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required/>
            <input className="text text-left" placeholder="رمز عبور" value={form.pass} onChange={(e)=>setForm({...form,pass:e.target.value})} required/>
            <button className="btn btn-netcopy_net text-light" type="submit">ذخیره تغییرات</button>
        </form>
    </div>
</div>
}