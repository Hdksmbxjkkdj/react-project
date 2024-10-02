import { faSearch, faSlidersH, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Config } from "../../../Utils";
import { CartContext } from "../../../context/CardContext";
import { AddToWishlist } from "../../Home1/best-selling/product-item/AddToWishlist";
import { RemoveWishList } from "../../WishList/RemoveWishList";
import { Rank } from "../RateSubmit/Rank";
import { BtnLike } from "../Btns/BtnLike";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
export const Btns = ({items})=>{
  //like btn
  const[item,setItem]=useState()
  
  const { cart } = useContext(CartContext);
  const { row, setrow } = useContext(CartContext);
  const [checker, setChecker] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    const use = JSON.parse(user);
    axios.get(`http://localhost:313/wishlist?Uid=${use?.id}`).then((res) => {
      res?.data.filter((el) => {
        el.Pid == items?.id && setChecker([...checker, items]);
      });
    });
  }, [row]);

  const u = localStorage.getItem("user");
  const use = JSON.parse(u);
  useEffect(()=>{
          axios.get(`http://localhost:313/best_selling`).then((response)=>{
             setItem(response);

         });

      },[]);
    //like btn

   
 
  //number product
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
  //number product
    
    return (
        <>
      

        <div className="product__action p-absolute">
            <ul>
       <BtnLike items={item}></BtnLike>
              <li> 
                <a href="javascript:void(0)" title="نمایش سریع">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </a> 
              </li>
              <li>
                <a href="javascript:void(0)" title="مقایسه">
                  {/* <i className="fa fa-sliders-h" onClick={()=>alert("هنوز این مورد وجود ندارد !")}></i> */}
                  {/* <FontAwesomeIcon icon={faSlidersH} onClick={()=>alert("هنوز این مورد وجود ندارد !")}></FontAwesomeIcon> */}
                 <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>

                </a>
              </li>
            </ul>
        </div> 
        </>
    )
}