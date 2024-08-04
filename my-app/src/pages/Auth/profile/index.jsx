import { useContext, useEffect, useState } from "react";
import { Box } from "./box";
import ApexCharts from "apexcharts"
import { CartContext } from "../../../context/CardContext";
import axios from "axios";
import {Link} from "react-router-dom";
import { data, event } from "jquery";
import { Show } from "./show";
import { Config } from "../../../Utils/config";
export const Profile = ()=> {

	
	'use strict';
	const u = localStorage.getItem("user"); 

	const {cart} = useContext(CartContext);
	var tot=0;
	function total()
	{
		for(var i=0;i<cart.length;i++)
		{
			tot+=(cart[i].quantity*cart[i].unitprice)
		}
		return tot;
	}
	const [wishlist,setwishlist] = useState();
	const [user,setUser] = useState();
	useEffect(()=>{
		axios.get(`http://localhost:313/register?username=${u}`).then((response)=>{
			setUser(response?.data[0].id)
		})
		axios.get(`http://localhost:313/wishlist?Uid=${user}`).then((res)=>{
			setwishlist(res);
		})
	},wishlist)
	const [wishlist1,setwishlist1] = useState();
	useEffect(()=>{
		axios.get(`http://localhost:313/wishlist?_start=0&_limit=4`).then((res)=>{
			
			setwishlist1(res);
		})
	},wishlist1)
	const [buy,setbuy] = useState();
	useEffect(()=>{
		axios.get("http://localhost:313/buy").then((res)=>{
			setbuy(res);
		})
	},[buy])
	var array=new Array();
	for(var i=0;i<buy?.data.length;i++)
	{
		array[i]=buy?.data[i].count.toFixed(1);
	}
	var array2 = new Array(5)
	array2[0]=cart.length;
	array2[1]=wishlist?.data.length;
	array2[2]=1
	array2[3]=1
	array2[4]=1
          useEffect(()=>{
            window?.$(".knob").knob({
                draw: function () {
          
                  // "tron" case
                  if (this.$.data('skin') == 'tron') {
          
                    var a = this.angle(this.cv)  // Angle
                        , sa = this.startAngle   // Previous start angle
                        , sat = this.startAngle  // Start angle
                        , ea                     // Previous end angle
                        , eat = sat + a          // End angle
                        , r = true;
          
                    this.g.lineWidth = this.lineWidth;
          
                    this.o.cursor
                    && (sat = eat - 0.3)
                    && (eat = eat + 0.3);
          
                    if (this.o.displayPrevious) {
                      ea = this.startAngle + this.angle(this.value);
                      this.o.cursor
                      && (sa = ea - 0.3)
                      && (ea = ea + 0.3);
                      this.g.beginPath();
                      this.g.strokeStyle = this.previousColor;
                      this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                      this.g.stroke();
                    }
          
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                    this.g.stroke();
          
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
          
                    return false;
                  }
                }
              });
          },[wishlist1])
          /* END JQUERY KNOB */ 
            window?.$('.inner-user-div').slimScroll({
              height: '550px'
            });
    return <div classNameName="hold-transition light-skin sidebar-mini theme-primary fixed">
        <div className="wrapper">
	
  <header className="main-header">
    <nav className="navbar navbar-static-top">
      <div className="navbar-custom-menu r-side">
        <ul className="nav navbar-nav">		  
			<li className="btn-group d-lg-inline-flex d-none">
			</li>
			<li className="btn-group nav-item d-lg-inline-flex d-none">
				<a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link full-screen btn-warning-light" title="Full Screen">
					<i data-feather="maximize"></i>
			    </a>
			</li>
		  <li class="dropdown notifications-menu">
			<a href="#" class="waves-effect waves-light dropdown-toggle btn-info-light" data-bs-toggle="dropdown" title="Notifications" onClick={()=>Show("notifications")}>
			  <i data-feather="bell"></i>
			</a>
			<ul class="dropdown-menu animated bounceIn" id="notifications">

			  <li class="header">
				<div class="p-20">
					<div class="flexbox">
						<div>
							<h4 class="mb-0 mt-0">Notifications</h4>
						</div>
						<div>
							<a href="#" class="text-danger">Clear All</a>
						</div>
					</div>
				</div>
			  </li>

			  <li>

				<ul class="menu sm-scrol">
				  <li>
					<a href="#">
					  <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-user text-primary"></i> Nunc fringilla lorem 
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
					</a>
				  </li>
				</ul>
			  </li>
			  <li class="footer">
				  <a href="#">View all</a>
			  </li>
			</ul>
		  </li>	
          <li className="dropdown user user-menu">
            <a href="#" className="waves-effect waves-light dropdown-toggle btn-success-light" data-bs-toggle="dropdown" title="User" onClick={()=>Show("user")}>
				<i data-feather="user"></i>
            </a>
            <ul className="dropdown-menu animated flipInX" id="user">
              <li className="user-body">
				 <Link className="dropdown-item" to="/profile"><i className="ti-user text-muted me-2"></i> پروفایل</Link>
				 <Link className="dropdown-item" to="/checkout"><i className="ti-wallet text-muted me-2"></i>Check Out</Link>
				 <Link className="dropdown-item" to="#"><i className="ti-settings text-muted me-2"></i> تنظیمات</Link>
				 <div className="dropdown-divider"></div>
				 <Link className="dropdown-item" to="/Login"><i className="ti-lock text-muted me-2"></i> خروج</Link>
              </li>
            </ul>
          </li>
          <li>
              <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light btn-danger-light">
			  	<i data-feather="settings"></i>
			  </a>
          </li>
			
        </ul>
      </div>
    </nav>
  </header>
  <div className="content-wrapper">
	  <div className="container-full">
		<section className="content">
			<div className="row">
				<div className="col-xl-3 col-lg-6 col-12">
                    <Box item={{title:"محصول در سبد خرید",number:cart.length,val:cart.length,clr:"#3246D3",bg:"bg-1"}}/>
				</div>
				<div className="col-xl-3 col-lg-6 col-12">
					<Box item={{title:"محصول در علاقه مندی ها",number:wishlist?.data.length,val:wishlist?.data?.length,clr:"#37d159",bg:"bg-2"}}/>
				</div>
				<div className="col-xl-3 col-lg-6 col-12">
					<Box item={{title:"Total Customer",number:4258,val:65,clr:"#ffa800",bg:"bg-3"}}/>
				</div>
				<div className="col-xl-3 col-lg-6 col-12">
					<Box item={{title:"Total Projects",number:734,val:35,clr:"#00d0ff",bg:"bg-4"}}/>
				</div>	
				
				<div className="col-xl-8 col-12">
					<div className="row">
						<div className="col-lg-6 col-12">							
							<div className="box">
								<div className="box-body">
									<div className="d-flex align-items-center justify-content-start">
										<img src="./img/images/compass.png" className="max-w-120" alt=""/>
										<div className="ps-20">
											<span className="badge bg-danger badge-md" style={{color:"#eee"}}>0 جدید</span>
											<h2>7+</h2>
											<p className="mb-0"><i className="fa fa-line-chart text-success"></i> <span className="text-success">0%</span> از ماه قبل</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-12">										
							<div className="box overflow-hidden">
								<div className="box-body p-0">
									<div className="row align-items-center justify-content-start g-0">										
										<div className="col-6 bg-info">
											<div className="p-25">
												<i className="fs-32 mb-5 fa fa-user text-light"></i>
												<h2 className="mb-0">1</h2>
												<p className="fs-18 mb-0 text-light">کاربران</p>
											</div>
										</div>										
										<div className="col-6 bg-primary">
											<div className="p-25">
												<i className="fs-32 mb-5 fa fa-cart-shopping text-light"></i>
												<h2 className="mb-0">7+</h2>
												<p className="fs-18 mb-0 text-light">محصول</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12 col-12" key={Math.random}>
							<div className="box">
								<div className="box-header" style={{display:"flex",justifyContent:"space-between"}}>
									<h4 className="box-title">
										خلاصه علاقه مندی ها
									</h4>
									<Link to="/wishlist">برو به علاقه مندی ها</Link>
								</div>
								<div className="box-body">
									<div className="row">
										{
											(wishlist?.data?.length>0) ? wishlist1?.data.map((item)=>{
												return <div className="col-lg-3 col-sm-6 col-12">
													<div className="card prof-card">
														<div className="card-body">
															<img src={`${Config.shop}${item.pic}`} alt=""/>
															<p className="card-text" style={{textAlign:"right"}}>
																{
																	item.name
																}
															</p>
														</div>
													</div>
												</div>
											}):
											<div>
												<h4 className="text-danger text-center">محتوایی جهت نمایش وجود ندارد !</h4>
											</div>
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-12">
					<div className="box">
						<div className="box-body">
							<div className="mb-30">
								 <div className="d-flex align-items-center justify-content-between mb-15"><h4>محصولات موجود</h4></div>
								 <div className="progress active">
									<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width:"45%"}}>
									</div>
								 </div>
							</div>
							<div className="mb-30">
								 <div className="d-flex align-items-center justify-content-between mb-15"><h4>Property Listed</h4><h4>415 Unit</h4></div>
								 <div className="progress active">
									<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
									</div>
								 </div>
							</div>
							<div>
								 <div className="d-flex align-items-center justify-content-between mb-15"><h4>کامنت ها</h4><h4>345 کامنت</h4></div>
								 <div className="progress active mb-0">
									<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}>
									</div>
								 </div>
							</div>							
						</div>
					</div>
				</div>
			</div>			
		</section>
	  </div>
  </div>
  <footer className="main-footer">
    <div className="pull-right d-none d-sm-inline-block">
        <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
		  <li className="nav-item">
			<a className="nav-link" href="javascript:void(0)">FAQ</a>
		  </li>
		  <li className="nav-item">
			<a className="nav-link" href="https://themeforest.net/item/webkitx-admin-bootstrap-admin-dashboard-template-user-interface/27691720" target="_blank">Purchase Now</a>
		  </li>
		</ul>
    </div>
	  &copy; 2022 <a href="https://www.multipurposethemes.com/">Multipurpose Themes</a>. All Rights Reserved.
  </footer>
  <aside className="control-sidebar" id="aside">
	  
	<div className="rpanel-title"><span className="pull-right btn btn-circle btn-danger"><i className="ion ion-close text-white" data-toggle="control-sidebar"></i></span> </div>
    <ul className="nav nav-tabs control-sidebar-tabs">
      <li className="nav-item"><a href="#control-sidebar-home-tab" data-bs-toggle="tab" className="active"><i className="mdi mdi-message-text"></i></a></li>
      <li className="nav-item"><a href="#control-sidebar-settings-tab" data-bs-toggle="tab"><i className="mdi mdi-playlist-check"></i></a></li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane active" id="control-sidebar-home-tab">
          <div className="flexbox">
			<a href="javascript:void(0)" className="text-grey">
				<i className="ti-more"></i>
			</a>	
			<p>Users</p>
			<a href="javascript:void(0)" className="text-end text-grey"><i className="ti-plus"></i></a>
		  </div>
		  <div className="lookup lookup-sm lookup-right d-none d-lg-block">
			<input type="text" name="s" placeholder="Search" className="w-p100"/>
		  </div>
          <div className="media-list media-list-hover mt-20">
			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-success" href="#">
				<img src="./img/images/avatar/1.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Tyler</strong></a>
				</p>
				<p>Praesent tristique diam...</p>
				  <span>Just now</span>
			  </div>
			</div>

			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-danger" href="#">
				<img src="./img/images/avatar/2.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Luke</strong></a>
				</p>
				<p>Cras tempor diam ...</p>
				  <span>33 min ago</span>
			  </div>
			</div>

			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-warning" href="#">
				<img src="./img/images/avatar/3.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Evan</strong></a>
				</p>
				<p>In posuere tortor vel...</p>
				  <span>42 min ago</span>
			  </div>
			</div>

			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-primary" href="#">
				<img src="./img/images/avatar/4.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Evan</strong></a>
				</p>
				<p>In posuere tortor vel...</p>
				  <span>42 min ago</span>
			  </div>
			</div>			
			
			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-success" href="#">
				<img src="./img/images/avatar/1.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Tyler</strong></a>
				</p>
				<p>Praesent tristique diam...</p>
				  <span>Just now</span>
			  </div>
			</div>

			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-danger" href="#">
				<img src="./img/images/avatar/2.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Luke</strong></a>
				</p>
				<p>Cras tempor diam ...</p>
				  <span>33 min ago</span>
			  </div>
			</div>

			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-warning" href="#">
				<img src="./img/images/avatar/3.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Evan</strong></a>
				</p>
				<p>In posuere tortor vel...</p>
				  <span>42 min ago</span>
			  </div>
			</div>

			<div className="media py-10 px-0">
			  <a className="avatar avatar-lg status-primary" href="#">
				<img src="./img/images/avatar/4.jpg" alt="..."/>
			  </a>
			  <div className="media-body">
				<p className="fs-16">
				  <a className="hover-primary" href="#"><strong>Evan</strong></a>
				</p>
				<p>In posuere tortor vel...</p>
				  <span>42 min ago</span>
			  </div>
			</div>
			  
		  </div>

      </div>
      <div className="tab-pane" id="control-sidebar-settings-tab">
          <div className="flexbox">
			<a href="javascript:void(0)" className="text-grey">
				<i className="ti-more"></i>
			</a>	
			<p>Todo List</p>
			<a href="javascript:void(0)" className="text-end text-grey"><i className="ti-plus"></i></a>
		  </div>
        <ul className="todo-list mt-20">
			<li className="py-15 px-5 by-1">
			  <input type="checkbox" id="basic_checkbox_1" className="filled-in"/>
			  <label for="basic_checkbox_1" className="mb-0 h-15"></label>
			  <span className="text-line">Nulla vitae purus</span>
			  <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5">
			  <input type="checkbox" id="basic_checkbox_2" className="filled-in"/>
			  <label for="basic_checkbox_2" className="mb-0 h-15"></label>
			  <span className="text-line">Phasellus interdum</span>
			  <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5 by-1">
			  <input type="checkbox" id="basic_checkbox_3" className="filled-in"/>
			  <label for="basic_checkbox_3" className="mb-0 h-15"></label>
			  <span className="text-line">Quisque sodales</span>
			  <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5">
			  <input type="checkbox" id="basic_checkbox_4" className="filled-in"/>
			  <label for="basic_checkbox_4" className="mb-0 h-15"></label>
			  <span className="text-line">Proin nec mi porta</span>
			  <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5 by-1">
			  <input type="checkbox" id="basic_checkbox_5" className="filled-in"/>
			  <label for="basic_checkbox_5" className="mb-0 h-15"></label>
			  <span className="text-line">Maecenas scelerisque</span>
			  <small className="badge bg-primary"><i className="fa fa-clock-o"></i> 1 week</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5">
			  <input type="checkbox" id="basic_checkbox_6" className="filled-in"/>
			  <label for="basic_checkbox_6" className="mb-0 h-15"></label>
			  <span className="text-line">Vivamus nec orci</span>
			  <small className="badge bg-info"><i className="fa fa-clock-o"></i> 1 month</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5 by-1">
			  <input type="checkbox" id="basic_checkbox_7" className="filled-in"/>
			  <label for="basic_checkbox_7" className="mb-0 h-15"></label>
			  <span className="text-line">Nulla vitae purus</span>
			  <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5">
			  <input type="checkbox" id="basic_checkbox_8" className="filled-in"/>
			  <label for="basic_checkbox_8" className="mb-0 h-15"></label>
			  <span className="text-line">Phasellus interdum</span>
			  <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5 by-1">
			  <input type="checkbox" id="basic_checkbox_9" className="filled-in"/>
			  <label for="basic_checkbox_9" className="mb-0 h-15"></label>
			  <span className="text-line">Quisque sodales</span>
			  <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
			<li className="py-15 px-5">
			  <input type="checkbox" id="basic_checkbox_10" className="filled-in"/>
			  <label for="basic_checkbox_10" className="mb-0 h-15"></label>
			  <span className="text-line">Proin nec mi porta</span>
			  <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
			  <div className="tools">
				<i className="fa fa-edit"></i>
				<i className="fa fa-trash-o"></i>
			  </div>
			</li>
		  </ul>
      </div>
    </div>
  </aside>
  <div className="control-sidebar-bg"></div>
  
