import { useContext, useEffect, useState } from "react";
import { AddToWishlist } from "./AddToWishlist";
import { ModalContext } from "../../../../context/modal";
import axios from "axios";
import { Notif } from "../../../../Utils/Notif";
const ProductAction = ({item})=> {
  const {modal,setModal} = useContext(ModalContext)
  function Set()
  {
    setModal({...modal,'title':item.title,'text':item.text,'img':item.pic,'price':item.price,'seccondimg':item.seccondpic,'id':item.id,'show':true})
  }
    return (
        <>
            <div className="product__action p-absolute">
            <ul>
              <li>
                <a href="#" onClick={()=>AddToWishlist(item?.id,item?.pic,item?.text,item?.price)} title="Add to Wishlist">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Quick View" onClick={Set}>
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Compare">
                  <i className="fa fa-sliders-h" onClick={()=>alert("هنوز این مورد وجود ندارد !")}></i>
                </a>
              </li>
            </ul>
          </div>
        </>
    )
}

export {ProductAction};