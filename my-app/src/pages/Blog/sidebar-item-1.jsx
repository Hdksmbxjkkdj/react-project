import { Config } from "../../Utils/config";

const SidebarItem1 = (props) => {
  return (
    <>
      <div className="sidebar__widget-item mb-35">
        <h3 className="sidebar__widget-title mb-30">Recent</h3>
        <div className="sidebar__post rc__post">
          <ul>
            {props.items.map((item) => {
              return (
                <li>
                  <div className="rc__post d-flex align-items-center">
                    <div className="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src={Config.blog + "sidebar/"+item.pic}
                          alt={item.alt}
                        />
                      </a>
                    </div>
                    <div className="rc__post-content">
                      <h3 className="rc__post-title">
                        <a href="blog-details.html">{item.title}</a>
                      </h3>
                      <div className="rc__meta">
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export { SidebarItem1 };
