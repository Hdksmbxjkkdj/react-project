import { useEffect, useState } from "react";
import { ProductItem } from "../best-selling/product-item/product-item";
import { ProductItemlg } from "../best-selling/product-item/product-item-lg";
import axios from "axios";
const TabPane = () => {
  const [item,setitem]=useState();
  useEffect(()=>{
    axios.get("http://localhost:313/best_selling").then((res)=>{
      setitem(res);
    })
  },[])
  return (
    <div
      className="tab-pane fade show active"
      id="computer"
      role="tabpanel"
      aria-labelledby="computer-tab"
    >
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6">
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[0]}></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[1]}></ProductItem>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 ">
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[2]}></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[3]}></ProductItem>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <div className="product__item-wrapper mb-20">
            <ProductItemlg slider={item?.data[4]}></ProductItemlg>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[5]}></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[6]}></ProductItem>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[1]}></ProductItem>
          </div>
          <div className="product__item-wrapper mb-20">
            <ProductItem slider={item?.data[3]}></ProductItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export {TabPane};