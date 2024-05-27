import React, { useState } from "react";
import {Product} from './Product';
const Shop = ({products}) => {
  
    return<>
        <div className="container">
            <div className="row">
        <Product items ={products}/>
       
      
        </div>
        </div> 
       
    </>
}
export default Shop;