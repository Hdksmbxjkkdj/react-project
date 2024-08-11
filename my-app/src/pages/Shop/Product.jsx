import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Config } from "../../Utils";
import { Rank } from "../Components/Rank";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { AddToCart } from "../Cart/AddToCart";
import { ProductAddbtn } from "../Home1/best-selling/product-item/product-add-btn";
import { AddToWishlist } from "../Home1/best-selling/product-item/AddToWishlist";
import { ModalContext } from "../../context/modal";
import { ProductAction } from "../Home1/best-selling/product-item/product-action";
import { Modal } from "../Components/modal";

import { Local } from "../../Utils";
import { useParams } from "react-router-dom";
export const Product = ({
  items,
  setItems,
  showmodal,
  setshowmodal,
  closebtn,
  item,
}) => {
  //BTNCOLOR
  const [backgroundColor, setBackgroundColor] = useState();
  //BTNCOLOR
  return (
    <>
      {items?.data?.map((index) => {
        return (
          <>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
              <div className="product__item white-bg mb-30">
                <div className="product__thumb p-relative">
                  <a href={"/product/" + index.id} className="w-img">
                    <img src={Config.shop + "" + index.pic} alt="product" />
                  </a>

                  <Modal index={index}></Modal>
                </div>
                <div className="product__content text-center">
                  <h6 className="product-name">
                    <a
                      className="product-item-link"
                      href="product-details.html"
                    >
                      {index.text}
                    </a>
                  </h6>
                  <div className="rating">
                    <Rank></Rank>
                  </div>
                  <div class="product__sm-price">
                    <span className="price">{index.price}/000 تومان</span>
                  </div>
                </div>
                {/* <div className="product__add-btn">
                                <button type="button">Add to Cart</button>
                             </div>  */}
                <ProductAddbtn></ProductAddbtn>
              </div>
              {/* {showmodal&&<ModalContent closebtn={closebtn}>
         
                         </ModalContent>} */}
            </div>
          </>
        );
      })}
    </>
  );
};
export const ProductList = ({ items, setItems }) => {
  //comments
  const [id, setId] = useState();
  const btnid = (e) => {
    setId(e);
    // let url=`http://localhost:313/product_comments?product_id=`+id
  };

  // }, []);

  let url = `http://localhost:313/product_comments`;

  const [ProductComment, setProductComment] = useState();

  useEffect(() => {
    fetch();
  }, []);
  //comments

  const fetch = async () => {
    await axios.get(url).then((res) => {
      setProductComment(res.data);
    });
  };

  console.log(ProductComment);

  var comments_count = [];

  ProductComment?.map((comment, index) => {
    let newCount;
    if (comments_count[comment.product_id]) {
      newCount = parseInt(comments_count[comment.product_id]) + 1;
    } else {
      newCount = 1;
    }
    comments_count[comment.product_id] = newCount;
  });

  console.log(comments_count[1]);
  const eMessage = "errore_message";
  const local = Local();
  //BTNCOLOR
  const [backgroundColor, setBackgroundColor] = useState();
  //BTNCOLOR
  //BTNCOLOR
  const [Color, setColor] = useState();
  //BTNCOLOR
  const e = () => {};
  return (
    <>
      {items?.data?.map((index) => {
        return (
          <>
            <div className="col-xxl-12">
              <div className="product__item product__list white-bg mb-30 d-md-flex">
                <div className="product__thumb p-relative mr-20">
                  <a
                    href={"/product/" + index.id}
                    className="w-img"
                    onClick={() => btnid(index.id)}
                  >
                    <img src={Config.shop + "" + index.pic} alt="product" />
                    <img
                      className="second-img"
                      src={Config.shop + "" + index.seccondpic}
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
                      {index.text}
                    </a>
                  </h6>
                  <div
                    className="rating d-sm-flex d-lg-block d-xl-flex align-items-end"
                    style={{ direction: "rtl" }}
                  >
                    <Rank></Rank>
                    <div className="product-review-action ml-30">
                      <span>
                        <a
                          href={"/product/" + index.id}
                          onClick={() => {
                            setColor(Color === "red" ? "inherit" : "red");
                            id(index.id);
                          }}
                          style={{ Color: Color }}
                        >
                          {comments_count?.[index.id]}نظر
                        </a>
                      </span>
                      <span>
                        <a
                          href={"/product/" + index.id}
                          onClick={() => {
                            setColor(Color === "#fcb700" ? "red" : "#fcb700");
                            id(index.id);
                          }}
                          style={{ Color: Color }}
                        >
                          نظر خود را اضافه کنید
                        </a>
                      </span>
                    </div>
                  </div>
                  <span className="price">{index.price}/000تومان</span>
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
                    {/* <button className="t-y-btn mr-10">افزودن به سبد خرید</button>  */}
                    <button
                      className="t-y-btn mr-10"
                      type="button"
                      onClick={() => {
                        setBackgroundColor(
                          backgroundColor === "#fcb700" ? "red" : "#fcb700"
                        );
                      }}
                      style={{ backgroundColor: backgroundColor }}
                    >
                      سبد خرید +
                    </button>
                    {/* <button className="t-y-btn mr-10" onFocus={()=>{setBackgroundColor(backgroundColor==="#fcb700"?"red":"#fcb700")}}   style={{color:backgroundColor}} href="#" title="افزودن به علاقه مندی ها"></button> */}

                    <ul>
                      {/* <li><a  onClick={()=>AddToWishlist(item?.id,item?.pic,item?.text,item?.price)} href="#" title="افزودن به علاقه مندی ها"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a></li> */}

                      <li>
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
    </>
  );
};
