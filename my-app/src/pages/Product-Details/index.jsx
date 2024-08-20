import { useEffect, useState } from "react";
import axios from "axios";
import {BrandSlider} from "./BrandSlider";
import { ModalContent } from './ModalContent';
import { ProductDetailsDesTab } from './ProductDetailsDesTab';
import { ProductDetailsWrapper } from './ProductDetailsWrapper';
import {ProducDetailsImg} from './ProductDetailsnav';
import { SectionHead } from './SectionHead';
import {SendComment } from './SendComment';
import { useParams } from "react-router-dom";
import { TabContent } from "../Home1/best-selling/tab-content";
import { Product } from "../Shop/Product";

export const ProducDetails= () =>{
    //tab
    const[tab,setTab]=useState(2)
    const change =(index) => {
       setTab(index)
    
    }

    //tab
    
    const {id} = useParams()
    
    const [img,setImag] = useState();
    useEffect(() => {
       
            axios.get(`http://localhost:313/best_selling/${id}`).then((res) => {

            setImag(res);
        });
    }, []);
   //
  
   
    const [info, setInfo] = useState();
    useEffect(() => {
            // axios.get(`http://localhost:313/product_comments`).then((res) => {
            axios.get(`http://localhost:313/product_comments`).then((res) => {

            setInfo(res);

        });
    }, []);
      //Number of comments
//    let url=`http://localhost:313/product_comments?product_id=`+ img?.data?.id
  let url=`http://localhost:313/product_comments?id=`+ id+`&_sort=date`
//    console.log('')
   const [ProductComment, setProductComment] = useState();
   useEffect(() => {
          axios.get(url).then((res) => {

                setProductComment(res);
        });
    }, []);
   
//        //Number of comments
    return<>
        <main>
            <section className="product__area box-plr-75 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <ProducDetailsImg item={img?.data?.pic} picturs={img?.data?.gallery} />  
                       <ProductDetailsWrapper item={img} commentNumber={ProductComment?.data?.length} /> 
                    </div>
                    <div className="row">
                        <ProductDetailsDesTab tab={tab} setTab={setTab} change={change} /> 
                    </div>
                    
                    <div className="row">
                   {<SendComment commentNumber={ProductComment?.data?.length}  ProductComment={ProductComment} comment={info?.data?.comment} id={id} tab={tab} setTab={setTab} change={change} productId={img?.data?.id} /> }
                    </div>
                </div>
            </section>
            <SectionHead commentNumber={ProductComment?.data?.length}  />    
            <BrandSlider/> 
        </main>
    </>
}