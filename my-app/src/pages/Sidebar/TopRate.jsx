import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Config } from "../../Utils";
import { useEffect, useState } from "react"
import axios from "axios";
import { Rank } from "../Components/Rank";
export const Rate = () =>{
    const [product,setProduct]=useState()
   
    // useEffect(()=>{
    //     axios.get(`http://localhost:313/FoodProducts`).then((res)=>{
    //         setProduct(res);
    //     });
    // },[]);
    //  allitems
     const[items,setItems]=useState()
  
     useEffect(()=>{
             axios.get(`http://localhost:313/best_selling?price_gt=500&price_lte=500`).then((response)=>{
                setItems(response);
          
            });
            },[]);
    return<>    
                            
        {items?.data.map((item,i)=>{
            
            return <li class="product__sm-item d-flex align-items-center">
                        <div class="product__sm-thumb mr-20">
                            <a href={"/product/"+item.id}>
                                    <img src={Config.sidebar +""+item.pic} alt=""/>
                                </a>
                        </div>
                        <div class="product__sm-content">
                            <h3 class="product__sm-title">
                                <a href="product-details.html">{item.text}</a>
                            </h3>
                            <div class="rating">
                                <Rank></Rank>
                            </div>
                            <div class="product__sm-price">
                                <span class="price">{item.price}/000تومان</span>
                            </div>
                        </div>
                    </li>
            })
        } 
    </>
}