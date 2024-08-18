const ProductContent = ({type,item})=> {
    return (
        <>
            <div className="product__content text-rigth">
          <h6 className="product-name">
            <a className="product-item-link">
              {
                item?.text
              }
            </a>
          </h6>
          <div className="rating">
            <ul>
              {Array.from({length:item?.rate},(_,i)=>(
              <li>
                <a href="#">
                  <i className="fa fa-star"></i>
                </a>
              </li>
              ))}
            </ul>
            <span>{item?.rate}</span>
          </div>
          <span className="price d-block">تومان {item?.price}</span>
        </div>
        </>
    )
}

export {ProductContent};