import { useContext, useState } from "react";
import { CartContext } from "../../../context/CardContext";
import { MyModal } from "./MyModal";

export const OrderDetails = () => {
  const { order } = useContext(CartContext);
  const [myModal, setMyModal] = useState({
    order: {},
    show: false,
  });
  return (
    <div style={{ overflowX: "auto" }}>
      {order?.length > 0 ? (
        <div className="table-content table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ردیف</th>
                <th>کد سفارش</th>
                <th>تاریخ ثبت سفارش</th>
                <th>مبلغ کل تومان</th>
                <th>مرحله سفارش</th>
                <th>هزینه ارسال</th>
                <th>مشاهده جزییات</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.code}</td>
                    <td>{item.date}</td>
                    <td>{item.price} تومان</td>
                    <td>{item.stage}</td>
                    {item.shipping ? (
                      <td>{item.shipping} تومان</td>
                    ) : (
                      <td>رایگان</td>
                    )}
                    <td>
                      <button
                        className="btn btn-primary m-3"
                        onClick={() => setMyModal({ order: item, show: true })}
                      >
                        <i className="fa fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-5">
          <img src="./img/images/cart-empty.png" alt="" width={200} />
          <h4 className="text-danger text-center my-5">
            هنوز هیچ سفارشی ثبت نکرده اید !
          </h4>
        </div>
      )}
      {myModal.show && <MyModal order={myModal.order} setModal={setMyModal} />}
    </div>
  );
};
