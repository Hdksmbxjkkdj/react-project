import { AddToWishlist } from "./AddToWishlist";
const ProductAction = ({item})=> {
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
                <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId">
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Compare">
                  <i className="fa fa-sliders-h"></i>
                  
                </a>
              </li>
            </ul>
          </div>
        </>
    )
}

export {ProductAction};