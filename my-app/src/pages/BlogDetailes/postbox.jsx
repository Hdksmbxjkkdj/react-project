import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Notif } from "../../Utils/Notif";
import { Config } from "../../Utils/config";
import { SidebarItem1 } from "../Blog/sidebar-item-1";
import { Comment } from "./commentbox";

const PostBox = (props) => {
  const send_btn = document.querySelector(".send-btn");
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comment, setCommnet] = useState();
  const [item, setitem] = useState();
  const [PID, setPID] = useState();
  const [blog, setBlog] = useState();
  useEffect(() => {
    axios.get(`http://localhost:313/blog/${props.id}`).then((response) => {
      setitem(response.data);
    });
    axios.get(`http://localhost:313/blog?view_gte=2000`).then((response) => {
      setBlog(response.data);
    });
  }, []);
  function Freply(e, item) {
    const name = document.getElementById("name");
    const pos =
      document.getElementsByClassName("post-comments-form")[0].offsetTop;
    if (!props.rep) {
      name.focus();
      window.scroll({ top: pos - 20, behavior: "smooth" });
      setPID(item);
    }
  }
  const submit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("user")) {
      Notif("error", "ابتدا وارد سایت شوید");
      return;
    }
    send_btn.classList.add("loading");
    let d = new Intl.DateTimeFormat("fa-IR").format(Date.now());
    let status = 201;
    if (PID) {
      await axios
        .post("http://localhost:313/subComments", {
          name: name,
          email: email,
          comment: comment,
          blog_id: id,
          date: d,
          Pid: PID.id,
        })
        .then((e) => {
          status = e.status;
          setTimeout(function () {
            send_btn.classList.remove("loading");
          }, 1500);
          if (e.status == 201) {
            Notif("success", "پاسخ شما با موفقیت ارسال شد");
            setPID("")
            setName("")
            setEmail("")
            setCommnet("")
          } else {
            Notif("error", "در اینجا یک خطا وجود دارد !");
          }
        });
    } else {
      await axios
        .post("http://localhost:313/comments", {
          name: name,
          email: email,
          comment: comment,
          blog_id: id,
          date: d,
        })
        .then((e) => {
          status = e.status;
          setTimeout(function () {
            send_btn.classList.remove("loading");
          }, 1500);
          if (e.status == 201) {
            Notif("success", "نظر شما با موفقیت ارسال شد");
            props.setComment([...props?.comment, e.data]);
          } else {
            Notif("error", "در اینجا یک خطا وجود دارد !");
          }
        });
    }
  };
  return (
    <>
      <div className="postbox__wrapper">
        <article className="postbox__item format-image mb-50 transition-3">
          <div className="postbox__thumb w-img">
            <img src={Config.blog + "sidebar/" + item?.pic} alt="" />
          </div>
          <div className="postbox__content">
            <h3 className="postbox__title postbox__title-2">{item?.title}</h3>
            <div className="postbox__meta d-flex gap-3">
              <p>
                تاریخ: <span>{item?.date} </span>
              </p>
              <p>
                بازدید: <span>{Number(item?.view).toLocaleString()} </span>{" "}
                <i className="fa fa-eye"></i>
              </p>
            </div>
            <div className="postbox__text">
              <p>{item?.text}</p>
            </div>
          </div>
        </article>
        <div className="row">
          <div className="col-xxl-8">
            <div className="postbox__comments">
              <div className="postbox__comment-title mb-30">
                <h3>نظرات ({props?.comment && props?.comment.length})</h3>
              </div>
              <div className="latest-comments mb-30">
                <ul>
                  {props?.comment &&
                    props?.comment.map((item) => {
                      return (
                        <>
                          <Comment
                            item={item}
                            setPID={setPID}
                            Freply={Freply}
                            key={Math.random()}
                          ></Comment>
                        </>
                      );
                    })}
                  <li>
                    {props.comment?.length >= props.limit && (
                      <button
                        className="btn shadow-sm"
                        onClick={() => props.setLimit(props.limit + 5)}
                      >
                        موارد بیشتر ...
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-comments-form mb-100">
              <div className="post-comments-title mb-30">
                <h3>{"ارسال نظر"}</h3>
              </div>
              <form
                id="contacts-form"
                className="conatct-post-form"
                name="contact-form"
                onSubmit={(event) => submit(event)}
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-icon p-relative contacts-name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="نام"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-icon p-relative contacts-name">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ایمیل"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {PID && (
                    <div className="col-xl-12 mb-3">
                      <div className="d-flex justify-content-between">
                        <p style={{ textAlign: "right" }}>
                          در پاسخ به : <span className="">{PID.name}</span>
                        </p>{" "}
                        <button
                          type="button"
                          className="btn btn-warning text-light"
                          onClick={()=>setPID("")}
                        >
                          لغو پاسخ
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="col-xl-12">
                    <div className="contact-icon p-relative contacts-message">
                      <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                        placeholder="نظر"
                        value={comment}
                        onChange={(e) => setCommnet(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button className="send-btn" type="submit">
                    <i className="fa fa-paper-plane"></i>
                    <span className="text">ارسال نظر</span>
                    <span className="loading-animate"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xxl-4">
            <SidebarItem1 items={blog} title="محبوب ترین ها" />
          </div>
        </div>
      </div>
    </>
  );
};

export { PostBox };

