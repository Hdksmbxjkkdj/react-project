import { faSearch, faSlidersH, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Config } from "../../../Utils";
import { CartContext } from "../../../context/CardContext";
import { AddToWishlist } from "../../Home1/best-selling/product-item/AddToWishlist";
import { RemoveWishList } from "../../WishList/RemoveWishList";
import { Rank } from "../RateSubmit/Rank";
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
    const [modal,setModal]=useState({
        id:"1",
        show:false
    })
    useEffect(()=>{
      (modal.show) && window?.$(`#${modal.id}`).modal("show");
    },[modal])
    function handleModal()
    {
      setModal({'id':items.id,'show':true})
    }
    return (
        <>
        {/* <Quick handleModal={handleModal}></Quick> */}

        <div className="product__action p-absolute">
            <ul>
            {!checker.includes(items) ? (
            <li>
              <a
                href="#"
                onClick={() => {
                  AddToWishlist(
                    items.id,
                    items?.pic,
                    items?.text,
                    items?.price,
                    use.id,
                    setrow
                  );
                }}
                title="افزودن به علاقه مندی ها"
              >
                
                
                <i
                  className={"fa-solid fa-heart text-success"}
                ></i>
              </a>
            </li>
          ) : (
            <li>
              <a
                href="#"
                onClick={(event) => RemoveWishList(event,items.id,items.text,use.id,setrow,false)}
                title="حذف از علاقه مندی ها"
              >
                <i className="fa-solid fa-heart text-danger"></i>
              </a>
            </li>
          )}
              <li> 
                <a href="#" title="نمایش سریع" onClick={handleModal}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </a> 
              </li>
              <li>
                <a href="#" title="مقایسه">
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