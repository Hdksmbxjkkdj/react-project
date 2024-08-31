



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faBaseballBall } from "@fortawesome/free-solid-svg-icons";

export const ContactInfo = () =>{
    const ContactInfo = [
        {
          text:"اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.",
          serviceTime:"خط تلفن رایگان 24/7:",
          p_number:"(+100) 123 456 7890",
          address:"ایران ، قم ، میدان  رسالت ، خیابان بسیج ، بسیج1 ، پلاک **",
          e_mail:"info@gmail.com",
          fax:"(+100) 123 456 7890 - (+100) 123 456 7891",
          businessPhone:"025-38815648",
    
        }
      ]
    return<>
          <div className="col-xxl-4 col-xl-4 col-lg-5">
                        <div className="contact__info text-end " style={{"direction":'rtl'}}>
                            <h3 className="contact__title">دفتر اصلی ما</h3>
                            <p className="contact__text">{ContactInfo[0].text}</p>

                            <div className="contact__hotline d-flex align-items-center mb-35">
                                <div className="contact__hotline-icon mr-20">
                                <FontAwesomeIcon icon={faHeadset} style={{"fontSize":"35px", "color":"yellow"}}/>
                                </div>
                                <div className="contact__hotline-info">
                                    <span>{ContactInfo[0].serviceTime}</span>
                                    <h6><a href="tel:06-900-6789-00">{ContactInfo[0].businessPhone}</a></h6>
                                </div>
                            </div>
                            <div className="contact__address mb-20">
                                <ul>
                                    <li>
                                        <p><span>آدرس:</span>{ContactInfo[0].address}</p>
                                    </li>
                                    <li>
                                        <p><span>ایمیل:</span><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b2dbdcd4ddf2c6dad7d0c7d7c1d9cb9cd1dddf">[{ContactInfo[0].e_mail}</a></p>
                                    </li>
                                    <li>
                                        <p><span>فکس:</span><a href="tel:06-900-6789-00">{ContactInfo[0].fax}</a> - <a href="tel:06-900-6789-00">{ContactInfo[0].businessPhone}</a></p>
                                    </li>
                                    <li>
                                        <p><span>تلفن کاری: </span><a href="tel:06-900-6789-00">{ContactInfo[0].businessPhone}</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact__social">
                                <span>اشتراک اجتماعی:</span>
                                <ul>
                                    <li>
                                        <a href="#"> <FontAwesomeIcon icon={faBaseballBall} /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
    
    </>
}