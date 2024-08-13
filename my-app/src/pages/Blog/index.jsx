import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../Components/pagination";
import { BlogArea } from "./blog-area";
import { Sidebar } from "./sidebar";
import { SidebarItem } from "./sidebar-item";
import { SidebarItem1 } from "./sidebar-item-1";
const Blog = () => {
  const [start, setStart] = useState(0);
  const [items, setItems] = useState();
  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    axios
      .get(`http://localhost:313/blog?_start=${start}&_limit=4&${params}`)
      .then((response) => {
        setItems(response);
      });
  }, [start]);
  const [category, setcategory] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/blog-category").then((response) => {
      setcategory(response);
    });
  }, []);
  const [length, setLength] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/blog").then((response) => {
      setLength(response);
    });
  }, []);
  var paginationLength = length?.data.length;
  paginationLength = Math.ceil(paginationLength / 4);
  return (
    <>
      <BlogArea items={items?.data}>
        <Sidebar>
          <SidebarItem
            items={category?.data}
            setItems={setItems}
            start={start}
          ></SidebarItem>
          <SidebarItem1 items={items?.data}></SidebarItem1>
        </Sidebar>
        <Pagination count={{ paginationLength, setStart }}/>
      </BlogArea>
    </>
  );
};

export default Blog;
