import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";

const Slider = () => {
  const Option = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    dots: true,
  };
  return (
    <>
      <OwlCarousel
        items={1}
        className="owl-carousel owl-theme"
        {...Option}
        key={Math.random()}
        style={{ direction: "ltr" }}
      >
        <div className="single-slider w-img">
          <Link to="/">
            <img src={"./img/slider/01/slider-1.jpg"} alt="slider" />
          </Link>
        </div>
        <div className="single-slider w-img">
          <Link to="/">
            <img src={"./img/slider/01/slider-2.jpg"} alt="slider" />
          </Link>
        </div>
        <div className="single-slider w-img">
          <Link to="/">
            <img src={"./img/slider/01/slider-3.jpg"} alt="slider" />
          </Link>
        </div>
      </OwlCarousel>
    </>
  );
};

export { Slider };
