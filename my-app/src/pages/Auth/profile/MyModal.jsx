import { Config } from "../../../Utils";

export const MyModal = ({order,setModal}) => {
    console.log(order);
  return <div className="my-modal-overlay" onClick={()=>setModal(false)}>
    <div className="my-modal d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{`جزییات خرید ${order.code}`}</h5>
        <button>
          <i className="fa fa-times" onClick={()=>setModal(false)}></i>
        </button>
      </div>
      <div>
        <table>
          <tr>
            <th className="py-2">ردیف</th>
            <th className="py-2">تصویر</th>
            <th className="py-2">نام</th>
            <th className="py-2">تعداد</th>
            <th className="py-2">قیمت واحد</th>
            <th className="py-2">قیمت کل</th>
            <th className="py-2"> تاریخ</th>
          </tr>
          {order?.cart?.map((item, index) => {
            return (
              <tr>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">
                  <img src={`${Config.shop}${item.pic}`} width={60} alt="" />
                </td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">{item.unitprice} تومان</td>
                <td className="py-2">{item.total} تومان</td>
                <td className="py-2">{item.date}</td>
              </tr>
            );
          })}
        </table>
        <div className="mt-2">
          <p>{`به نام : ${order?.name} ${order?.family}`}</p>
          <p>{`به آدرس : ${order?.address}`}</p>
          <p>{`پیام شما : ${order?.text}`}</p>
          <p>{`به کد پستی : ${order?.zip_code}`}</p>
        </div>
      </div>
    </div>
  </div>;
};
