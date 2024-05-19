import {AddToCart} from "../../../Cart/AddToCart";
const ProductAddbtn = (props) => {
  return (
    <>
      <div className="product__add-btn">
        <button type="button" onClick={()=>AddToCart(props.item?.id,props.item?.pic,props.item?.text,props.item?.price)}>Add to Cart</button>
      </div>
    </>
  );
};

export { ProductAddbtn };
