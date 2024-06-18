import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Config } from "../../Utils";
import { useEffect, useState } from "react"
import axios from "axios";

export const Rate = () =>{
    const [product,setProduct]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:313/FoodProducts`).then((res)=>{
            setProduct(res);
        });
    },[]);
    return<>                           
        {product?.data.map((item,i)=>{
            return <li class="product__sm-item d-flex align-items-center">
                        <div class="product__sm-thumb mr-20">
                            <a href="product-details.html">
                                    <img src={Config.sidebar + "" +item.pic} alt=""/>
                                </a>
                        </div>
                        <div class="product__sm-content">
                            <h3 class="product__sm-title">
                                <a href="#">{item.name}</a>
                            </h3>
                            <div class="rating">
                                 {/* <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
                                </ul>  */}
                            </div>
                            <div class="product__sm-price">
                                <span class="price">{item.price}</span>
                            </div>
                        </div>
                    </li>
            })
        } 
    </>
}