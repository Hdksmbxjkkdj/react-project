import { useEffect, useState } from "react";
import axios from "axios";
import {BrandSlider} from "./BrandSlider";
import { ProductSlider } from '../Home1/best-selling/product-slider';
import { ModalContent } from './ModalContent';
import { ProductDetailsDesTab } from './ProductDetailsDesTab';
import { ProductDetailsWrapper } from './ProductDetailsWrapper';
import {ProducDetailsImg} from './ProductDetailsnav';
import { SectionHead } from './SectionHead';
import {SendComment } from './SendComment';
import { useParams } from "react-router-dom";
import { TabContent } from "../Home1/best-selling/tab-content";

export const ProducDetails= () =>{
    //tab
    const[tab,setTab]=useState(2)
    const change =(index) => {
       setTab(index)
       console.log(tab)
    }

    //tab
    
    const {id} = useParams()
    const [img,setImag] = useState();
    useEffect(() => {
       
            axios.get(`http://localhost:313/best_selling/${id}`).then((res) => {

            setImag(res);
        });
    }, []);
    const [info, setInfo] = useState();
    useEffect(() => {
            axios.get(`http://localhost:313/product_comments`).then((res) => {

            setInfo(res);
        });
    }, []);
  

    return<>
        <main>
            <section className="product__area box-plr-75 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <ProducDetailsImg item={img?.data?.pic} picturs={img?.data?.gallery} /> 
                        <ProductDetailsWrapper item={img?.data?.name} price={img?.data?.unitprice} newprice={img?.data?.NewPrice} oldprice={img?.data?.OldPrice} sku={img?.data?.sku} /> 
                    </div>
                    <div className="row">
                        <ProductDetailsDesTab tab={tab} setTab={setTab} change={change}/> 
                    </div>
                    
                    <div className="row">
                        {<SendComment  comment={info?.data?.comment} id={info?.data.id} tab={tab} setTab={setTab} change={change} /> }
                    </div>
                </div>
            </section>
          
            <SectionHead />    
            <BrandSlider/> 
                      
            <div className="modal fade in" id="productModalId" tabindex="-1" role="dialog" aria-hidden="false">
                    <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                        <ModalContent  />
                    </div>
            </div>
        </main>
    </>
}