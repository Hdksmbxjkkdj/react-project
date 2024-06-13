import { useEffect, useState } from "react";
import axios from "axios";

import { ProductSlider } from '../Home1/best-selling/product-slider';
// import { ProductSlider } from './ProductSlider';
import { BrandSlider } from './BrandSlider';
import { ModalContent } from './ModalContent';
import { ProductDetailsDesTab } from './ProductDetailsDesTab';
import { ProductDetailsWrapper } from './ProductDetailsWrapper';
import {ProducDetailsImg} from './ProductDetailsnav';
import { SectionHead } from './SectionHead';
import {SendComment } from './SendComment';
import { BestSelling } from '../Home1/best-selling';
import { useParams } from "react-router-dom";
export const ProducDetails= () =>{
    // let {id} = useParams();
    // id=id.slice(1);
    var id=7;
    const [info, setInfo] = useState();
    useEffect(() => {
        axios.get(`http://localhost:313/best_selling/${id}`).then((res) => {
            console.log(res);
            setInfo(res);
        });
    },[]);
    console.log(info);
    return<>
        <main>
            <section className="product__area box-plr-75 pb-70">
                <div className="container-fluid">
                    <div className="row">
                          <ProducDetailsImg item={info?.data?.pic} picturs={info?.data?.gallery} />
                        <ProductDetailsWrapper item={info?.data?.name} price={info?.data?.unitprice} newprice={info?.data?.NewPrice} oldprice={info?.data?.OldPrice} sku={info?.data?.sku} />
                    </div>
                    <div className="row">
                        <ProductDetailsDesTab />
                    </div>
                    
                    <div className="row">
                        <SendComment  comment={info?.data?.comment} id={info?.data.id} /> 
                    </div>
                </div>
            </section>
            <section className="product__area box-plr-75 pb-20">
                <div className="container-fluid">
                    <div className="row">
                        <SectionHead />
                    </div>
                </div>
            </section>
            <ProductSlider />
            <section className="brand__area">
                <div className="container custom-container">
                    <div className="row align-items-center">
                        <BrandSlider />
                    </div>
                </div>
            </section>         
            <div className="modal fade in" id="productModalId" tabindex="-1" role="dialog" aria-hidden="false">
                    <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                        <ModalContent  />
                    </div>
            </div>
        </main>
    </>
}