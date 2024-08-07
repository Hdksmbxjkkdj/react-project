import axios from "axios";
import { Notif } from "../../Utils/Notif";

async function setFilter(item, setItems) {
  const searchParams = new URLSearchParams(window.location.search);
  const oldParam = searchParams.get("category");
  if (oldParam == item) searchParams.delete("category");
  else searchParams.set("category", item);
  var query = "?" + searchParams.toString();
  var newRelativePathQuery = window.location.pathname + query;
  window.history.pushState(null, "", newRelativePathQuery);
  var url = "http://localhost:313/blog" + query;
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
    Notif("error", "ارور یافت شد");
  }
}

const SidebarItem = ({ items, setItems }) => {
  const params = new URLSearchParams(window.location.search);
  const data = params.get("category");
  console.log(data);
  return (
    items?.length > 0 && (
      <>
        <div className="sidebar__widget-item mb-35">
          <h3 className="sidebar__widget-title mb-10">Categories</h3>
          <div className="sidebar__categories">
            <ul>
              {items.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => setFilter(item.category, setItems)}
                  >
                    <a
                      href="#"
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
