import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../../context/modal";
import { AddToWishlist } from "./AddToWishlist";
import axios from "axios";
const ProductAction = ({ item }) => {
  const [check, setCheck] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:313/wishlist").then((response) => {
      setCheck(response.data);
    });
  }, []);
  const { modal, setModal } = useContext(ModalContext);
  function Set() {
    setModal({
      ...modal,
      title: item.title,
      text: item.text,
      img: item.pic,
      price: item.price,
      seccondimg: item.seccondpic,
      id: item.id,
      show: true,
    });
  }

  const checking = (item) => {
    for (var i = 0; i < check.length; i++) {
      if (check[i].id == item?.id) {
        return true;
      } else {
        return false;
      }
    }
  };
  const [user,setUser] = useState()
    const u = localStorage.getItem("user");
  useEffect(() => {
     axios.get(`http://localhost:313/register/?username=${u}`).then((res) => {
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
              onClick={() =>
                AddToWishlist(item?.id, item?.pic, item?.text, item?.price, user)
              }
              title="Add to Wishlist"
            >
              <i
                className={
                  checking(item)
                    ? "text-danger fa-regular fa-heart"
                    : "fa-regular fa-heart"
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
