import {Config} from '../../Utils';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const BrandSlider = () =>{
    
    return<>
          <section className="brand__area">
                <div className="container custom-container">
                    <div className="row align-items-center">
                          <div className="col-xl-12">
                          <OwlCarousel
                              items="6"
                              loop
                              autoPlay
                          >
                            
                                    <div className='item brand__item'>
                                        <img src={Config.banner +"" +"brand-1.jpg"} alt="" />
                                    </div>
                                    <div className='item brand__item'>
                                        <img src={Config.banner +"brand-2.jpg"} alt="" />
                                    </div>
                                    <div className='item brand__item'>
                                        <img src={Config.banner +"brand-3.jpg"} alt="" />
                                    </div>
                                    <div className='item brand__item'>
                                        <img src={Config.banner +"brand-4.jpg"} alt="" />
                                    </div>
                            
                          </OwlCarousel>
                                      
                          </div>
                    </div>
               </div>
          </section>
          
    </>
}