import { useState } from "react";
import { setFilter } from "./sidebar-item";

const Sidebar = (props) => {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setFilter(search,props.setItems,"title")
    setSearch("")
  }
  var searchParams = new URLSearchParams(window.location.search)
  searchParams = searchParams.get("title_like")
  return (
    <>
      <div className="sidebar__widget">
        <div className="sidebar__widget-item mb-35">
          <div className="sidebar__search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="عبارت مورد نظرتان را جستجو کنید ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
            {(searchParams)&&<p className="mt-2"> جست و جو بر اساس عبارت <span className="text-info fw-bold fs-5">{`${searchParams}`}</span></p>}
        </div>
        {props.children[0]}
        {props.children[1]}
        {props.children[2]}
      </div>
    </>
  );
};

export { Sidebar };

