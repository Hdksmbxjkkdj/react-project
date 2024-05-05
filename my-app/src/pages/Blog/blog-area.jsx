import { Sidebar } from "./sidebar";
import { Config } from "../../Utils/config";
import { useEffect, useState } from "react";

const BlogArea = (props) => {
  const [item, setitem] = useState("");
  useEffect(()=> {
      setitem();
  }, []);
  return (
    <>
      <section className="blog__area box-plr-75 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-3">{props.children}</div>
            <div className="col-xxl-10 col-xl-9 col-lg-9 order-first order-lg-last">
              <div className="row">
                {props.items.map((item) => {
                  return (
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <article className="postbox__item format-image mb-50 transition-3">
                        <div className="postbox__thumb w-img">
                          <a href="#">
                            <img
                              src={Config.blog + "" + item.pic}
                              alt={item.alt}
                            />
                          </a>
                        </div>
                        <div className="postbox__content">
                          <h3 className="postbox__title">
                            <a href="blog-details.html">{item.title}</a>
                          </h3>
                          <div className="postbox__meta">
                            <p>
                              Post Date: <span>{item.date}</span>
                            </p>
                          </div>
                          <div className="postbox__text">
                            <p>{item.text} </p>
                          </div>
                          <div className="postbox__bottom d-flex justify-content-between align-items-center">
                            <div className="postbox__more">
                              <a
                                href="blog-details.html"
                                className="t-y-btn t-y-btn-grey"
                              >
                                read more
                              </a>
                            </div>
                            <div className="postbox__tag">
                              <p>
                                {" "}
                                Categories:{" "}
                                <a href="blog.html">{item.category}</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
                <div className="col-xxl-12">
                  <div className="basic-pagination basic-pagination-border pt-30 pb-30">
                    {props.children[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { BlogArea };
