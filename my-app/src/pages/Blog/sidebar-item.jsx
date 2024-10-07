import axios from "axios";
import { Notif } from "../../Utils/Notif";

export async function setFilter(item, setItems, t,setLength) {
  const searchParams = new URLSearchParams(window.location.search);
  const oldParam = searchParams.get(t + "_like");
  if (oldParam == item) searchParams.set(t, "");
  else searchParams.set(t, item);
  var query = "?" + t + "_like=" + searchParams.get(t);
  var newRelativePathQuery = window.location.pathname + query;
  window.history.pushState(null, "", newRelativePathQuery);
  var url = "http://localhost:313/blog" + query + "&_page=1&_limit=6";
  let status = null;
  try {
    await axios.get(url).then((response) => {
      setItems(response);
      if (response.status) status = response.status;
      if (status == null) {
        Notif("error", "status خالی میباشد");
      }
    });
  } catch (error) {
    console.log("error", "ارور یافت شد");
  }
}

async function removeAllFilters({setItems}) {
  if(window.location.href==="http://localhost:3000/blog?" || window.location.href==="http://localhost:3000/blog")
  {
    return
  }
  window.history.pushState(
    null,
    "",
    window.location.href.split("?")[0]
  );
  await axios.get("http://localhost:313/blog?_page=1&_limit=6").then((response) => {
    setItems(response);
  });
}

const SidebarItem = ({ items, setItems,setLength }) => {
  const params = new URLSearchParams(window.location.search);
  const data = params.get("category_like");
  return (
    items?.length > 0 && (
      <>
        <div className="sidebar__widget-item mb-35">
          <button
            className="btn btn-primary mb-3 w-100"
            onClick={() => removeAllFilters({setItems})}
          >
            حذف تمامی فیلتر ها
          </button>
          <h3 className="sidebar__widget-title mb-10">دسته بندی ها</h3>
          <div className="sidebar__categories">
            <ul>
              {items.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() =>
                      setFilter(item.category, setItems, "category",setLength)
                    }
                  >
                    <a
                      type="button"
                      className={
                        data == item.category && "text-danger fw-bold fs-5"
                      }
                    >
                      {item.category}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    )
  );
};
export { SidebarItem };
