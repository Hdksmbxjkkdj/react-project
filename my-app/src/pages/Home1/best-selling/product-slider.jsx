import { ProductItem } from "./product-item/product-item";
import { useEffect } from "react";
import { ProductItemflex } from "./product-item/product-item";
import { BlogItem } from "./product-item/blog-item";
import owlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductSlider = ({type}) => {
  useEffect(() => {
    window?.$(".product__slider").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1500,
      items: 6,
      navText: [
        '<button><i class="fa-angle-left"></i></button>',
        '<button><i class="fa-angle-right"></i></button>',
      ],
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 5,
        },
        1600: {
          items: 6,
        },
      },
    });
  }, []);
  
  if (type == "flex") {
    return (
      <>
        <div className="product__slider owl-carousel">
          <div className="product__item-wrapper">
            <ProductItemflex></ProductItemflex>
            <ProductItemflex></ProductItemflex>
          </div>
        </div>
      </>
    );
  }
  if (type== "blog")
  {
    return (
      <>
        <div className="product__slider owl-carousel">
          <div className="product__item-wrapper">
            <BlogItem></BlogItem>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="product__slider owl-carousel">
        <ProductItem type={"flex"}></ProductItem>
      </div>
    </>
  );
};

export { ProductSlider };
