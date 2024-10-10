import { useEffect, useState } from "react";
import { ProfileDetails } from "./ProfieDetails";
import { SideBar } from "./SideBar";
import { DashboardDetails } from "./DashboardDetails";
import { OrderDetails } from "./OrderDetails";
import { AddressDetails } from "./AddressDetails";
import { ProfileDetail } from "./ProfileDetail";
import { useNavigate } from "react-router-dom";
import { WishlistDetailes } from "./WishlistDetailes";

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
    <div className="container-fluid">
      <div className="row my-5">
      <div className="col-xl-2 col-lg-3 col-md-4">
      <SideBar tab={tab} setTab={setTab}/>
      </div>
      <div className="col">
      <div className="content w-100">
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
      <WishlistDetailes className={(tab!=4)?"d-none":""}/>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};
