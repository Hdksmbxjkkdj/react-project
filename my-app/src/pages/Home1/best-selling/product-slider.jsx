import { ProductItem } from "./product-item/product-item";
import { useEffect } from "react";
import owlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProductSlider = () => {
  useEffect(() => {
    window?.$(".product__slider").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 500,
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
  return (
    <>
      <div className="product__slider owl-carousel">
        <ProductItem></ProductItem>
      </div>
    </>
  );
};

export { ProductSlider };
