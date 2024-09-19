import { useEffect, useState } from "react";
import { ProfileDetails } from "./ProfieDetails";
import { SideBar } from "./SideBar";
import { DashboardDetails } from "./DashboardDetails";
import { OrderDetails } from "./OrderDetails";
import { AddressDetails } from "./AddressDetails";
import { ProfileDetail } from "./ProfileDetail";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("user"))
    {
      navigate("/login",{replace:true})
    }
  },[])
	const [tab,setTab] = useState(0);
  return (
    <div className="d-flex align-items-start my-5">
      <SideBar tab={tab} setTab={setTab}/>
      <div className="content w-100">
        <div className="header d-flex item-center bg-white width-100 border-bottom padding-12-30">
          <div className="header__right d-flex flex-grow-1 item-center">
            <i className="fa fa-bars"></i>
            <a className="header__logo" href="https://netcopy.ir"></a>
          </div>
        </div>
        <div className="main-content font-size-13">
          <ProfileDetails className={(tab!=0)?"d-none":""}>
			<DashboardDetails/>
		  </ProfileDetails>
          <ProfileDetails className={(tab!=1)?"d-none":""}>
			<OrderDetails/>
		  </ProfileDetails>
          <ProfileDetails className={(tab!=2)?"d-none":""}>
			<AddressDetails/>
		  </ProfileDetails>
          <ProfileDetails className={(tab!=3)?"d-none":""}>
			<ProfileDetail/>
		  </ProfileDetails>
        </div>
      </div>
    </div>
  );
};
