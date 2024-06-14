import {Config} from '../../Utils'

export const BrandSlider = ()=>{
    return<>
          <section class="brand__area">
            <div class="container custom-container">
                <div class="row align-items-center">
                    <div class="col-xl-12">
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
                </div>
            </div>
        </section>
    </>
}