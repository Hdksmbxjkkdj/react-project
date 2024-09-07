import axios from "axios";
import { useEffect, useState } from "react";
import { Config } from "../../Utils/config";

export const ReplyComment = ({ Pid }) => {
  const [reply, setReply] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:313/subComments?Pid=${Pid}`)
      .then((response) => {
        setReply(response);
      });
  }, [reply]);
  return (
    <>
      {reply?.data.map((item) => {
        return <li class="children">
          <div class="comments-box">
            <div class="comments-avatar">
              <img
                src={Config.blog + "comments/default user.png"}
                alt=""
              />
            </div>
            <div class="comments-text">
              <div class="avatar-name">
                <h5>{item.name}</h5>
                <span>{item.date}</span>
              </div>
              <p>{item.comment}</p>
            </div>
          </div>
        </li>;
      })}
    </>
  );
};
