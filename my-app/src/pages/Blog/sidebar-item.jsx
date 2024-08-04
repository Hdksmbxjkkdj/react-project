const SidebarItem = ({items}) => {
  return (items?.length > 0 && <>
      <div className="sidebar__widget-item mb-35">
        <h3 className="sidebar__widget-title mb-10">Categories</h3>
        <div className="sidebar__categories">
          <ul>
            {
              items.map(item=>{
                return <li key={item.id}>
                  <a href="#">{item.category}</a>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
};
export { SidebarItem };
