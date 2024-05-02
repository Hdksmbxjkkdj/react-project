import { Config } from "../../Utils/config";

const SidebarItem1 = (props) => {
  return (
    <>
      <div class="sidebar__widget-item mb-35">
        <h3 class="sidebar__widget-title mb-30">Recent</h3>
        <div class="sidebar__post rc__post">
          <ul>
            {props.items.map((item) => {
              return (
                <li>
                  <div class="rc__post d-flex align-items-center">
                    <div class="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src={Config.blog + "sidebar/"+item.pic}
                          alt={item.alt}
                        />
                      </a>
                    </div>
                    <div class="rc__post-content">
                      <h3 class="rc__post-title">
                        <a href="blog-details.html">{item.title}</a>
                      </h3>
                      <div class="rc__meta">
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
