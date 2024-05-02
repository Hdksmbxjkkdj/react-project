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
      <section class="blog__area box-plr-75 pb-70">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xxl-2 col-xl-3 col-lg-3">{props.children}</div>
            <div class="col-xxl-10 col-xl-9 col-lg-9 order-first order-lg-last">
              <div class="row">
                {props.items.map((item) => {
                  return (
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <article class="postbox__item format-image mb-50 transition-3">
                        <div class="postbox__thumb w-img">
                          <a href="#">
                            <img
                              src={Config.blog + "" + item.pic}
                              alt={item.alt}
                            />
                          </a>
                        </div>
                        <div class="postbox__content">
                          <h3 class="postbox__title">
                            <a href="blog-details.html">{item.title}</a>
                          </h3>
                          <div class="postbox__meta">
                            <p>
                              Post Date: <span>{item.date}</span>
                            </p>
                          </div>
                          <div class="postbox__text">
                            <p>{item.text} </p>
                          </div>
                          <div class="postbox__bottom d-flex justify-content-between align-items-center">
                            <div class="postbox__more">
                              <a
                                href="blog-details.html"
                                class="t-y-btn t-y-btn-grey"
                              >
                                read more
                              </a>
                            </div>
                            <div class="postbox__tag">
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
                <div class="col-xxl-12">
                  <div class="basic-pagination basic-pagination-border pt-30 pb-30">
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
