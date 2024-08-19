import { useEffect, useMemo, useState } from "react";
import { Config } from "../../Utils";
import axios from "axios";

export const Commparison = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/best_selling`).then((response) => {
      setItems(response);
    });
  }, []);
  const local = localStorage.getItem("compare");
    function handleDelete(id)
    {
        var u = local.split(",").filter(el=>el!=id)
        localStorage.setItem("compare",u);
        window.location.reload();
    }
    let comp = local.split(",");
    let rep; 
      rep= items?.data.filter((el) => {
        return (
          el.id == comp[1] ||
          el.id == comp[2] ||
          el.id == comp[3] ||
          el.id == comp[4]
        );
      });
    return (
      <>
        <div className="container">
          {(local==null||local=="")?<div><p className="text-center my-5 text-danger">هیچ محصولی جهت مقایسه وجود ندارد</p></div>:<table className="w-100">
            <tr>
              <th>عنوان</th>
              {rep?.map((_, index) => {
                return <th>{`محصول ${index + 1}`}</th>;
              })}
            </tr>
            <tr>
              <td>تصویر</td>
              {rep?.map((item) => {
                return (
                  <td>
                    <img src={`${Config.shop}${item.pic}`} alt="" />
                  </td>
                );
              })}
            </tr>
            <tr>
              <td>نام</td>
              {rep?.map((item) => {
                return <td>{item.title}</td>;
              })}
            </tr>
            <tr>
              <td>درباره</td>
              {rep?.map((item) => {
                return <td>{item.text}</td>;
              })}
            </tr>
            <tr>
              <td>قیمت</td>
              {rep?.map((item) => {
                return <td>{item.price} تومان</td>;
              })}
            </tr>
            <tr>
              <td>امتیاز</td>
              {rep?.map((item) => {
                return (
                  <td>
                    {" "}
                    <i className="fa fa-star"></i> {item.rate}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td>حذف</td>
              {rep?.map((item) => {
                return (
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                );
              })}
            </tr>
          </table>}
        </div>
      </>
    );
};
