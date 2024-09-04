import { Config } from "../../Utils/config";
import { Form } from "./subscript-form";
import { ProgressWrap } from "../Components/Progress-wrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, EmailIcon } from "react-share";

const AboutUs = () => {
  const video = [
    {
      src: "https://www.youtube.com/embed/ZuzZXT3A1aQ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit tellus et nisi ultrices, eu feugiat sapien com modo. Praesent vitae ipsum et risus tempus tincidunt in tincidunt justo. Nunc consectetur non sapien id faucibus. Curabitur id nibh eu felis pellentesque pellentesque quis vel nulla. Vivamus a lacinia sem. Integer in enim sapien. Aenean vitae hendrerit nisi, ut suscipit justo. Duis hendrerit scelerisque dui. Donec ornare massa vitae neque lobor tis rutrum.",
      video_title: "YouTube video player",
    },
  ];

  const [about, setabout] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/about").then((response) => {
      setabout(response);
    });
  }, []);

  const currentPageUrl = "tutorend.com";
  // console.log(about.data[0]);
  return (
    <>
      <ProgressWrap></ProgressWrap>
      <section className="about__banner-area">
        <div className="container-fluid p-0">
          <div className="row gx-0">
            <div className="col-xxl-12">
              <div className="about__banner w-img">
                <img src={Config.about + "" + about?.data[0].pic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about__area box-plr-75 p-relative about__mt--325">
        <div className="container-fluid">
          <div className="about__inner white-bg">
            <div className="row">
              <div className="col-xxl-12">
                <div className="about__wrapper">
                  <h3>{about?.data[0].title}</h3>
                  <p className="about__text">{about?.data[0].text}</p>

                  <div className="about__quote">
                    <blockquote>
                      <p>{about?.data[0].explain}</p>
                    </blockquote>
                  </div>
                  <p className="about__text">{about?.data[0].maintext}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why__area box-plr-75">
        <div className="container-fluid">
          <div className="why__inner pl-90 pr-90">
            <div className="row">
              <div className="col-xxl-12">
                <div className="section__head mb-30">
                  <div className="section__title">
                    <h3>ما چه کاری انجام میدهیم ؟</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {about?.data[0].why_item.map((items) => {
                return (
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="why__item mb-30">
                      <div className="why__thumb w-img fix">
                        <img src={Config.about + "" + items.pic} alt="" />
                      </div>
                      <div className="why__content">
                        <h3>{items.title}</h3>
                        <p>{items.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="video__area box-plr-75 pb-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__head video__section-head mb-30 ml-90 mr-90">
                <div className="section__title">
                  <h3>ما چگونه عمل میکنیم ؟</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="video__content">
                <iframe
                  src={about?.data[0].video[0].src}
                  title={about?.data[0].video[0].video_title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="video__text pl-155 pr-155 mt-30">
                <p>{about?.data[0].video[0].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team__area box-plr-75 pb-30">
        <div className="container-fluid">
          <div className="team__inner pl-155 pr-155">
            <div className="row">
              <div className="col-xxl-12">
                <div className="section__head mb-30">
                  <div className="section__title">
                    <h3>اعضای تیم ما</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {about?.data[0].team.map(function (items) {
                return (
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                    <div className="our-team">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src={Config.team + "" + items.pic}
                        />
                      </div>
                      <div className="team-content">
                        <h3 className="name">{items.name}</h3>
                        <h4 className="title">{items.job}</h4>
                      </div>
                      <ul class="social">
                        <li>
                          <FacebookShareButton
                            url={currentPageUrl}
                            quote="pleace share this post"
                            hashtag="#code"
                            className="sub-social"
                          >
                            <i className="fab fa-facebook"></i>
                          </FacebookShareButton>
                        </li>
                        <li>
                          <TwitterShareButton
                            url={currentPageUrl}
                            className="sub-social"
                          >
                            <i className="fab fa-twitter"></i>
                          </TwitterShareButton>
                        </li>
                        <li>
                          <EmailShareButton
                            url={currentPageUrl}
                            className="sub-social"
                          >
                            <i class="fas fa-mail-bulk fa-sm  "></i>
                          </EmailShareButton>
                        </li>
                        <li>
                          <LinkedinShareButton
                            url={currentPageUrl}
                            className="sub-social"
                          >
                            <i className="fab fa-linkedin"></i>
                          </LinkedinShareButton>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe__area subscribe__border pt-35 pb-30 box-plr-75">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="subscribe__content d-sm-flex align-items-center">
                <div className="subscribe__icon mr-25">
                  <img src={Config.icon + "icon_email.png"} alt="subscript" />
                </div>
                <div className="subscribe__text">
                  <h4>عضویت در خبرنامه</h4>
                  <p>
                    با عضویت در خبرنامه ما از آخرین محصولات ما باخبر شوید و با
                    اولین خرید خود 30،000 تومان هدیه از ما دریافت کنید
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="subscribe__form f-right">
                <Form></Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { AboutUs };
