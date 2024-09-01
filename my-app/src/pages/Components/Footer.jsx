 import { config } from "@fortawesome/fontawesome-svg-core";
import { Config,Notif } from "../../Utils";
import { useState,useEffect } from "react";
import { Input } from "../../Compont/Forms";
import { useForm } from "react-hook-form";
import axios from "axios";
const Footer = ()=>{
    //
   
  
   
    let eMessage = "error_message";
    let sMessage = "success_message";

  
      //لاگین بودن کاربر
  //
 
 
  //
    const [errors, setErrors] = useState();
    console.log(errors,'errors')
    const [data, setData] = useState({
    
    });
    const {reset} = useForm({
    });
    useEffect(() => {
        return () => {
            reset();
        };
      }, []);
    const [error, setError] = useState();
    let url = `http://localhost:313/khabarname`;
    const submit = async (e) => {
      e.preventDefault();
      // if (user != null) {
      //  if(data?.sender_name!=null){
             // clearErrors()
  
             await axios
             .post(url, {
             
               // sender_email: auth ? auth.email : "",
            //    sender_email: user.id,
            email:data.sender_email,
            //    date: today,
               
             })

             .then((response) => {
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
               setError(errors?.response.data?.errors);
             });
     
            errors?.length > 0 && Notif('error', eMessage)
     
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
                                                        {/* <a href="index.html"><img src="assets/img/shop/product/cart/cart-mini-1.jpg" alt=""/></a> */}
                                                        {/* <a href="index.html"><img src="../../img/logo/logo-black.png" alt=""/></a> */}
                                                        <a href="index.html"><img src={Config.logo + "" + "logo-white.png"} alt=""/></a>
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
                                                                        <a target="_blank" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">آمریکا ، نیویورک ، منهتن ، خیابان والز استریت ، پلاک 68</a>
                                                                    </span>
                                                            </li>
                                                            <li><span>ایمیل: <a href="/cdn-cgi/l/email-protection#e881868e87a89c808d8a9d8d9b8391c68b8785"><span className="__cf_email__" data-cfemail="e28b8c848da2968a8780978791899bcc818d8f">[info@gmail.com]</span></a>
                                                                </span>
                                                            </li>
                                                            <li><span>فکس: <a href="tel:123-456-7890">(+100) 123 456 7890</a> - <a href="tel:-100-123-456-7891">(+100) 123 456 7891</a> </span></li>
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
                                                                    <li><a href="#"> سرویس مشتریان </a></li>
                                                                    <li><a href="#">F.A.Q.’s</a></li>
                                                                    <li><a href="#">ثبت سفارشات</a></li>
                                                                    <li><a href="#"> ارتباط</a></li>
                                                                    <li><a href="#">رویداد ها</a></li>
                                                                    <li><a href="#">محبوب</a></li>
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
                                                                    <li><a href="#">نقشه ها</a></li>
                                                                    <li><a href="#">شرایط خصوصی</a></li>
                                                                    <li><a href="#">حساب شما</a></li>
                                                                    <li><a href="#">جستجو پیشرفته</a></li>
                                                                    <li><a href="#">شرایط و وضعیت</a></li>
                                                                    <li><a href="#"> ارتباط با ما</a></li>
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
                                                                <li><a href="#"> درباره ما </a></li>
                                                                <li><a href="#">اطلاعات تکمیلی</a></li>
                                                                <li><a href="#">شرایط خصوصی</a></li>
                                                                <li><a href="#">تخفیف</a></li>
                                                                <li><a href="#">سرویس مشتریان</a></li>
                                                                <li><a href="#">شرایط و وضعیت</a></li>
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
                                                                <li><a href="#">شرایط استفاده</a></li>
                                                                <li><a href="#">روش های پرداخت</a></li>
                                                                <li><a href="#">راهنمای ارسال</a></li>
                                                                <li><a href="#">موقیتی که ما ارسال میکنیم</a></li>
                                                                <li><a href="#">زمان دریافت محصول</a></li>
                                                                <li><a href="#">سریع السیر</a></li>
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
                                                        <form action="#">
                                                            <input type="email" placeholder="آدرس ایمیل خود را وارد کنید ..."
                                                              id="sender_email"
                                                              required
                                                              // value={data?.sender_email}
                                                             
                                                             
                                                              name="sender_email"
                                                              // value={data?.sender_email}
                                                              error={errors?.sender_email}
                                                              onChange={(e) =>
                                                                setData({ ...data, sender_email: e.target.value })} />
                                                            <button type="submit"   onClick={(event) => submit(event)}>دنبال کردن</button>
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
                                    <p>@کپی رایت <a href="index.html" className="text-warning">توپیکو</a> همه رزرو شده است.<a href="#"  className="text-warning">تمپور.</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="footer__payment f-left">
                                    <a href="#" className="m-img"><img src={Config.icon + "" + "payment.png"}  alt=""/></a>

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