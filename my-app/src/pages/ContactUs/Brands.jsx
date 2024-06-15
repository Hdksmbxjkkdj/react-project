import {Config} from '../../Utils'

export const BrandSlider = ()=>{
    return<>
          <section className="brand__area">
            <div className="container custom-container">
                <div className="row align-items-center">
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
                </div>
            </div>
        </section>
    </>
}