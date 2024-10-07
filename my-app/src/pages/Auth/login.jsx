import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notif } from "../../Utils/Notif";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  function loginUser() {
    axios
      .get(`http://localhost:313/register?id=${login.email}`)
      .then((e) => {
        if (e.data[0] == undefined || e?.data[0].pass != login.password) {
          Notif("error", " ایمیل یا کلمه عبور تعریف نشده !");
          return;
        } else {
          Notif("success", `${e?.data[0].username} عزیز خوش آمدید`);
          const theUser = { username: e?.data[0].username, id: e?.data[0].id };
          localStorage.setItem("user", JSON.stringify(theUser));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        Notif("error", err.message);
      });
  }
  return (
    <>
      <main>
        <section className="login-area pb-100 mt-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="basic-login">
                  <h3 className="text-center mb-60">فرم ورود</h3>
                  {login.email === "مهمان" && <p>ورود به عنوان مهمان</p>}
                  <div>
                    <label for="name">
                      آدرس ایمیل <span>**</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="آدرس ایمیل"
                      value={login.email}
                      onChange={(e) =>
                        setLogin({ ...login, email: e.target.value })
                      }
                      required
                    />
                    <label for="pass">
                      کلمه عبور <span>**</span>
                    </label>
                    <input
                      id="pass"
                      type="password"
                      placeholder="وارد کردن کلمه عبور"
                      value={login.password}
                      onChange={(e) =>
                        setLogin({ ...login, password: e.target.value })
                      }
                      required
                    />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input type="checkbox" checked={check} />
                        <label onClick={() => setCheck(!check)}>
                          مرا به خاطر داشته باش
                        </label>
                      </span>
                      <span className="forgot-login f-right">
                        <Link to="/forgottenPass">فراموشی رمز عبور</Link>
                      </span>
                    </div>
                    <button
                      className="t-y-btn w-100"
                      type="button"
                      onClick={loginUser}
                    >
                      ورود
                    </button>
                    <div className="or-divide">
                      <span>یا</span>
                    </div>
                    <Link to="/register" className="t-y-btn t-y-btn-grey w-100">
                      ثبت نام
                    </Link>
                    <Link to="/" className="t-y-btn t-y-btn-grey w-100 mt-3">
                      بازگشت به صفحه اصلی
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export { Login };
