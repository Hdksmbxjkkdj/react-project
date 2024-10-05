import { Link } from "react-router-dom";
import { Config } from "../../Utils/config";
import { Loader } from "../Components/loader";

const BlogArea = (props) => {
  return (
    <>
      <section className="blog__area box-plr-75 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-3">{props.children[0]}</div>
            <div className="col-xxl-10 col-xl-9 col-lg-9 order-first order-lg-last">
              {props.isLoading && <Loader />}
              {props?.items?.length === 0 && (
                <div className="alert text-center mt-80">
                  <img src="./img/images/empty-blog.png" width={200} alt="blog" />
                  <p className="text-danger">مورد مطابقی یافت نشد !</p>
                </div>
              )}
              <div className="row">
                {props?.items?.map((item) => {
                  return (
                    <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                      <Link to={`/blogDetaile/${item.id}`}>
                        <div className="card__blog">
                          <div className="card-banner">
                            <p
                              className={`category-tag tag-${Math.round(
                                Math.random() * 3
                              )}`}
                            >
                              {item.category}
                            </p>
                            <img
                              className="banner-img"
                              src={Config.blog + "sidebar/" + item.pic}
                              alt=""
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="blog-title">{item?.title}</h4>
                            <p className="blog-description line__clamp-text">
                              {item?.text}
                            </p>

                            <div className="card-profile">
                              <img
                                className="profile-img"
                                src={Config.blog + "comments/default user.png"}
                                alt=""
                              />
                              <div className="card-profile-info">
                                <h3 className="profile-name">{item.auther}</h3>
                                <p className="profile-followers">{item.date}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
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
