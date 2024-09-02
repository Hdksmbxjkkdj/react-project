import { faSearch, faSlidersH, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Config } from "../../../Utils";
import { CartContext } from "../../../context/CardContext";
import { AddToWishlist } from "../../Home1/best-selling/product-item/AddToWishlist";
import { RemoveWishList } from "../../WishList/RemoveWishList";
export const BtnLike = ({items})=>{

  
  //like btn
  const[item,setItem]=useState()

  
  const { cart } = useContext(CartContext);
  const { row, setrow } = useContext(CartContext);
  const [checker, setChecker] = useState([]);
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const use = JSON.parse(user);
  //   axios.get(`http://localhost:313/wishlist?Uid=${use?.id}`).then((res) => {
  //     res?.data.filter((el) => {
  //       el.Pid == items?.id && setChecker([...checker, items]);
  //     });
  //   });
  // }, [row]);

  const u = localStorage.getItem("user");
  const use = JSON.parse(u);
  useEffect(()=>{
          axios.get(`http://localhost:313/best_selling`).then((response)=>{
             setItem(response);

         });

      },[]);
    //like btn
    //color btnlike
    const[textColor,setTextColor]=useState("#696969")
    const[textColors,setTextColors]=useState("red")
    //color btnlike
    return (
        <>
            {!checker.includes(items) ? (
            <li>
              <a
                href="#"
                onClick={() =>{ 
                  AddToWishlist(
                    items.id,
                    items?.pic,
                    items?.text,
                    items?.price,
                    use.id,
                    setrow
                  );
                setTextColor(textColor==="#696969 "?"red":"#696969 ")}}
                title="افزودن به علاقه مندی ها"
                style={{color:textColor}}
              >
                
                
                <i
                  className={"fa-solid fa-heart"}
                ></i>
              </a>
            </li>
          ) : (
            <li>
              <a
                href="#"
                onClick={(event) =>{RemoveWishList(event,items.id,items.text,use.id,setrow,false);setTextColors(textColors==="red"?"#696969":"red")}}
                style={{color:textColors}}

                title="حذف از علاقه مندی ها"
              >
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>
          )}
            
           
           
        </>
    )
}