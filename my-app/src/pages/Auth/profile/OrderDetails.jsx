export const OrderDetails = () => {
  return (
    <>
      <table className="w-75">
        <tr>
          <th>ردیف</th>
          <th>کد سفارش</th>
          <th>تاریخ ثبت سفارش</th>
          <th>مبلغ کل تومان</th>
          <th>تعداد مرجوعی</th>
          <th>مرحله سفارش</th>
          <th>جزییات</th>
        </tr>
        <tr></tr>
      </table>
      <h4 className="text-danger text-center my-5">
        هنوز هیچ سفارشی ثبت نکرده اید !
      </h4>
    </>
  );
};
