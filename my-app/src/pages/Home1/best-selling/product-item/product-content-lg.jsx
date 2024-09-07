import { Link } from "react-router-dom";
import { ProductAddbtn } from "./product-add-btn";
import { Rate } from "../../../Product-Details/RateSubmit/Rate";

const ProductContentlg = ({item}) => {
  return (
    <div className="product__content text-center">
      <h6 className="product-name">
        <Link className="product-item-link" to={"/product-details/"+item?.id}>
          {item?.text}
        </Link>
      </h6>
      <div className="rating">
        <Rate stars={item?.rate} type="comment"/>
      </div>
      <span className="new mb-5">{item?.price} تومان</span>
      <span className="price-old mb-5">
        {" "}
        <del>{item?.oldprice} تومان</del>{" "}
      </span>
      <p>
        {item?.des}
      </p>
      <ProductAddbtn type="show" item={item}></ProductAddbtn>
    </div>
  );
};

export {ProductContentlg};