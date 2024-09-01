import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { useState } from "react";
import{BtnShareBody} from "./BtnShareBody"
export const BtnShare = ({ item }) => {
  const currentPageUrl = "tutorend.com";
  const [modal, setModal] = useState({ show: false});
  const close = () =>{
    setModal(!modal)
  }
  return (
    <>
   
        {/* <a href="#" title="اشتراک گذاری"  onClick={()=>{setModal(true);close(true)}} >
          <FontAwesomeIcon icon={faShareAlt} >
          </FontAwesomeIcon> 

         

        </a>
        {modal && (
        <BtnShareBody
          setModal={setModal}
          modal={modal}
        >
          </BtnShareBody>
      )} */}
     
    </>
       
  );
};
