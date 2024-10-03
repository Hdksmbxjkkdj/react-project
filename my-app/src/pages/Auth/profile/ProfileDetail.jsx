import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notif } from "../../../Utils/Notif";

export const ProfileDetail = () => {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  let user = "";
  if (localStorage.getItem("user")) {
    user = localStorage.getItem("user");
    user = JSON.parse(user);
  }
  axios.get(`http://localhost:313/register?id=${user?.id}`).then((response) => {
    setPassword(response?.data?.[0]?.pass);
  });
  const [form, setForm] = useState({
    name: user?.username,
    email: user?.id,
  });
  function handleSubmit(e) {
    const newFile = {
      username: form.name,
      id: form.email,
      pass: password,
    };
    console.log(newFile);
    e.preventDefault();
    axios.put(`http://localhost:313/register/${user?.id}`, newFile);
    Notif(
      "info",
      "تغییرات با موفقیت ثبت شد لطفا دوباره با ایمیل جدید وارد شوید"
    );
    navigate("/login");
  }
  return (
    <div className="main-content">
      <div className="user-info bg-white padding-30 font-size-13">
        <form onSubmit={handleSubmit}>
          <input
            className="text"
            placeholder="نام کاربری"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="text text-left"
            placeholder="ایمیل"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <button className="btn btn-netcopy_net text-light" type="submit">
            ذخیره تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};
