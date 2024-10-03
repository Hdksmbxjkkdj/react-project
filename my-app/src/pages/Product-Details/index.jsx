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
import { BradCrumb } from "./BeradCrumb";

export const ProducDetails= () =>{
    //responsive OwlCarousel
    var res1 = {
        item: 6,
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        767: {
          items: 2,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1600: {
          items: 6,
        },
      };
    //responsive OwlCarousel
    // const [information, setInformation] = useState();
    // const [start, setStart] = useState(0);


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
    const[lengthComment,setLengthComment]=useState()
    useEffect(() => {
            // axios.get(`http://localhost:313/product_comments`).then((res) => {
            axios.get(`http://localhost:313/product_comments`).then((res) => {
            setInfo(res);
            setLengthComment(res?.data?.length)
        });
    }, []);
      //Number of comments
      const [ProductComment, setProductComment] = useState();
      const [count, setCount] = useState();

//    let url=`http://localhost:313/product_comments?product_id=`+ img?.data?.id
  let url=`http://localhost:313/product_comments?id_product=`+ id+`&_sort=-id`
  
   useEffect(() => {
          axios.get(url).then((res) => {
                setProductComment(res);
                setCount(res?.data?.length)
        });
    }, []);
//        //Number of comments


//
// useEffect(() => {
//   getData()
// } , []);
//   const getData = async () => {

//   let params = new URLSearchParams(window.location.search);

//  await
//   axios.get(`http://localhost:313/product_comments?id_product=`+ id+`&_sort=-id&_start=${start}&_end=${start + 5}&${params}`).then((res) => {
//     setInformation(res);})
//   }
//
    return<>
        <main>
            <BradCrumb></BradCrumb>
            <section className="product__area box-plr-75 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <ProducDetailsImg item={img?.data?.pic} picturs={img?.data?.gallery} img={img?.data}/>  
                       <ProductDetailsWrapper item={img} count={count} /> 
                    </div>
                    <div className="row">
                        <ProductDetailsDesTab tab={tab} setTab={setTab} change={change} count={count}/> 
                    </div>
                    
                    <div className="row">
                   {<SendComment setCount={setCount} count={count}  items={img} item={ProductComment} setProductComment={setProductComment} setInfo={setInfo} lengthComment={lengthComment} setLengthComment={setLengthComment} commentNumber={ProductComment?.data?.length}  ProductComment={ProductComment} comment={info?.data?.comment} id={id} tab={tab} setTab={setTab} change={change} productId={img?.data?.id}/> }
                    </div>
                </div>
            </section>
            <SectionHead commentNumber={ProductComment?.data?.length} res1={res1}/>    
            <BrandSlider res1={res1}/> 
        </main>
    </>
}