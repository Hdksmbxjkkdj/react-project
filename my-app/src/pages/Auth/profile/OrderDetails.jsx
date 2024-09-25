import { useContext } from "react";
import { CartContext } from "../../../context/CardContext";

export const OrderDetails = () => {
  const {order} = useContext(CartContext)
  return (
    <>
      {(order?.length>0)?<table className="w-75">
        <tr>
          <th>ردیف</th>
          <th>کد سفارش</th>
          <th>تاریخ ثبت سفارش</th>
          <th>مبلغ کل تومان</th>
          <th>تعداد مرجوعی</th>
          <th>مرحله سفارش</th>
          <th>هزینه ارسال</th>
        </tr>
        {
          order?.map((item,index)=> {
            return <tr>
              <td>{index+1}</td>
              <td>{item.code}</td>
              <td>{item.date}</td>
              <td>{item.price} تومان</td>
              <td>{item.unorder} عدد</td>
              <td>{item.stage}</td>
              <td>{item.shipping} تومان</td>
            </tr>
          })
        }
      </table>
      :<div className="text-center mt-5">
        <img src="./img/images/cart-empty.png" alt="" width={200}/>
        <h4 className="text-danger text-center my-5">
        هنوز هیچ سفارشی ثبت نکرده اید !
      </h4>
        </div>}
    </>
  );
};
