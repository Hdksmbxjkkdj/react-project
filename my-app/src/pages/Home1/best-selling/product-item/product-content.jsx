import { Rate } from "../../../Product-Details/RateSubmit/Rate";

const ProductContent = ({type,item})=> {
    return (
        <>
            <div className="product__content">
          <h6 className="product-name">
            <span className="product-item-link">
              {
                item?.text
              }
            </span>
          </h6>
          <Rate stars={item?.rate} type="comment" className={(type!="flex")&&"justify-content-center"}/>
          <span className="price d-block">تومان {item?.price}</span>
        </div>
        </>
    )
}

export {ProductContent};