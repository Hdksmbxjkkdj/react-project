import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Input, Textarea } from "../../Compont/Forms";
import { Notif, User } from "../../Utils";
// import { useForm } from "react-hook-form";
import { useEffect,useState } from "react";
import axios from "axios";
//test
export const SendComment = ({comment }) => {

    // let local = Local()
    let auth = User()
    let loginMessage = 'first_login';
    let eMessage = 'error_message';
    let sMessage = 'success_message';
    const [errors, setErrors] = useState();

    // const { data, setData, post, processing, errors, setError, clearErrors, reset } = useForm({
    //     sender_name: auth ? auth.username ? auth.username : auth.full_name : '',
    //     sender_email: auth ? auth.email : '',
    //     comment: '',
    //     // blog_id: blog.id
    // });
    const [data, setData ] = useState({
        sender_name: auth ? auth.username ? auth.username : auth.full_name : '',
        sender_email: auth ? auth.email : '',
        comment: '',
    })
    const [error, setError] = useState();

    useEffect(() => {
        return () => {
            // reset();
        };
    }, []);
    let url = `http://localhost:313/row`

    const submit = async (e) => {
        e.preventDefault();
        console.log(data);

        if (auth) {
            // clearErrors()
            
            await axios.post(url, data).then((response) => {
                if (response.data?.status == 201) {
                    Notif('success', response.data?.message)
                    // reset()
                    return
                }
            }).catch((errors) => {
                setError(errors?.response.data?.errors)
            })

            // errors?.length > 0 && Notif('error', eMessage)

            return
        }

        Notif('error', loginMessage)
    };



//test

    return<>
    <div class="col-xxl-12">
    <div class="tab-content" id="prodductDesTaContent">
        <div class="tab-pane fade show active" id="des" role="tabpanel" aria-labelledby="des-tab">
            <div class="product__details-des-wrapper">
                <div class="product__details-des mb-20">
                    <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </div>
                <div class="product__details-des mb-20">
                    <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک</h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </div>
                <div class="product__details-des-banner w-img">
                    <img src="assets/img/shop/product/details/product-details-banner.jpg" alt="" />
                </div>
            </div>
        </div>

        
        <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
            <div class="product__details-review">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6">
                        <div class="review-wrapper">
                            <h3 class="block-title">نظرات مشتریان</h3>
                            {comment?.map((g)=>{

                                    return <>
                                            <div class="review-item">
                                                <h3 class="review-title">محصول فوق العاده</h3>
                                                        <div class="review-ratings mb-10">
                                                                    <div class="review-ratings-single d-flex align-items-center">
                                                                        <span>کیفیت</span>
                                                                        <ul>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar}/></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="review-ratings-single d-flex align-items-center">
                                                                        <span>قیمت</span>
                                                                        <ul>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="review-ratings-single d-flex align-items-center">
                                                                        <span>ارزش</span>
                                                                        <ul>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                                                        </ul>
                                                                    </div>
                                                        </div>
                                                        <div class="review-text">
                                                                    <p>{g?.comment}</p>
                                                        </div>
                                                        <div class="review-meta">
                                                                    <div class="review-author">
                                                                        <span>بررسی توسط</span>
                                                                        <span>{g?.name}</span>
                                                                    </div>
                                                                    <div class="review-date">
                                                                        <span>نوشته شده در</span>
                                                                        <span>{g?.date}</span>
                                                                    </div>
                                                        </div>
                                             </div>
                                    </>
                                   
            }
        )}
                            {/* <div class="review-item">
                                <h3 class="review-title">محصول فوق العاده</h3>
                                <div class="review-ratings mb-10">
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>کیفیت</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar}/></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>قیمت</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>ارزش</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="review-text">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک</p>
                                </div>
                                <div class="review-meta">
                                    <div class="review-author">
                                        <span>بررسی توسط</span>
                                        <span>شهنواز ساکیل</span>
                                    </div>
                                    <div class="review-date">
                                        <span>نوشته شده در</span>
                                        <span>1/21/20</span>
                                    </div>
                                </div>
                            </div>
                            <div class="review-item">
                                <h3 class="review-title">خوب</h3>
                                <div class="review-ratings mb-10">
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>کیفیت</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>قیمت</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>ارزش</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="review-text">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک </p>
                                </div>
                                <div class="review-meta">
                                    <div class="review-author">
                                        <span>بررسی توسط </span>
                                        <span>مایکل</span>
                                    </div>
                                    <div class="review-date">
                                        <span>نوشته شده در</span>
                                        <span>1/21/20</span>
                                    </div>
                                </div>
                            </div>
                            <div class="review-item">
                                <h3 class="review-title">بهترین محصولات</h3>
                                <div class="review-ratings mb-10">
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>کیفیت</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>قیمت</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                    <div class="review-ratings-single d-flex align-items-center">
                                        <span>ارزش</span>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faStar} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="review-text">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک </p>
                                </div>
                                <div class="review-meta">
                                    <div class="review-author">
                                        <span>بررسی توسط </span>
                                        <span>جانسون</span>
                                    </div>
                                    <div class="review-date">
                                        <span>نوشته شده در</span>
                                        <span>1/21/20</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>


                    <div class="col-xxl-4 col-xl-4 col-lg-4">
                        <div class="review-form">
                            <h3>بررسی شما</h3>
                            <p>سیب های سلطنتی گالا ارگانیک تایید شده استرالیا</p>
                            <form action="#" > 
                           
                                <div class="review-input-box mb-15 d-flex align-items-start">
                                    <h4 class="review-input-title">امتیاز شما</h4>
                                    <div class="review-input">
                                        <div class="review-ratings mb-10">
                                            <div class="review-ratings-single d-flex align-items-center">
                                                <span>کیفیت</span>
                                                <ul>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="review-ratings-single d-flex align-items-center">
                                                <span>قیمت</span>
                                                <ul>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="review-ratings-single d-flex align-items-center">
                                                <span>ارزش</span>
                                                <ul>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="review-input-box d-flex align-items-start">
                                    <h4 class="review-input-title">نام مستعار</h4>
                                    <div class="review-input">
                                    <Input id="sender_name" label='name' name="sender_name" value={data?.sender_name} error={errors?.sender_name}
                                            autoComplete="username" onChange={(e) => setData({...data , sender_name : e.target.value})} />
                                    </div>
                                </div>
                                <div class="review-input-box d-flex align-items-start">
                                    <h4 class="review-input-title">خلاصه</h4>
                                    <div class="review-input">
                                    <Input id="sender_email" label='email' name="sender_email" value={data?.sender_email} error={errors?.sender_email}
                                        autoComplete="useremail" onChange={(e) => setData({...data, sender_email: e.target.value})} />
                                    </div>
                                </div>
                                <div class="review-input-box d-flex align-items-start">
                                    <h4 class="review-input-title">مرور</h4>
                                    <div class="review-input">
                                    <Textarea id="comment" label='comment' name="comment" value={data?.comment} error={errors?.comment} placeholder='your_comment'
                                         autoComplete="username" onChange={(e) => setData({...data, comment: e.target.value})} />
                                    </div>
                                </div>
                                <div class="review-sub-btn">
                                    <button type="submit" class="t-y-btn t-y-btn-grey" onClick={(event) => submit(event)}>ارسال بررسی</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </>
}