import {Config} from '../../Utils';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const BrandSlider = () =>{
    
    return<>
     {/* <OwlCarousel
          loopProductItemflex
          items={4}
          className="owl-carousel owl-theme"
          nav
          {...Option}
          key={Math.random()}
        >
          {slider?.data?.map((item) => {
            return (
              <div className="product__item-wrapper">
                < slider={item}></ProductItemflex>
                <ProductItemflex slider={item}></ProductItemflex>
              </div>
            );
          })}
        </OwlCarousel> */}
           <div className="col-xl-12">
                        <div className="brand__slider owl-carousel">
                            <div className="brand__item">
                                <img src={Config.banner + "brand-1"} alt="" />
                            </div>
                            <div className="brand__item">
                                <img src={Config.brand+"brand-2"} alt="" />
                            </div>
                            <div className="brand__item">
                                <img src={Config.brand+"brand-3"} alt="" />
                            </div>
                            <div className="brand__item">
                                <img src={Config.brand+"brand-4"} alt="" />
                            </div>
                        </div>
                    </div>
    </>
}