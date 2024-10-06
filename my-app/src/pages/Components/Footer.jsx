 import { useState } from "react";
import { Config, Notif } from "../../Utils";
import {Link} from "react-router-dom"
// import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
const Footer = ()=>{
    let eMessage = "error_message";
    let sMessage = "success_message";
    //new
  const schema=yup.object().shape({
    email:yup.string().email("آدرس ایمیل نا معتبر است").required('فیلد ایمیل نباید خالی باشد')
   })

   const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})

 
 //new
 
 
  
    const [error, setError] = useState();
    const [data, setData] = useState({
    });
    let url = `http://localhost:313/khabarname`;
    const onFormSubmit = async (data) => {
      // if (user != null) {
      //  if(data?.sender_name!=null){
             // clearErrors()
  
             await axios
             .post(url, {
             
               // sender_email: auth ? auth.email : "",
            //    sender_email: user.id,
            email:data?.email,
            //    date: today,

               
             })

             .then((response) => {
               console.log(response)
               // let message = response.data?.message;
               //   let message = "Insert";
               let message = "پیام شما با موفقیت ارسال شد";
     
               //    if (response.data?.status == 201) {
               //    if (data!= ""&&response?.status == 201) {
               if (response?.status == 201) {
  
                 
                Notif("success", message);
                 // Notif("error", "status خالی میباشد");
     
               reset()
                 return;
               }else {
                Notif('error', 'خالی است')
                
                return
            }
             })
             .catch((errors) => {
            //    setError(errors?.response.data?.errors);
             });
     
            // error?.length > 0 && Notif('error', eMessage)
     
           return;
        //  }
        //  Notif("error", 'فیلد نام یا نظر خالی است');
       
   
  
    //   Notif("error", loginMessage);
    };
  
    //
    return(
        <>
        { 
        <footer>
      
            <div className="footer__area footer-bg-2 yellow-footer">
                <div className="footer__top pt-80 pb-40">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="footer__top-left">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                                            <div className="footer__widget">
                                                <div className="footer__widget-title mb-45">
                                                    <div className="footer__logo">
                                                        {/* <Link to="index.html"><img src="assets/img/shop/product/cart/cart-mini-1.jpg" alt=""/></Link> */}
                                                        {/* <Link to="index.html"><img src="../../img/logo/logo-black.png" alt=""/></Link> */}
                                                        <Link to="/"><img src={Config.logo + "" + "logo-white.png"} alt=""/></Link>
                                                    </div>
                                                </div>
                                                <div className="footer__widget-content">
                                                    <div className="footer__hotline footer__hotline-4 d-flex align-items-center mb-30">
                                                        <div className="icon ml-15">
                                                            <i className="fa fa-headset"></i>
                                                        </div>
                                                        <div className="text border-none fs-6">
                                                            <h4 className="">پشتیبانی رایگان 24/24:</h4>
                                                            <span>1234567890</span>
                                                        </div>
                                                    </div>
                                                    <div className="footer__info footer__info-4">
                                                        <ul>
                                                            <li>
                                                                <span>آدرس:  
                                                                        <Link target="_blank" to="https://maps.app.goo.gl/UucCBf6pxScN5qS77">قم ، میدان رسالت ، خیابان بسیج ، بسیج 1 ، پلاک  **</Link>
                                                                    </span>
                                                            </li>
                                                            <li><span>ایمیل: <Link to="/cdn-cgi/l/email-protection#e881868e87a89c808d8a9d8d9b8391c68b8785"><span className="__cf_email__" data-cfemail="e28b8c848da2968a8780978791899bcc818d8f">[info@gmail.com]</span></Link>
                                                                </span>
                                                            </li>
                                                            <li><span>فکس: <Link to="tel:123-456-7890">(+100) 123 456 7890</Link> - <Link to="tel:-100-123-456-7891">(+100) 123 456 7891</Link> </span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                    <div className="footer__widget">
                                                        <div className="footer__widget-title footer__widget-title-4">
                                                            <h4>اطلاعات</h4>
                                                        </div>
                                                        <div className="footer__widget-content">
                                                            <div className="footer__link footer__link-4">
                                                                <ul>
                                                                    <li><Link to="#"> سرویس مشتریان </Link></li>
                                                                    <li><Link to="#">F.A.Q.’s</Link></li>
                                                                    <li><Link to="#">ثبت سفارشات</Link></li>
                                                                    <li><Link to="/contact"> ارتباط</Link></li>
                                                                    <li><Link to="#">رویداد ها</Link></li>
                                                                    <li><Link to="#">محبوب</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                    <div className="footer__widget">
                                                        <div className="footer__widget-title footer__widget-title-4">
                                                            <h4>خدمات ما</h4>
                                                        </div>
                                                        <div className="footer__widget-content">
                                                            <div className="footer__link footer__link-4">
                                                                <ul>
                                                                    <li><Link to="#">نقشه ها</Link></li>
                                                                    <li><Link to="#">شرایط خصوصی</Link></li>
                                                                    <li><Link to="/profile">حساب شما</Link></li>
                                                                    <li><Link to="#">جستجو پیشرفته</Link></li>
                                                                    <li><Link to="#">شرایط و وضعیت</Link></li>
                                                                    <li><Link to="/contact"> ارتباط با ما</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="footer__widget">
                                                    <div className="footer__widget-title footer__widget-title-4">
                                                        <h4>حساب من</h4>
                                                    </div>
                                                    <div className="footer__widget-content">
                                                        <div className="footer__link footer__link-4">
                                                            <ul>
                                                                <li><Link to="/about"> درباره ما </Link></li>
                                                                <li><Link to="#">اطلاعات تکمیلی</Link></li>
                                                                <li><Link to="#">شرایط خصوصی</Link></li>
                                                                <li><Link to="#">تخفیف</Link></li>
                                                                <li><Link to="#">سرویس مشتریان</Link></li>
                                                                <li><Link to="#">شرایط و وضعیت</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="footer__widget">
                                                    <div className="footer__widget-title footer__widget-title-4">
                                                        <h4>پرداخت و ارسال</h4>
                                                    </div>
                                                    <div className="footer__widget-content">
                                                        <div className="footer__link footer__link-4">
                                                            <ul>
                                                                <li><Link to="#">شرایط استفاده</Link></li>
                                                                <li><Link to="#">روش های پرداخت</Link></li>
                                                                <li><Link to="#">راهنمای ارسال</Link></li>
                                                                <li><Link to="#">موقیتی که ما ارسال میکنیم</Link></li>
                                                                <li><Link to="#">زمان دریافت محصول</Link></li>
                                                                <li><Link to="#">سریع السیر</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                                        <div className="footer__widget">
                                            <div className="footer__widget-title">
                                                <h4>عضویت در خبرنامه</h4>
                                            </div>
                                            <div className="footer__widget-content">
                                                <div className="footer__subscribe">
                                                    <p> <span>بپیوندید 40.00+ دنبال کننده</span> وهر آخر هفته کد های تخفیف دریافت کنید.</p>
                                                    <div className="footer__subscribe-form">
                                                        <form onSubmit={handleSubmit(onFormSubmit)}>
                                                            <input placeholder="آدرس ایمیل خود را وارد کنید ..."
                                                              id="sender_email"
                                                            //   type="email"
                                                              // value={data?.sender_email}
                                                              name="sender_email"
                                                              // value={data?.sender_email}
                                                            //   error={errors?.sender_email}
                                                            //   onChange={(e) =>
                                                            //     setData({ ...data, sender_email: e.target.value })} 
                                                                {...register("email")}

                                                                />
                                                                {errors?.email && (<p className="text-danger">{errors.email?.message}</p>)}
                                                            <button type="submit">دنبال کردن</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright footer__copyright-2 pt-30 pb-35 footer-bg-2">
                    <div className="container custom-container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="footer__copyright-text footer__copyright-text-2">
                                    <p>@کپی رایت <Link to="index.html" className="text-warning">توپیکو</Link> همه رزرو شده است.<Link to="#"  className="text-warning">تمپور.</Link></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="footer__payment f-left">
                                    <Link to="#" className="m-img"><img src={Config.icon + "" + "payment.png"}  alt=""/></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
        </footer> 
        }
       
        </>
    )
}
export default Footer;