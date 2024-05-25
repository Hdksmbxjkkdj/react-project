import React, { useState } from "react";
import {Product} from './Product';
const Shop = ({products}) => {
    console.log(products)
    return<>
        <div className="container">
            <div className="row">
        <Product items ={products}/>
       
        {/* {products.map(item =>
        {
            return <Product product={item}/>
        //  return <span>{i+"  "+item?.title}</span>
        })
        }   */}
        </div>
        </div> 
        {   
            // products.map(item =>
            //     {return<>
            //          <div className="container">
            //             <div className="row">
                       
            //                 <div  className="col-3">{item.title}</div>
            //                 <div className="col-3"> {item.price}</div>
            //                 <div className="col-3">
            //                     <img src={item.img} />
            //                     {/* <img src={item.img} alt=""/> */}
            //                 </div>
            //                 {/* <div className="col-3">{item.img}</div> */}
            //                 <div className="col-3">{item.id}</div>
            //             </div>
            //             </div>
            //             </>
            //             }
            // )   
        }
    </>
}
export default Shop;