import { BlogArea } from "./blog-area";
import { Sidebar } from "./sidebar";
import { SidebarItem } from "./sidebar-item";
import { SidebarItem1 } from "./sidebar-item-1";
import { Pagination } from "../Components/pagination";
import axios from "axios";
import { useState , useEffect } from "react";
import { data } from "jquery";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import BlogDetaile from "../BlogDetailes";
// import {BreadCrump} from "../Product/Breadcrumb";
const Blog = () => {
  const [start,setStart] = useState(0);
  const [items,setitems] = useState();
  useEffect(()=>{
    axios.get(`http://localhost:313/blog?_start=${start}&_limit=4`).then((response)=>{
      setitems(response);
     
    })
  },[start])
  const [category,setcategory] = useState();
  useEffect(()=>{
    axios.get("http://localhost:313/blog-category").then((response)=>{
      setcategory(response);
    })
  },[])
  const [length,setLength] = useState();
  useEffect(()=>{
    axios.get("http://localhost:313/blog").then((response)=>{
      setLength(response);
    })
  },[])
  var paginationLength=length?.data.length;
  paginationLength = Math.ceil(paginationLength/4);
  console.log(start);
  return (
    <>
      {/* <BreadCrump></BreadCrump> */}
      <BlogArea items={items?.data}>
        <Sidebar>
          <SidebarItem items={category?.data}></SidebarItem>
          <SidebarItem1 items={items?.data}></SidebarItem1>
        </Sidebar>
        <Pagination count={{paginationLength,setStart}}></Pagination>
      </BlogArea>
    </>
  );
};

export default Blog;
