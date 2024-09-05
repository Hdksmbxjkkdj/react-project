import { Rate } from "../../../Product-Details/RateSubmit/Rate";

const ProductContent = ({type,item})=> {
    return (
        <>
            <div className="product__content">
          <h6 className="product-name">
            <a className="product-item-link">
              {
                item?.text
              }
            </a>
          </h6>
          <Rate stars={item?.rate} type="comment"/>
          <span className="price d-block">تومان {item?.price}</span>
        </div>
        </>
    )
}

export {ProductContent};