// import banner1 from '../../img/banner/top/banner-top-1.jpg';
// import banner2 from '../../img/banner/top/banner-top-2.jpg';
import {Sidebar} from './hero/sidebar';
import {Banner} from './hero/banner';
import {Slider} from './hero/slider';
import { Link } from 'react-router-dom';

function Hero(props) {
    return (
        <>
            <section className="slider__area pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 custom-col-2 d-none d-xl-block">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-xl-10 custom-col-10 col-lg-12">
                            <div className="row">
                                <div className="col-xl-9 custom-col-9 col-lg-8">
                                    <Slider></Slider>
                                </div>
                                <div className="col-xl-3 custom-col-3 col-lg-4 d-none d-md-block">
                                    <div className="banner__area">
                                        <div className="banner__item mb-20 w-img">
                                            <Link to="/product-details/7"><img src={"./img/banner/top/banner-top-1.jpg"} alt=""/></Link>
                                        </div>
                                        {/* <Banner props={banner1}></Banner>  */}
                                        <div className="banner__item w-img">
                                            <Link to="/product-details/4"><img src={"./img/banner/top/banner-top-2.jpg"} alt=""/></Link>
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