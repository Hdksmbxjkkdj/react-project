import { useState } from "react";
import { Config } from "../../Utils/config";
import { ReplyComment } from "./ReplyComment";
const Comment = (props) => {
  const [show, setShow] = useState(false);
  function reply(e,id) {
    document.getElementById("contacts-sub-form").classList.toggle("d-none");
    document.getElementById("contacts-form").classList.toggle("d-none");
    if (
      !document.getElementById("contacts-sub-form").classList.contains("d-none")
    ) {
      document.getElementById("sub-name").focus();
      props.setPID(id);
    }
  }
  return (
    <>
      <li>
        <div className="comments-box">
          <div className="comments-avatar">
            <img src={Config.blog + "comments/default user.png"} alt="" />
          </div>
          <div className="comments-text">
            <div className="avatar-name">
              <h5>{props?.item.name}</h5>
              <span> {props?.item.date} </span>
              <button className="reply" onClick={(e) => reply(e,props.item.id)}>
                ارسال پاسخ
              </button>
              <button className="showing" onClick={() => setShow(!show)}>
                {show ? "بستن پاسخ ها" : "نمایش پاسخ ها"}
              </button>
            </div>
            <p>{props?.item.comment}</p>
          </div>
        </div>
      </li>
      {show && <ReplyComment Pid={props.item.id} />}
    </>
  );
};

export { Comment };
