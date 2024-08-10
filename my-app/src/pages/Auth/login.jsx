import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notif } from "../../Utils/Notif";
import { LogOut } from "./Logout";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    LogOut();
  }, []);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  function loginUser() {
    try {
      axios
        .get(`http://localhost:313/register?id=${login.email}`)
        .then((e) => {
          if (e.data[0] == undefined || e?.data[0].pass != login.password) {
            Notif("error", "نام کاربری یا ایمیل تعریف نشده !");
            return;
          } else {
            Notif("success",`${e?.data[0].username} عزیز خوش آمدید`);
            localStorage.setItem("user", e?.data[0].username);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        });
    } catch (error) {
      Notif("در اینجا یک خطا وجود دارد !");
    }
  }
  return (
    <>
      <main>
        <section className="login-area pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="basic-login">
                  <h3 className="text-center mb-60">فرم ورود</h3>
                  <div>
                    <label for="name">
                      آدرس ایمیل <span>**</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="آدرس ایمیل"
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
                        <a
                          onClick={() =>
                            alert("متاسفانه کاری نمیتوان برای شما انجام داد")
                          }
                        >
                          فراموشی رمز عبور
                        </a>
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
