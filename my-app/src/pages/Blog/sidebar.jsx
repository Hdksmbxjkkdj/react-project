

const Sidebar = (props) => {
  return (
    <>
      <div className="sidebar__widget">
        <div className="sidebar__widget-item mb-35">
          <div className="sidebar__search">
            <form action="#">
              <input type="text" placeholder="Search posts here" />
              <button type="submit">
                <i className="fa fa-search"></i>
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

