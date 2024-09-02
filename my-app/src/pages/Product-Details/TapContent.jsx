import { Config } from "../../Utils"
export const TapContent =({tab,setTab,change,items})=>{

    return<>
        <div className={tab === 1 ? "tab-pane fade" :"tab-pane fade show active"} id="des" role="tabpanel" aria-labelledby="des-tab">
            <div className="product__details-des-wrapper">
                {/* <div className="product__details-des mb-20">
                    <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                </div>*/}
                <div className="product__details-des mb-20">
                    <h3>{items?.data?.des}</h3>
                    <p>{items?.data?.MoreDtails}</p>
                </div> 
                
                <div className="product__details-des-banner w-img">
                    <img src={Config.shop + "product-details-banner.jpg"} alt="" />
                </div>
            </div>
        </div>
    </>
}