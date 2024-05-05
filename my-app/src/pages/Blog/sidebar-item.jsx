const SidebarItem = (props) => {
  return (
    <>
      <div className="sidebar__widget-item mb-35">
        <h3 className="sidebar__widget-title mb-10">Categories</h3>
        <div className="sidebar__categories">
          <ul>
            {props.items.map((item) => {
              return (
                <li>
                  <a href="#">{item.category}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export { SidebarItem };
