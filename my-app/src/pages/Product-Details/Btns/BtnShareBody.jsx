import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
import { Copy } from "../../Components/Copy";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { useState } from "react";
import { speed } from "jquery";
import { Notif } from "../../../Utils";
export const BtnShareBody = (props) => {
  const [m, setM] = useState(false);
  const location = useLocation();
 
  {
    /* <Copy></Copy> */
  }
  let message = "پیوند کپی شد";
  const close = () => {
    setM(!m);
  };
  const style = (e) => {
    let preview = window?.$(".n");
    preview.fadeOut(100);

    preview.attr("className", window?.$(e.target).attr("className"));
    preview.fadeIn(300);
    Notif("success", message);
  };
  const copy = Copy();
  const currentUrl = `${window.location.protocol}//${window.location.host}${location.pathname}${location.search}${location.hash}`;
   switch(props.type){
    case"typeModal":
    return (
      <>
        <li  onClick={close}>
            <a href="javascript:void(0)" title="اشتراک گذاری">
            <FontAwesomeIcon icon={faShareAlt} >
            </FontAwesomeIcon> 
          </a>
                  </li>
        {m && (
          <div
            className="container pe-0 rounded shadow w-25 h"
            style={{ position: "absolute", bottom: "0.5rem", left: "0"}}
          >
            <div className="row flex-nowrap my-1 me-1 justify-content-center align-items-center">
            
              <div
                className="ps-0 d-flex align-items-center"
                style={{ width: "fit-content" }}
              >
                <button className="btn" onClick={close}>
                  x
                </button>
              </div>
              <div className="ps-0" style={{ width: "fit-content" }}>
                <FacebookShareButton
                  url={currentUrl}
                  quote="pleace share this post"
                  hashtag="#code"
                >
                  <FacebookIcon
                    className="rounded-circle"
                    style={{ width: "2rem", height: "2rem" }}
                  ></FacebookIcon>
                </FacebookShareButton>
              </div>
              <div className="ps-0" style={{ width: "fit-content" }}>
                <TwitterShareButton url={currentUrl}>
                  <TwitterIcon
                    className="rounded-circle"
                    style={{ width: "2rem", height: "2rem" }}
                  ></TwitterIcon>
                </TwitterShareButton>
              </div>
              <div className="ps-0" style={{ width: "fit-content" }}>
                <FontAwesomeIcon
                  className="n"
                  onClick={(e) => {
                    copy();
                    style(e);
                  }}
                  icon={faCopy}
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    color: "blue",
                    cursor: "pointer",
                  }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        )}
      </>
    );
    default:
      return (

        <>
          <li  onClick={close}>
                    <a href="javascript:void(0)" title="اشتراک گذاری">
              <FontAwesomeIcon icon={faShareAlt} >
              </FontAwesomeIcon> 
    
             
    
            </a>
          
                    </li>
          {m && (
           
            <div
              className="container pe-0 rounded shadow w-25 social-media"
              style={{ position: "absolute", top: "0", right: "15rem" }}
            >
              <div className="row flex-nowrap my-1 me-1 justify-content-center align-items-center">
              
                <div
                  className="ps-0 d-flex align-items-center"
                  style={{ width: "fit-content" }}
                >
                  <button className="btn" onClick={close}>
                    x
                  </button>
                </div>
                <div className="ps-0" style={{ width: "fit-content" }}>
                  <FacebookShareButton
                    url={currentUrl}
                    quote="pleace share this post"
                    hashtag="#code"
                  >
                    <FacebookIcon
                      className="rounded-circle"
                      style={{ width: "2rem", height: "2rem" }}
                    ></FacebookIcon>
                  </FacebookShareButton>
                </div>
                <div className="ps-0" style={{ width: "fit-content" }}>
                  <TwitterShareButton url={currentUrl}>
                    <TwitterIcon
                      className="rounded-circle"
                      style={{ width: "2rem", height: "2rem" }}
                    ></TwitterIcon>
                  </TwitterShareButton>
                </div>
                <div className="ps-0" style={{ width: "fit-content" }}>
                  <FontAwesomeIcon
                    className="n"
                    onClick={(e) => {
                      copy();
                      style(e);
                    }}
                    icon={faCopy}
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          )}
        </>
      );
   }
 
};
