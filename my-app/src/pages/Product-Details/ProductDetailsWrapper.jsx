import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { Rank } from "../Components/Rank";
import { AddToWishlist } from "../Home1/best-selling/product-item/AddToWishlist";
import { Rate } from "./RateSubmit/Rate";
import { CartContext } from "../../context/CardContext";
import{ProductAddbtn} from "../Home1/best-selling/product-item/product-add-btncopy";
import{BtnLike} from "./Btns/BtnLike"
import { BtnShare } from "./Btns/BtnShare";
import { BtnShareBody } from "./Btns/BtnShareBody";
import { BtnCompare } from "./Btns/BtnCompare";
import { BtnPrint } from "./Btns/BtnPrint";
export const ProductDetailsWrapper = ({item,commentNumber}) => {

  useEffect(() => {
    window
      ?.$(".cart-plus-minus")
      .append(
        '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
      );
    window?.$(".qtybutton").on("click", function () {
      var $button = window?.$(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  }, []);
//
const[show,setShow]=useState(false)
//
// const {cart,setCart} = useContext(CartContext);
// const [check,setCheck] = useState([]);
// useEffect(()=>{
//   cart.map(el=>{
//     if(el.id==item?.data?.id)
//       {
//         setCheck([...check,item?.data])
//       }
//   })
// },[])
//btnshare
const currentPageUrl = "tutorend.com";
const [modal, setModal] = useState(false);
const close = () =>{
  setModal(!modal)
}
//btnshare

//scroll 
const comment=()=>{
    window?.$('#review-tab').click()

    window.scrollTo({top: document.getElementById('productDesTab').offsetTop - 100, behavior: 'smooth'})
}
//scroll
  return (
    <>
      <div className="col-xxl-7 col-xl-7 col-lg-7">
        <div className="product__details-wrapper">
          <div className="product__details">
            <h3 className="product__details-title">
              {/* <a href="product-details.html">Smart Mobile Phone 7/7plus/8/8plus/X/Xr W 32 to 128GB</a> */}
              <a href="product-details.html">{item?.data.text}</a>
            </h3>
            <div className="product__review d-sm-flex">
              <div className="
              ">
               {/* <Rank></Rank> */}
               <Rate stars={item?.data?.rate} type="lg" className="ms-3" /> 

              </div>
              <div className="product__add-review mb-15" >
                <span>
                  {/* <a href="#">{{commentNumber}==0?"نظری وجود ندارد":{commentNumber}}</a> */}
                  <a href="#">{commentNumber==0?"نظری نیست":commentNumber+"نظر"}</a> 

                </span>
                <span>
                  <a href="javascript:void(0)" onClick={()=>comment()}>افزودن نظر</a>
                </span>
              </div>
            </div>
            <div className="product__price">
              <span className="new">{item?.data.price}/000تومان</span>
              <span className="old">{item?.data.oldprice==0?"این محصول تخفیف ندارد":item?.data.oldprice+"/000تومان"}</span>
            </div>
            <div className="product__stock">
              <span>دسترسی :</span>
              <span>{item?.data.number==0?"نا موجود":"در انبار"}</span>
            </div>
            <div className="product__stock sku mb-30">
              <span>برند:</span>
              <span>{item?.data.SKU}</span>
            </div>
            <div className="product__details-des mb-30">
              <p>
              {item?.data?.des}
              </p>
            </div>
            {item?.data.number==0?"": <div className="product__details-stock">
              <h3>
                <span>{item?.data.number==0?"":"عجله کن!"}</span>  {item?.data.number==0?"موجودی این محصول به پایان رسیده است":item?.data.number+"عدد محصول در انبار موجود است"}
              </h3>
              <div className="progress d-flex">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{width:`${item?.data?.number}%`,backgroundColor:"#fcb700",transition:"width 0.5s"}}
                  role="progressbar"
                  aria-valuenow="75"
                  // aria-valuenow={item?.data?.number}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-width="100%"
                ></div>
              </div>
            </div>}
           
            <div className="product__details-quantity mb-20">
              {/* <form action="#">
                <div className="pro-quan-area d-lg-flex align-items-center">
                  <div className="product-quantity mr-20 mb-25">
                    <div className="cart-plus-minus p-relative">
                      <input type="text" value="1" />
                    </div>
                  </div>
                <div className="pro-cart-btn mb-25 me-3"> */}
                    {/* <button className="t-y-btn" type="submit" onClick={()=>setShow({show:true})}>
                    به سبد خرید اضافه کنید
                    </button> */}
                  
                  {/* <ProductAddbtn item={item?.data} className={"t-y-btn"}/> */}
                  {/* <ProductAddbtn item={item?.data} className={"t-y-btn mr-10"}/> */}
                    <ProductAddbtn item={item?.data} className={"t-y-btn"} type={"productDetails"}></ProductAddbtn>
                  {/* </div> 
                </div>
              </form> */}
            </div>
            <div className="product__details-action" style={{position:"relative"}}>
              <ul>
                <BtnLike items={item?.data}></BtnLike>

                {/* <li>
                  <a href="#" title="افزودن به علاقه مندی ها">
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                  </a>
                </li> */}
                {/* <AddToWishlist item={item}></AddToWishlist> */}
                <li>
                 <BtnCompare item={item?.data}></BtnCompare>
                </li>
                <li>
                 <BtnPrint></BtnPrint>
                </li>
                {/* <li>
                  <a href="#" title="اشتراک گذاری">
                    <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                  </a>
                </li> */}
               <BtnShareBody></BtnShareBody>
              </ul>
              {/* {modal && (
        <BtnShareBody
          setModal={setModal}
          modal={modal}
        >
          </BtnShareBody>
      )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
