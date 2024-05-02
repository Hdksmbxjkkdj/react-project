const SidebarItem = (props) => {
  return (
    <>
      <div class="sidebar__widget-item mb-35">
        <h3 class="sidebar__widget-title mb-10">Categories</h3>
        <div class="sidebar__categories">
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
