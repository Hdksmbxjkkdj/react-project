import axios from "axios";
import { useEffect, useState } from "react";
import { Config } from "../../Utils/config";

export const ReplyComment = ({ rep }) => {
  return (
    <>
      {rep?.data.map((item) => {
        return (
          <li class="children">
            <div class="comments-box">
              <div class="comments-avatar">
                <img
                  src={Config.blog + "comments/default user.png"}
                  alt=""
                  width={30}
                  style={{ opacity: ".4" }}
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
          </li>
        );
      })}
    </>
  );
};
