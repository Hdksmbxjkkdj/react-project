import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../../context/modal";
import { AddToWishlist } from "./AddToWishlist";
import axios from "axios";
import { CartContext } from "../../../../context/CardContext";
const ProductAction = ({ item }) => {
  const {cart} = useContext(CartContext);
  const {wish} = useContext(CartContext);
  const [checker,setChecker] = useState([]);
  useEffect(()=>{
    const user = localStorage.getItem('user');
    const use = JSON.parse(user)
    axios.get(`http://localhost:313/wishlist?Uid=${use.id}`).then((res)=>{
      res?.data.filter(el=>{
        (el.Pid==item?.id) && setChecker([...checker,item])
      })
    })
    console.log(wish);
},[wish])
  function Checking() {
    let check = false;
    cart.filter(el=>{
      if(el.id == item.id)
      {
        check =  true
      }
    })
    return check
  }
  const [check, setCheck] = useState([]);
  const { modal, setModal } = useContext(ModalContext);
  function Set() {
    let incart = Checking()
    console.log(incart);
    setModal({
      ...modal,
      title: item.title,
      text: item.text,
      img: item.pic,
      price: item.price,
      seccondimg: item.seccondpic,
      id: item.id,
      show: true,
      inCart: incart
    });
  }
  const [user,setUser] = useState()
    const u = localStorage.getItem("user");
    const use = JSON.parse(u);
  useEffect(() => {
     axios.get(`http://localhost:313/register/?id=${use.id}`).then((res) => {
        setUser(res?.data[0]?.id)
      });
  }, []);
  return (
    <>
      <div className="product__action p-absolute" key={Math.random()}>
        <ul>
          <li>
            <a
              href="#"
              onClick={()=>{AddToWishlist(item.id, item?.pic, item?.text, item?.price, user)}
              }
              title="Add to Wishlist"
            >
              <i key={Math.random}
                className={
                  checker.includes(item)
                    ? "fa-solid fa-heart-circle-xmark text-success"
                    : "fa-solid fa-heart-circle-check text-success"
                }
              ></i>
            </a>
          </li>
          <li>
            <a href="#" title="Quick View" onClick={Set}>
              <i className="fa fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Compare">
              <i
                className="fa fa-sliders-h"
                onClick={() => alert("هنوز این مورد وجود ندارد !")}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export { ProductAction };
