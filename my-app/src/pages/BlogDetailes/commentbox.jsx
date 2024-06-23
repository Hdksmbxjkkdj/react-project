import { Config } from "../../Utils/config";
const Comment = (props) => {
  return (
    <>
      <div className="comments-box">
        <div className="comments-avatar">
          <img src={Config.blog + "comments/" + props.item.pic} alt="" />
        </div>
        <div className="comments-text">
          <div className="avatar-name">
            <h5>{props.item.name}</h5>
            <span> {props.item.date} </span>
            <a className="reply" href="#">
              ارسال پاسخ
            </a>
          </div>
          <p>{props.item.comment}</p>
        </div>
      </div>
    </>
  );
};

export { Comment };
