import axios from "axios";
import { useEffect, useState } from "react";
import { Config, Notif } from "../../Utils";
import {Rate} from "../Product-Details/RateSubmit/Rate"
import { Link } from "react-router-dom";

export const Commparison = () => {
  const local = localStorage.getItem("compare");
  const [items, setItems] = useState();
  const [compare,setComapre] = useState(local)
  useEffect(() => {
    axios.get(`http://localhost:313/best_selling`).then((response) => {
      setItems(response);
    });
  }, [compare]);
    function handleDelete(item)
    {
        var u = local.split(",").filter(el=>el!=item.id)
        localStorage.setItem("compare",u);
        setComapre(localStorage.getItem("compare"));
        Notif("success",`${item.title} با موفقیت از لیست مقایسه  پاک  شد`)
    }
    let comp = local?.split(",");
    let rep; 
      rep= items?.data.filter((el) => {
        if(comp!==undefined)
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
          {(local==null||local=="")?<div className="text-center"><img src="./img/images/compare.png" width={200} alt="compare" /><p className="text-center my-5 text-danger">هیچ محصولی جهت مقایسه وجود ندارد</p><Link to="/" className="btn btn-primary text-light my-3 p-4">بازگشت به صفحه اصلی</Link></div>:<table className="table table-hover w-100 text-center">
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
                    <Rate stars={item.rate} className="text-warning" type="comment"/>
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
