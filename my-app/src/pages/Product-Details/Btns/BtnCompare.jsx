import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt,faSlidersH } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CardContext";
import { Notif } from "../../../Utils";
import{BtnShareBody} from "./BtnShareBody"
export const BtnCompare = ({item}) => {
    console.log(item,'llll')
    const { cart } = useContext(CartContext);
    const { row, setrow } = useContext(CartContext);
    const [checker, setChecker] = useState([]);
    useEffect(() => {
      const user = localStorage.getItem("user");
      const use = JSON.parse(user);
      axios.get(`http://localhost:313/wishlist?Uid=${use?.id}`).then((res) => {
        res?.data.filter((el) => {
          el.Pid == item?.id && setChecker([...checker, item]);
        });
      });
    }, [row]);
    function Checking() {
      let check = false;
      cart.filter((el) => {
        if (el.id == item.id) {
          check = true;
        }
      });
      return check;
    }
    
    const [user, setUser] = useState();
    const u = localStorage.getItem("user");
    const use = JSON.parse(u);
    useEffect(() => {
      axios.get(`http://localhost:313/register/?id=${use?.id}`).then((res) => {
        setUser(res?.data[0]?.id);
      });
    }, []);
    let compare = [];
  function handleCompare() {
    console.log('test1')
    if (localStorage.getItem("compare")==null) {
      localStorage.setItem("compare", []);
      console.log('null')
    }
    if(localStorage.getItem("compare").length>6)
    {
      Notif("warning","تعداد محصولات نمیتواند بیش تر از 4 تا باشد")
      console.log("warning","تعداد محصولات نمیتواند بیش تر از 4 تا باشد")
      return
    }
    compare = localStorage.getItem("compare").split(",");
    compare = [...compare, item.id];
    localStorage.setItem("compare", compare);
    Notif("success",`${item.title} به مقایسه اضافه شد`)
  }
  return (
    <>
               <a href="#" title="Compare">
              <i className="fa fa-sliders-h" onClick={handleCompare}></i>
            </a>
     
    </>
       
  );
};
