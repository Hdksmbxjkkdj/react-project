import { event } from "jquery";
import {AddToCart} from "../../../Cart/AddToCart";
import { useContext } from "react";
import { CartContext } from "../../../../context/CardContext";
import { useState } from "react";

const ProductAddbtn = (props) => {

  const {cart,setCart} = useContext(CartContext);
  return (
    <>
      <div className={(props.type=="show")?"t-y-btn t-y-btn-2 mt-2":"product__add-btn"}>
       
      {/* <a className="Add-to-Wishlist" onFocus={()=>{AddToWishlist(item?.id,item?.pic,item?.text,item?.price);setBackgroundColor(backgroundColor==="red"?"white":"red")}}   style={{backgroundColor:backgroundColor}} href="#" title="افزودن به علاقه مندی ها"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a> */}

        <button type="button" onClick={()=>AddToCart(event,props.item?.id,props.item?.pic,props.item?.text,props.item?.price,1,setCart,cart)}>سبد خرید +</button>
      </div>
    </>
  );
};

export { ProductAddbtn };
