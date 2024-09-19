import { Link } from "react-router-dom";
import { Config } from "../../Utils/config";

const SidebarItem1 = (props) => {
  return (
    <>
      <div className="sidebar__widget-item mb-35">
        <h3 className="sidebar__widget-title mb-30">{props?.title}</h3>
        <div className="sidebar__post rc__post">
          <ul>
            {props.items?.map((item) => {
              return (
                <li>
                  <div className="rc__post d-flex align-items-center">
                    <div className="rc__post-thumb mr-20">
                        <img
                          src={Config.blog + "sidebar/"+item.pic}
                          alt={item.alt}
                        />
                    </div>
                    <div className="rc__post-content">
                      <h3 className="rc__post-title">
                        <Link to={"/BlogDetaile/"+item.id}>{item.title}</Link>
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

