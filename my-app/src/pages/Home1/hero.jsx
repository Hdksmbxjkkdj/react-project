import slider1 from '../../img/slider/01/slider-1.jpg';
import slider2 from '../../img/slider/01/slider-2.jpg';
import slider3 from '../../img/slider/01/slider-3.jpg';
import banner1 from '../../img/banner/top/banner-top-1.jpg';
import banner2 from '../../img/banner/top/banner-top-2.jpg';
import {Sidebar} from './hero/sidebar';
import {Banner} from './hero/banner';

function Hero() {
    return (
        <>
            <section class="slider__area pt-50 pb-50">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-2 custom-col-2 d-none d-xl-block">
                            <Sidebar></Sidebar>
                        </div>
                        <div class="col-xl-10 custom-col-10 col-lg-12">
                            <div class="row">
                                <div class="col-xl-9 custom-col-9 col-lg-8">
                                    <div class="slider__inner slider-active">
                                        <div class="single-slider w-img">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                        {/* <div class="single-slider w-img">
                                            <img src={slider2} alt="slider"/>
                                        </div>
                                        <div class="single-slider w-img">
                                            <img src={slider3} alt="slider"/>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="col-xl-3 custom-col-3 col-lg-4 d-none d-md-block">
                                    <div class="banner__area">
                                        <div class="banner__item mb-20 w-img">
                                            <a href="product-details.html"><img src={banner1} alt=""/></a>
                                        </div>
                                        {/* <Banner props={banner1}></Banner> */}
                                        <div class="banner__item w-img">
                                            <a href="product-details.html"><img src={banner2} alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export {Hero};