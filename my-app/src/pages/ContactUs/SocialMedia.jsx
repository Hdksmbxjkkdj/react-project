



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faBaseballBall } from "@fortawesome/free-solid-svg-icons";
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
  } from "react-share";

export const SocialMedia = () =>{
    const currentPageUrl = "tutorend.com";

    return<>

                            <div className="contact__social">
                                <span>اشتراک اجتماعی:</span>
                                <ul>
                                    <li>
                                        <a href="#"> <FontAwesomeIcon icon={faBaseballBall} /></a>
                                    </li>
                                    <li>
                                        {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
                                        <TwitterShareButton
                utl={currentPageUrl} 
                >
                <TwitterIcon className="rounded-circle"  style={{width:"3rem",height:"3rem"}}></TwitterIcon>
                </TwitterShareButton>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        {/* <a href="#"><i className="fab fa-facebook-f"></i></a> */}
                                        
                                        <FacebookShareButton
                  url={currentPageUrl}
                  quote="pleace share this post"
                  hashtag="#code"
                >
                  <FacebookIcon className="rounded-circle" style={{width:"3rem",height:"3rem"}}></FacebookIcon>
                </FacebookShareButton>
                                    </li>
                                </ul>
                    </div>
    
    </>
}