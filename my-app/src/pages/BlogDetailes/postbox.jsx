import { useEffect, useReducer, useState } from "react";
import { Config } from "../../Utils/config";
import { Comment } from "./commentbox";
import axios from "axios";
import { Notif } from "../../Utils/Notif";
import { useParams } from "react-router-dom";

const PostBox = (props) => {
  const send_btn = document.querySelector(".send-btn");
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comment, setCommnet] = useState();
  const [item, setitem] = useState();
  const [subName, setSubName] = useState();
  const [subEmail, setSubEmail] = useState();
  const [subComment, setSubComment] = useState();
  const [PID, setPID] = useState();
  const [rep, setRep] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:313/blog/${props.id}`).then((response) => {
      setitem(response.data);
    });
  }, []);
  function reply(e, id) {
    document.getElementById("contacts-sub-form").classList.toggle("d-none");
    document.getElementById("contacts-form").classList.toggle("d-none");
    if (!props.rep) {
      document.getElementById("sub-name").focus();
      props.setPID(id);
    }
  }
  const submit = async (e) => {
    e.preventDefault();
    send_btn.classList.add("loading");
    let d = new Intl.DateTimeFormat("fa-IR").format(Date.now());
    let status = 201;
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
        send_btn.classList.remove("loading");
        if (e.status == 201) {
          Notif("success", "نظر شما با موفقیت ارسال شد");
        } else {
          Notif("error", "در اینجا یک خطا وجود دارد !");
        }
      });
  };
  const subSubmit = async (e) => {
    let d = new Intl.DateTimeFormat("fa-IR").format(Date.now());
    let status = 201;
    e.preventDefault();
    send_btn.classList.add("loading");
    await axios
      .post("http://localhost:313/subComments", {
        name: subName,
        email: subEmail,
        comment: subComment,
        blog_id: id,
        date: d,
        Pid: PID,
      })
      .then((e) => {
        status = e.status;
        send_btn.classList.remove("loading");
        if (e.status == 201) {
          Notif("success", "پاسخ شما با موفقیت ارسال شد");
        } else {
          Notif("error", "در اینجا یک خطا وجود دارد !");
        }
      });
    document.getElementById("contacts-sub-form").classList.add("d-none");
    document.getElementById("contacts-form").classList.remove("d-none");
    setSubName("");
    setSubEmail("");
    setSubComment("");
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
                بازدید: <span>{item?.view} </span> <i className="fa fa-eye"></i>
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
                          <Comment item={item} setPID={setPID} rep={rep} setRep={setRep} reply={reply}></Comment>
                        </>
                      );
                    })}
                    <li>
                    {(props.comment?.length>=props.limit)?<button className="btn btn-primary" onClick={()=>props.setLimit((props.limit)+5)}>موارد بیشتر</button>:<button className="btn btn-primary" onClick={()=>props.setLimit(5)}>موارد کمتر</button>}
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
                class="conatct-post-form"
                name="contact-form"
                onSubmit={(event) => submit(event)}
              >
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="نام"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ایمیل"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="contact-icon p-relative contacts-message">
                      <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                        placeholder="نظر"
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
              <form
                id="contacts-sub-form"
                class="conatct-post-form d-none"
                name="contact-sub-form"
                onSubmit={(e) => subSubmit(e)}
              >
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input
                        id="sub-name"
                        name="sub-name"
                        type="text"
                        placeholder="نام"
                        onChange={(e) => setSubName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-icon p-relative contacts-name">
                      <input
                        id="sub-email"
                        name="sub-email"
                        type="email"
                        placeholder="ایمیل"
                        onChange={(e) => setSubEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div class="contact-icon p-relative contacts-message">
                      <textarea
                        name="sub-comment"
                        id="sub-comment"
                        cols="30"
                        rows="10"
                        placeholder="نظر"
                        onChange={(e) => setSubComment(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                    <div className="d-flex align-items-center gap-3">
                    <button className="send-btn" type="submit">
                      <i className="fa fa-paper-plane"></i>
                      <span className="text">ارسال پاسخ</span>
                      <span className="loading-animate"></span>
                    </button>
                    <button className="t-y-btn t-y-btn-grey" onClick={(e)=>reply(e, props.item.id)}> بستن پاسخ</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xxl-4">{/* some thing goes here */}</div>
        </div>
      </div>
    </>
  );
};

export { PostBox };
