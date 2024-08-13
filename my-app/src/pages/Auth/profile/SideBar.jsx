import { useState } from "react";
import {useNavigate} from "react-router-dom";	

export const SideBar = ({tab,setTab})=>{
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const navigate = useNavigate()
    const [img,setImg] = useState()
    function handleImage(value){
        setImg(value)
        
    }
    return <>
        <div className="sidebar__nav  ">
    <span className="bars d-none padding-0-18"></span>
    <a className="header__logo  d-none" href="https://netcopy.ir"></a>
    <div className="profile__info border cursor-pointer text-center">
        <div className="avatar__img"><img src={(img)?URL.createObjectURL(img):"/img/team/as4.jpg"} className="avatar___img"/>
            <input type="file" onChange={(e)=>handleImage(e.target.files[0])} accept="image/*" className="hidden avatar-img__input"/>
            <div className="v-dialog__container" style={{display:"block"}}></div>
            <div className="box__camera default__avatar"></div>
        </div>
        <span className="profile__name">{user?.username}</span>
    </div>

    <ul>
        <li onClick={()=>setTab(0)} className={(tab==0)?"item-li d-flex align-items-center is-active":"item-li d-flex align-items-center"}><i className="fab fa-windows"></i><a href="#">داشبورد</a></li>
        <li onClick={()=>setTab(1)} className={(tab==1)?"item-li d-flex align-items-center is-active":"item-li d-flex align-items-center"}><i className="fa fa-shopping-basket"></i><a href="#">سفارش ها</a></li>
        <li onClick={()=>setTab(2)} className={(tab==2)?"item-li d-flex align-items-center is-active":"item-li d-flex align-items-center"}><i className="fa fa-home"></i><a href="#">آدرس ها</a></li>
        <li onClick={()=>setTab(3)} className={(tab==3)?"item-li d-flex align-items-center is-active":"item-li d-flex align-items-center"}><i className="fa fa-user"></i><a href="#">پروفایل</a></li>
        <li onClick={()=>navigate("/login")} className={"item-li d-flex align-items-center"}><i className="fa fa-door-closed"></i><a href="#">خروج</a></li>
    </ul>

</div>
    </>
}