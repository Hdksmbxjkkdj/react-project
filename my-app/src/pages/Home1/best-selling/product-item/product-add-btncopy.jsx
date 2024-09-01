import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { AddToCart } from "../../../Cart/AddToCart";
import { RemoveCartItem } from "../../../Cart/RemoveCartItem";
import { ButtonLoader } from "../../../Components/ButtonLoader";
const ProductAddbtn = (props) => {
 
  const { cart, setCart } = useContext(CartContext);
  const [check, setCheck] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    cart.filter((el) => {
      if (el.id == props?.item?.id) {
        setCheck([...check, props?.item]);
      }
    });
  }, [cart]);
  function handleAddClick(event, props) {
    setLoading(true);
    AddToCart(
      event,
      props.item?.id,
      props.item?.pic,
      props.item?.text,
      props.item?.price,
      1,
      setCart,
      cart,
      setLoading
    );
  }
  function handleRemoveClick(event, props) {
    setLoading(true);
    RemoveCartItem(
      event,
      props.item?.id,
      props.item?.text,
      setCart,
      setLoading,
      "error",
      false
    );
  }
  const NotInCart = () => {
    //css number
    useEffect(() => {
      window
        ?.$(".cart-plus-minus")
        .append(
          '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
        );
      window?.$(".qtybutton").on("click", function () {
        var $button = window?.$(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
      });
    }, []);
    //css number
    //حذف div تعداد محصولات
const changeCss=(event)=>{
  // window?.(event.target).parent().find('.product-quantity').css("backgroundColor","red")
   window?.$(event.target).parent().parent().find(".cart-plus-minus").css({"display":"none"})

}

//حذف div تعداد محصولات
    switch (props.type){
      case 'productDetails': 
        return (
          <>
             <form action="#">
                <div className="pro-quan-area d-lg-flex align-items-center">
                  <div className="product-quantity mr-20 mb-25">
                    <div className="cart-plus-minus p-relative">
                      <input type="text" value="1" />
                    </div>
                  </div>
                <div className="pro-cart-btn mb-25 me-3">
            <div
              className={
                props.className
                  ? props.className
                  : props.type == "show"
                  ? "t-y-btn t-y-btn-2 mt-2"
                  : "product__add-btn"
              }
            >
              {(loading)?<ButtonLoader>درحال افزودن</ButtonLoader>:<button
                type="button"
                onClick={(event) =>{handleAddClick(event,props);changeCss(event)
                }
                }
                disabled={props.disabled}
              >
                 افزودن به سبد خرید<i className="fa fa-shopping-basket"></i>
              </button>}
            </div>
            </div> 
                </div>
              </form>
            
          </>
        );
        case 'modal': 
        return (
          <>
              <form action="#">
                            <div className="pro-quan-area d-lg-flex align-items-start">
                              <div className="product-quantity  mb-25">
                                <div className="cart-plus-minus p-relative">
                                  <input type="text" value="1" />
                                </div>
                              </div>
                              <div className="pro-cart-btn mb-25">
            <div
              className={
                props.className
                  ? props.className
                  : props.type == "show"
                  ? "t-y-btn t-y-btn-2 mt-2"
                  : "product__add-btn"
              }
            >
              {(loading)?<ButtonLoader>درحال افزودن</ButtonLoader>:<button
                 style={{fontSize:"0.7rem"}}
                type="button"
                onClick={(event) =>{handleAddClick(event,props);changeCss(event)
                }
                }
                disabled={props.disabled}
              >
                 افزودن به سبد خرید<i className="fa fa-shopping-basket"></i>
              </button>}
            </div>
            </div> 
                </div>
              </form>
            
          </>
        );
      
        default:
          return (
      
            <>
              <div
                className={
                  props.className
                    ? props.className
                    : props.type == "show"
                    ? "t-y-btn t-y-btn-2 mt-2"
                    : "product__add-btn"
                }
              >
                {(loading)?<ButtonLoader>درحال افزودن</ButtonLoader>:<button
                  type="button"
                  onClick={(event) =>
                    handleAddClick(event,props)
                  }
                  disabled={props.disabled}
                >
                  خرید شماافزودن به سبد <i className="fa fa-shopping-basket"></i>
                </button>}
              </div>
              
            </>

          );
    }
  
  };
  const StillInCart = () => {
    return (
      <>
        <div
          className={
            props.className
              ? props.className
              : props.type == "show"
              ? "t-y-btn t-y-btn-2 mt-2"
              : "product__add-btn"
          }
        >
          {(loading)?<ButtonLoader>درحال حذف</ButtonLoader>:<button
            type="button"
            style={{ textDecoration: "line-throught" }}
            onClick={(event) => handleRemoveClick(event, props)}
          >
            حذف از سبد <i className="fa fa-trash"></i>
          </button>}
        </div>
      </>
    );
  };
  return <>{check.includes(props?.item) ? <StillInCart /> : <NotInCart />}</>;
};

export { ProductAddbtn };
