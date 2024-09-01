import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { useState } from "react";
export const BtnShareBody = ({ setModal,modal }) => {
 
    const currentPageUrl = "tutorend.com";
  return (
    <>
    
                <div className="container pe-0">
                    <div className="row flex-nowrap mt-4 ">
                        {/* <div>
                        <button
                  className="btn btn-outline-black"
                  onClick={() => setModal({ show: false })}
                >
                  x
                  </button>
                        </div> */}
                  <div 
                  className=" ps-0"
                  style={{width:"fit-content"}}                  
                  >
                  <FacebookShareButton
                  url={currentPageUrl}
                  quote="pleace share this post"
                  hashtag="#code"
                >
                  <FacebookIcon className="rounded-circle" style={{width:"3rem",height:"3rem"}}></FacebookIcon>
                </FacebookShareButton>
                  </div>
                 <div style={{width:"fit-content"}}>
                 <TwitterShareButton
                utl={currentPageUrl} 
                >
                <TwitterIcon className="rounded-circle"  style={{width:"3rem",height:"3rem"}}></TwitterIcon>
                </TwitterShareButton>
                 </div>
               
                
               
                </div>
                </div>
               

     
    </>
  );
};
