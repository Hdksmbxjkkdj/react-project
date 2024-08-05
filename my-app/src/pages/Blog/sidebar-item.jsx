import axios from "axios";
import { useState } from "react";

function setFilter(item) {
  const URL = "http://localhost:313/blog/filter";
  axios.get(URL).then(response=>{
    response.filter()
  })
}

const SidebarItem = ({items}) => {
  return (items?.length > 0 && <>
      <div className="sidebar__widget-item mb-35">
        <h3 className="sidebar__widget-title mb-10">Categories</h3>
        <div className="sidebar__categories">
          <ul>
            {
              items.map(item=>{
                return <li key={item.id} onClick={()=>setFilter(item.category)}>
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
