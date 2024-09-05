import axios from "axios";
import { useState } from "react";

const Sidebar = (props) => {
  const [search, setSearch] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://localhost:313/blog?title_like=${search}`).then((res) => {
      props.setItems(res);
    });
  }
  return (
    <>
      <div className="sidebar__widget">
        <div className="sidebar__widget-item mb-35">
          <div className="sidebar__search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search posts here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
