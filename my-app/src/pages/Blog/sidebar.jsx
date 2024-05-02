import { SidebarItem } from "./sidebar-item";


const Sidebar = (props) => {
  return (
    <>
      <div class="sidebar__widget">
        <div class="sidebar__widget-item mb-35">
          <div class="sidebar__search">
            <form action="#">
              <input type="text" placeholder="Search posts here" />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        {props.children[0]}
        {props.children[1]}
        {props.children[2]}
      </div>
    </>
  );
};

export { Sidebar };
