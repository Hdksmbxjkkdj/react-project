import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Notif } from "../../../Utils";
import { CartContext } from "../../../context/CardContext";

export const AddressDetails = () => {
  const { address, setAddress } = useContext(CartContext);
  const [newAddress, setNewAddress] = useState();
  let user ="";
  if (localStorage.getItem("user")) {
    user = localStorage.getItem("user");
    user = JSON.parse(user).id;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = async (data) => {
    let status = 201;
    try {
      axios
        .post("http://localhost:313/address", {
          email: user,
          address: data.address,
        })
        .then((res) => {
          setAddress([...address, res?.data]);
          if (res.status) status = res.status;
          if (status === 201) {
            Notif("success", "آدرس شما با موفقیت ثبت شد");
          } else {
            Notif("خطایی رخ داده است !");
          }
        });
    } catch (error) {
      Notif("error", "عملیات با شکست مواجه شد !");
      return;
    }
  };
  const errorOption = {
    address: {
      required: "فیلد آدرس نمیتواند خالی باشد",
    },
  };
  async function handleDelete(e, item) {
    e.preventDefault();
    let status = 200;
    try {
      await axios.delete(`http://localhost:313/address/${item.id}`);
      axios.get("http://localhost:313/address").then((res) => {
        Notif("success", "آدرس با موفقیت حذف شد !");
        setAddress(res?.data);
      });
    } catch (error) {
      Notif("error", "خطا ناشناخته رخ داده است !");
    }
  }
  function handleChange(e, add) {
    e.preventDefault();
    Notif("info", "در نسخه آزمایشی در دسترس نیست !");
  }
  return (
    <>
      <p>این آدرس در زمان پرداخت سفارش شما استفاده میشود</p>
      {address.length > 0 ? (
        <ul className="my-3">
          {address?.map((add, index) => (
            <li className="my-3 d-flex justify-content-between px-5">
              <div>
                <span className="fw-bold text-dark">{`آدرس شماره ${
                  index + 1
                } : ${add.address}`}</span>
              </div>
              <div className="d-flex gap-3 edit">
                <span title="تغییر آدرس" onClick={(e) => handleChange(e, add)}>
                  <i className="fa fa-pencil text-info"></i>
                </span>
                <span title="حذف آدرس" onClick={(e) => handleDelete(e, add)}>
                  <i className="fa fa-times text-danger"></i>
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>تاکنون آدرسی ثبت نشده است</p>
      )}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          className="form-control p-2"
          name="address"
          placeholder="آدرس خود را وارد کنید"
          {...register("address", errorOption.address)}
        />
        <p className="text-danger" style={{ textAlign: "right" }} role="alert">
          {errors?.address && errors?.address.message}
        </p>
        <button label="ثبت آدرس" className="btn btn-primary p-3" type="submit">
          ثبت آدرس
        </button>
      </form>
    </>
  );
};
