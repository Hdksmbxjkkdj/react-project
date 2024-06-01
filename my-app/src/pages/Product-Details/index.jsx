import { ProductSlider } from '../Home1/best-selling/product-slider';
import { BrandSlider } from './BrandSlider';
import { ModalContent } from './ModalContent';
import { ProductDetailsDesTab } from './ProductDetailsDesTab';
import { ProductDetailsWrapper } from './ProductDetailsWrapper';
import {ProducDetailsImg} from './ProductDetailsnav';
import { SectionHead } from './SectionHead';
import { TabContent } from './TabContent';

export const ProducDetails= () =>{
    return<>
    <main>
    <section className="product__area box-plr-75 pb-70">
    <div className="container-fluid">
            <div className="row">
                <ProducDetailsImg />
                <ProductDetailsWrapper />
            </div>
            <div className="row">
                <ProductDetailsDesTab />
            </div>
            
            <div className="row">
                 <TabContent />
            </div>
        </div>
        </section>

       
        <section className="product__area box-plr-75 pb-20">
            <div className="container-fluid">
                <div className="row">
                    <SectionHead />
                </div>
                <div classNameName="row">
                    <ProductSlider />
                </div>
            </div>
        </section>

        <section className="brand__area">
            <div className="container custom-container">
                <div className="row align-items-center">
                    <BrandSlider />
                </div>
            </div>
         </section>


        <div class="modal fade" id="productModalId" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered product__modal" role="document">
                    <ModalContent
                     />
                </div>
        </div>
    </main>
   
    </>
}