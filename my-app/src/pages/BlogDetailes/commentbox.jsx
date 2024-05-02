import { Config } from "../../Utils/config";
const Comment = (props) => {
  return (
    <>
      <div class="comments-box">
        <div class="comments-avatar">
          <img src={Config.blog + "comments/" + props.item.pic} alt="" />
        </div>
        <div class="comments-text">
          <div class="avatar-name">
            <h5>{props.item.name}</h5>
            <span> {props.item.date} </span>
            <a class="reply" href="#">
              Leave Reply
            </a>
          </div>
          <p>{props.item.text}</p>
        </div>
      </div>
    </>
  );
};

export { Comment };
