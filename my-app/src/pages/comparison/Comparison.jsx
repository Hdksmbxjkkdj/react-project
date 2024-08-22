import { useEffect, useMemo, useState } from "react";
import { Config, Notif } from "../../Utils";
import axios from "axios";

export const Commparison = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/best_selling`).then((response) => {
      setItems(response);
    });
  }, []);
  const local = localStorage.getItem("compare");
    function handleDelete(item)
    {
        var u = local.split(",").filter(el=>el!=item.id)
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
          {(local==null||local=="")?<div><p className="text-center my-5 text-danger">هیچ محصولی جهت مقایسه وجود ندارد</p></div>:<table className="table table-hover w-100 text-center">
            <thead>
            <tr style={{paddingBottom:"1rem !important"}}>
              <th>عنوان</th>
              {rep?.map((_, index) => {
                return <th>{`محصول ${index + 1}`}</th>;
              })}
            </tr>
            </thead>
            <tbody>
            <tr style={{paddingBottom:"1rem !important"}}>
              <td>تصویر</td>
              {rep?.map((item) => {
                return (
                  <td>
                    <img src={`${Config.shop}${item.pic}`} alt="" />
                  </td>
                );
              })}
            </tr>
            <tr style={{paddingBottom:"1rem !important"}}>
              <td>نام</td>
              {rep?.map((item) => {
                return <td>{item.title}</td>;
              })}
            </tr>
            <tr style={{paddingBottom:"1rem !important"}}>
              <td>درباره</td>
              {rep?.map((item) => {
                return <td>{item.text}</td>;
              })}
            </tr>
            <tr style={{paddingBottom:"1rem !important"}}>
              <td>قیمت</td>
              {rep?.map((item) => {
                return <td>{item.price} تومان</td>;
              })}
            </tr>
            <tr style={{paddingBottom:"1rem !important"}}>
              <td>امتیاز</td>
              {rep?.map((item) => {
                return (
                  <td>
                    {Array.from({length:item.rate},(_,i)=>{
                      return <i className="fa fa-star text-warning"></i>
                    })}
                  </td>
                );
              })}
            </tr>
            <tr style={{paddingBottom:"1rem !important"}}>
              <td>حذف</td>
              {rep?.map((item) => {
                return (
                  <td>
                    <button onClick={() => handleDelete(item)}>
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                );
              })}
            </tr>
            </tbody>
          </table>}
        </div>
      </>
    );
};
