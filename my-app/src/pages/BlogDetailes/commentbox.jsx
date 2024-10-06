import { useState, useEffect } from "react";
import { Config } from "../../Utils/config";
import { ReplyComment } from "./ReplyComment";
import axios from "axios";
const Comment = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  const [rep, setRep] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:313/subComments?Pid=${props.item.id}`)
      .then((response) => {
        setRep(response);
      });
  }, []);
  return (
    <>
      <li>
        <div className="comments-box">
          <div className="comments-avatar">
            <img
              src={Config.blog + "comments/default user.png"}
              width={30}
              style={{ opacity: ".4" }}
              alt=""
            />
          </div>
          <div className="comments-text">
            <div className="avatar-name">
              <h5>{props?.item.name}</h5>
              <span> {props?.item.date} </span>
              <button
                className="reply"
                onClick={(e) => {
                  props.Freply(e, props?.item);
                }}
              >
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
