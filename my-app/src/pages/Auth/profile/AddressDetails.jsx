import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Notif } from "../../../Utils";
import { CartContext } from "../../../context/CardContext";

export const AddressDetails = () => {
    const {address,setAddress} = useContext(CartContext);
    console.log(address);
  let user = localStorage.getItem("user");
  user = JSON.parse(user).id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = async (data) => {
    let status = 201;
    try {
      axios
        .post("http://localhost:313/address", { id: user, address: data.address })
        .then((res) => {
          if (res.status) status = res.status;
          if (status === 201) {
            Notif("success", "آدرس شما با موفقیت ثبت شد");
          } else {
            Notif("خطایی رخ داده است !");
          }
        });
    } catch (error) {
      Notif("error", "عملیات با شکست مواجه شد !");
      console.error(error)
      return;
    }
  };
  const errorOption = {
    address: {
      required: "فیلد آدرس نمیتواند خالی باشد",
    },
  };
  return (
    <>
      <p>این آدرس در زمان پرداخت سفارش شما استفاده میشود</p>
      {(address.length>0)?<ul className="my-3">{address.map((add,index)=><li className="my-3"><span className="fw-bold text-dark">{`آدرس شماره ${index+1} : ${add.address}`}</span></li>)}</ul>:<p>تاکنون آدرسی ثبت نشده است</p>}
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
