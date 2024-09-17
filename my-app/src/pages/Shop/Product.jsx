import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Config } from "../../Utils";
import { Pagination } from "../Components/pagination";
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btn";
import { BtnCompare } from "../Product-Details/Btns/BtnCompare";
import { BtnLike } from "../Product-Details/Btns/BtnLike";
import { Modal } from "../Product-Details/Modal/Modal";
import { Rate } from "../Product-Details/RateSubmit/Rate";
export const Product = ({
  items,
  setItems,
  showmodal,
  setshowmodal,
  closebtn,
  item,
}) => {
  //comments
  let url = `http://localhost:313/product_comments`;
  const [ProductComment, setProductComment] = useState();
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    await axios.get(url).then((res) => {
      setProductComment(res.data);
    });
  };

  var comments_count = [];

  ProductComment?.map((comment, item) => {
    let newCount;
    if (comments_count[comment.id_product]) {
      newCount = parseInt(comments_count[comment.id_product]) + 1;
    } else {
      newCount = 1;
    }
    comments_count[comment.id_product] = newCount;
  });

  //modal
  const [modal, setModal] = useState({ show: false, data: null, tittle: null });
  //modal
  return (
    <>
      {items?.data?.map((item) => {
      
        return (
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 home" id="#y" key={Math.random()}>
            <div className="product__item white-bg mb-30 k">
              <div className="product__thumb p-relative">
                <a href={"/product/" + item.id} className="w-img">
                  <img src={Config.shop + "" + item.pic} alt="product" />
                </a>
                <div className="product__action p-absolute">
                  <ul>
                    <BtnLike items={item}></BtnLike>
                    <li>
                      <a
                        href="#"
                        title="نمایش سریع"
                        onClick={() => setModal({ show: true, data: item })}
                      >
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                      </a>
                    </li>

                    <li>
                      <BtnCompare item={item}></BtnCompare>
                    </li>
                  </ul>
                
                </div>
              
              </div>
     
                
              <div className="product__content text-center">
                <h6 className="product-name">
                  <a className="product-item-link" href="product-details.html">
                    {item.text}
                  </a>
                </h6>
                <div className="rating">
                  <Rate stars={item?.rate} type="comment" className="ms-3" />
                </div>
                <div class="product__sm-price">
                  <span className="price">{item.price}/000 تومان</span>
                </div>
              </div>
              {/* <div className="product__add-btn">
                                <button type="button">Add to Cart</button>
                             </div>  */}
              <ProductAddbtn item={item}></ProductAddbtn>
            </div>

            {/* {showmodal&&<ModalContent closebtn={closebtn}>
         
                         </ModalContent>} */}
          </div>
        );
       
      })}
               {modal.show && (
          <Modal
            setModal={setModal}
            modal={modal}
            // commentNumber={comments_count?.[item.id]}
          >
          </Modal>
        )}

    </>
  );
};
export const ProductList = ({ items, setItems }) => {
  //comments
  let url = `http://localhost:313/product_comments`;
  const [ProductComment, setProductComment] = useState();

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    await axios.get(url).then((res) => {
      setProductComment(res.data);
    });
  };

  var comments_count = [];

  ProductComment?.map((comment, item) => {
    let newCount;
    if (comments_count[comment.id_product]) {
      newCount = parseInt(comments_count[comment.id_product]) + 1;
    } else {
      newCount = 1;
    }
    comments_count[comment.id_product] = newCount;
  });

  //  console.log(comments_count?.[items.id])

  return (
    <>
      {
      items?.data?.map((item) => {
        console.log(item,'item')
        return (
          <>
            <div className="col-xxl-12">
              <div className="product__item product__list white-bg mb-30 d-md-flex">
                <div className="product__thumb p-relative mr-20">
                  <a href={"/product/" + item.id} className="w-img">
                    <img src={Config.shop + "" + item.pic} alt="product" />
                    <img
                      className="second-img"
                      src={Config.shop + "" + item.seccondpic}
                      alt="product"
                    />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a
                      className="product-item-link"
                      href="product-details.html"
                    >
                      {item.text}
                    </a>
                  </h6>
                  <div
                    className="rating d-sm-flex d-lg-block d-xl-flex align-items-end"
                    style={{ direction: "rtl" }}
                  >
                    <Rate stars={item?.rate} type="comment" className="ms-3" />

                    <div className="product-review-action ml-30">
                      <span>
                        <a href={"/product/" + item.id}>
                          {/* {comments_count?.[item.id]}نظر */}
                          {comments_count?.[item.id] == 0
                            ? "نظری نیست"
                            : comments_count?.[item.id] + "نظر"}
                        </a>
                      </span>
                      <span>
                        <a href={"/product/" + item.id}>
                          نظر خود را اضافه کنید
                        </a>
                      </span>
                    </div>
                  </div>
                  <span className="price">{item.price}/000تومان</span>
                  <p className="product-text">
                    اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
                    به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                  </p>
                  <div className="product__list-features">
                    <ul>
                      <li>سویشرت یقه ای سبز روشن.</li>
                      <li>جیب های دستی</li>
                      <li>تناسب آرام.</li>
                      <li>ماشین لباسشویی/خشک کن.</li>
                    </ul>
                  </div>
                  <div className="product__action product__action-list d-sm-flex d-lg-block d-xl-flex align-items-center">
                    <ProductAddbtn item={item} className={"t-y-btn mr-10"} />

                    {/* <button className="t-y-btn mr-10" >افزودن به سبد خرید</button>  */}
                    {/* <button
                      className="t-y-btn mr-10"
                      type="button"
                      onFocus={() => {setBackgroundColor(backgroundColor === "#fcb700" ? "red" : "#fcb700");e()}}style={{ backgroundColor: backgroundColor }}
                    >
                      سبد خرید 
                    </button> */}

                    {/* <button className="t-y-btn mr-10" onFocus={()=>{setBackgroundColor(backgroundColor==="#fcb700"?"red":"#fcb700")}}   style={{color:backgroundColor}} href="#" title="افزودن به علاقه مندی ها"></button> */}

                    <ul>
                      {/* <li><a  onClick={()=>AddToWishlist(item?.id,item?.pic,item?.text,item?.price)} href="#" title="افزودن به علاقه مندی ها"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li> */}

                      <li className="me-3">
                        <a href="#" title="مقایسه کنید">
                          <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
                        </a>
                      </li>
                      {/* <li><a href="#" title="مقایسه کنید" onClick={()=>alert("هنوز این مورد وجود ندارد !")}><FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon></a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Pagination></Pagination>
    </>
  );
};
