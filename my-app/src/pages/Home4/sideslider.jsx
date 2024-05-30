import { useEffect } from "react";
import {owlCarousel} from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SideSlider = (props)=> {
    useEffect(()=>{
        window?.$('.top__reted-slider').owlCarousel({
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:500,
            items:6,
            navText:['<button><i class="fal fa-angle-left"></i></button>','<button><i class="fal fa-angle-right"></i></button>'],
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                767:{
                    items:1
                },
                992:{
                    items:1
                },
                1200:{
                    items:1
                },
                1600:{
                    items:1
                }
            }
        });
    },[])
    return (
        <>
            <div className="top__rated pt-30">
                <div className="section__head section__head-2">
                    <div className="section__title">
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="top__reted-slider owl-carousel mt-3">
                    <div className="top__rated-wrapper">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export {SideSlider};