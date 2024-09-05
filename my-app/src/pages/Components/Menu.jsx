import { NavLink } from "react-router-dom";
export const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              خانه <i className="fa fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="products">محصولات <i className="fa fa-shopping-bag"></i></NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              وبلاگ <i className="fa fa-blog"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="About">
              درباره ما <i className="fa fa-eject"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact">
              ارتباط با ما <i className="fa fa-globe"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
