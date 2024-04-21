// import slider1 from '../../../img/slider/01/slider-1.jpg';
// import slider2 from '../../../img/slider/01/slider-2.jpg';

import { useEffect } from "react";

// import slider3 from '../../../img/slider/01/slider-3.jpg';
const Slider = () => {
    // mainSlider();
  return (
    <>
      <div class="slider__inner slider-active">
        <div class="single-slider w-img">
          <img src={"./img/slider/01/slider-1.jpg"} alt="slider" />
        </div>
        {/* <div class="single-slider w-img">
          <img src={slider2} alt="slider" />
        </div>
        <div class="single-slider w-img">
          <img src={slider3} alt="slider" />
        </div> */}
      </div>
    </>
  );
};

export {Slider};