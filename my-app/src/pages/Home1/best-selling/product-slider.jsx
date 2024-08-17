import { ProductItem } from "./product-item/product-item";
import { useEffect, useState } from "react";
import { ProductItemflex } from "./product-item/product-item";
import { BlogItem } from "./product-item/blog-item";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";

const ProductSlider = ({ type, res, item,filt }) => {
  const [slider, setslider] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/best_selling").then((res) => {
      setslider(res);
    });
  }, []);
  const [blog, setblog] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/blog_slider").then((res) => {
      setblog(res);
    });
  }, []);
  const dataFilter = slider?.data.filter(function(el){
      return el.price<=filt
  })
  const Option = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    // items: 6,
    navText: [
      '<button><i class="fa fa-angle-left"></i></button>',
      '<button><i class="fa fa-angle-right"></i></button>',
    ],
    nav: true,
    dots: false,
    responsive: res,
    autoplayHoverPause: true,
  };
  // console.log(type);
  if (type == "flex") {
    return (
      <>
        <OwlCarousel
          loop
          // items={4}
          className="owl-carousel owl-theme"
          nav
          {...Option}
          key={Math.random()}
          style={{ direction: "ltr" }}
        >
          {slider?.data?.map((item) => {
            return (
              <div className="product__item-wrapper">
                <ProductItemflex slider={item}></ProductItemflex>
                <ProductItemflex slider={item}></ProductItemflex>
              </div>
            );
          })}
        </OwlCarousel>
      </>
    );
  }
  if (type == "blog") {
    return (
      <>
        <OwlCarousel
          className="owl-carousel owl-theme"
          // items={5}
          nav
          {...Option}
          key={Math.random()}
          style={{ direction: "ltr" }}
        >
          {blog?.data?.map((item) => {
            return (
              <div className="product__item-wrapper">
                <BlogItem blog={item}></BlogItem>
              </div>
            );
          })}
        </OwlCarousel>
      </>
    );
  }
  return (
    <>
      <OwlCarousel
        className="owl-carousel owl-theme"
        loop
        nav
        {...Option}
        key={Math.random()}
        style={{ direction: "ltr" }}
      >
        {dataFilter?.map((item) => {
          return <ProductItem slider={item} type={"flex"}></ProductItem>;
        })}
      </OwlCarousel>
    </>
  );
};

export { ProductSlider };
