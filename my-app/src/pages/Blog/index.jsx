import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../Components/pagination";
import { BlogArea } from "./blog-area";
import { Sidebar } from "./sidebar";
import { SidebarItem } from "./sidebar-item";
import { SidebarItem1 } from "./sidebar-item-1";
const Blog = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState();
  const [isLoading,setIsLoading] = useState(false)
  const Limit = 6;
  const params = new URLSearchParams(window.location.search);
  let resp;
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:313/blog?${params}&_page=${page}&_limit=${Limit}`)
      .then((response) => {
        resp = response;
        setItems(response);
        setIsLoading(false)
      });
  }, [page]);
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
  paginationLength = Math.ceil(paginationLength / Limit);
  return (
    <>
      <BlogArea items={items?.data} isLoading={isLoading}>
        <Sidebar setItems={setItems} resp={resp}>
          <SidebarItem
            items={category?.data}
            setItems={setItems}
            start={page}
            setLength={setLength}
          ></SidebarItem>
          <SidebarItem1 title="موارد اخیر" items={items?.data}></SidebarItem1>
        </Sidebar>
        <Pagination count={{ paginationLength, setPage,Limit,page }}/>
      </BlogArea>
    </>
  );
};

export default Blog;