</div>
	<div id="chat-box-body">
		<div id="chat-circle" className="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70" onClick={()=>Show("chat-box-body")}>
            {/* <div id="chat-overlay"></div> */}
            <i className="fa fa-message text-light fs-3"></i>
		</div>

		<div className="chat-box">
            <div className="chat-box-header p-15 d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button onClick={()=>Show("dropdown-menu")} className="waves-effect waves-circle btn btn-circle btn-primary-light h-40 w-40 rounded-circle" type="button" data-bs-toggle="dropdown">
                      <i className="fa fa-user"></i>
                  </button>
                  <div id="dropdown-menu" className="dropdown-menu min-w-200">
                    <a className="dropdown-item fs-16" href="#">
                        <span className="icon-Color me-15"></span>
                        گروه جدید</a>
                    <a className="dropdown-item fs-16" href="#">
                        <span className="icon-Clipboard me-15"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                        اطلاعات</a>
                    <a className="dropdown-item fs-16" href="#">
                        <span className="icon-Group me-15"><span className="path1"></span><span className="path2"></span></span>
                        گروه ها</a>
                    <a className="dropdown-item fs-16" href="#">
                        <span className="icon-Active-call me-15"><span className="path1"></span><span className="path2"></span></span>
                        تماس ها</a>
                    <a className="dropdown-item fs-16" href="#">
                        <span className="icon-Settings1 me-15"><span className="path1"></span><span className="path2"></span></span>
                        تنظیمات</a>
                    <div className="dropdown-divider"></div>
					<a className="dropdown-item fs-16" href="#">
                        <span className="icon-Question-circle me-15"><span className="path1"></span><span className="path2"></span></span>
                        پشتیبانی</a>
					<a className="dropdown-item fs-16" href="#">
                        <span className="icon-Notifications me-15"><span className="path1"></span><span className="path2"></span></span> 
                        خصوصی</a>
                  </div>
                </div>
                <div className="text-center flex-grow-1">
                    <div className="text-dark fs-18">کاربر</div>
                    <div>
                        <span className="badge badge-sm badge-dot badge-primary"></span>
                        <span className="text-muted fs-12">فعال</span>
                    </div>
                </div>
                <div className="chat-box-toggle">
                    <button id="chat-box-toggle" className="waves-effect waves-circle btn btn-danger-light btn-circle h-40 w-40 rounded-circle" type="button" onClick={()=>{window?.$("#chat-box-body").removeClass("show")}}>
                      <i className="fa fa-times fs-4"></i>
                    </button>                    
                </div>
            </div>
            <div className="chat-box-body">
                <div className="chat-box-overlay">   
                </div>
                <div className="chat-logs">
                    <div className="chat-msg user">
                        <div className="d-flex align-items-center">
                            <span className="msg-avatar">
                                <img src="./img/images/avatar/2.jpg" className="avatar avatar-lg"/>
                            </span>
                            <div className="mx-10">
                                <a href="#" className="text-dark hover-primary fw-bold">مایرا سیبلی</a>
                                <p className="text-muted fs-12 mb-0">2 ساعت</p>
                            </div>
                        </div>
                        <div className="cm-msg-text">
                            سلام من جسی هستم 
                        </div>
                    </div>
                    <div className="chat-msg self">
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="mx-10">
                                <a href="#" className="text-dark hover-primary fw-bold">شما</a>
                                <p className="text-muted fs-12 mb-0">3 دقیقه</p>
                            </div>
                            <span className="msg-avatar">
                                <img src="./img/images/avatar/3.jpg" className="avatar avatar-lg"/>
                            </span>
                        </div>
                        <div className="cm-msg-text">
                           منم کاربر هستم         
                        </div>        
                    </div>
                    <div className="chat-msg user">
                        <div className="d-flex align-items-center">
                            <span className="msg-avatar">
                                <img src="./img/images/avatar/2.jpg" className="avatar avatar-lg"/>
                            </span>
                            <div className="mx-10">
                                <a href="#" className="text-dark hover-primary fw-bold">ماریا سیبلی</a>
                                <p className="text-muted fs-12 mb-0">40 ثانیه</p>
                            </div>
                        </div>
                        <div className="cm-msg-text">
                            خوشبختم کابر<br/>چطور میتونم بهت کمک کنم?
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-input">      
                <form>
                    <input type="text" id="chat-input" placeholder="پیام شما"/>
                    <button type="submit" className="chat-submit" id="chat-submit">
                        <span className="icon-Send fs-22"></span>
                    </button>
                </form>      
            </div>
		</div>
	</div>
    </div>
}