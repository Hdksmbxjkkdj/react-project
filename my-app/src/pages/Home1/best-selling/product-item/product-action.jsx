import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CardContext";
import { ModalContext } from "../../../../context/modal";
import { RemoveWishList } from "../../../WishList/RemoveWishList";
import { AddToWishlist } from "./AddToWishlist";
import { Notif } from "../../../../Utils";
const ProductAction = ({ item }) => {
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
  const { modal, setModal } = useContext(ModalContext);
  function Set(e) {
    e.preventDefault()
    let incart = Checking();
    setModal({
      ...modal,
      title: item.text,
      des: item.des,
      img: item.pic,
      price: item.price,
      seccondimg: item.seccondpic,
      id: item.id,
      show: true,
      stars:item.rate
    });
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
  function handleCompare(e) {
    e.preventDefault();
    if (localStorage.getItem("compare")==null) {
      localStorage.setItem("compare", []);
    }
    if(localStorage.getItem("compare").length>6)
    {
      Notif("warning","تعداد محصولات نمیتواند بیش تر از 4 تا باشد")
      return
    }
    compare = localStorage.getItem("compare").split(",");
    if(compare.includes(item.id))
    {
      Notif("warning",'این محصول در لیست مقایسه قبلا اضافه شده')
      return
    }
    compare = [...compare, item.id];
    localStorage.setItem("compare", compare);
    Notif("success",`${item.title} به مقایسه اضافه شد`)
  }
  return (
    <>
      <div className="product__action p-absolute" key={Math.random()}>
        <ul>
          {!checker.includes(item) ? (
            <li>
              <a
                href="#"
                onClick={(event) => {
                  AddToWishlist(
                    event,
                    item.id,
                    item?.pic,
                    item?.text,
                    item?.price,
                    user,
                    setrow
                  );
                }}
                title="اضافه کردن به علاقه مندی ها"
              >
                <i
                  className={"far fa-heart"}
                ></i>
              </a>
            </li>
          ) : (
            <li>
              <a
                href="#"
                onClick={(event) =>
                  RemoveWishList(event, item.id, item.text, user, setrow, false)
                }
                title="حذف از علاقه مندی ها"
              >
                <i className="fa fa-heart text-danger"></i>
              </a>
            </li>
          )}
          <li>
            <a href="#" title="Quick View" onClick={(e)=>Set(e)}>
              <i className="fa fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Compare">
              <i className="fa fa-sliders-h" onClick={(e)=>handleCompare(e)}></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export { ProductAction };
