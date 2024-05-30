import React, { useState } from "react";
import {Product} from './Product';
const Shop = ({products}) => {
  
    return<>    
        {/* <div className="container"> */}
            {/* <div className="row"> */}
            <div className="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
                <div className="row">  
                    <Product items ={products}/>
                </div>
            </div>
      
        {/* </div>
        </div>  */}
       
    </>
}
export default Shop;