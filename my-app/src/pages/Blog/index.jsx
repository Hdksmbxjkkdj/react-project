import { BlogArea } from "./blog-area";
import { Sidebar } from "./sidebar";
import { SidebarItem } from "./sidebar-item";
import { SidebarItem1 } from "./sidebar-item-1";
import { Pagination } from "../Components/pagination";
import axios from "axios";
import { useState , useEffect } from "react";
import { data } from "jquery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetaile from "../BlogDetailes";
// import {BreadCrump} from "../Product/Breadcrumb";
const Blog = () => {
  // const items = [
  //   {
  //     pic: "blog-1.jpg",
  //     alt: "blog",
  //     title: "Koma and Torus",
  //     text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
  //     date: "July 21, 2021",
  //     category: "Travel",
  //   },
  //   {
  //     pic: "blog-2.jpg",
  //     alt: "blog",
  //     title: "Grip and Allows",
  //     text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
  //     date: "July 21, 2021",
  //     category: "Travel",
  //   },
  //   {
  //     pic: "blog-3.jpg",
  //     alt: "blog",
  //     title: "Pitterarum Formas",
  //     text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
  //     date: "July 21, 2021",
  //     category: "Travel",
  //   },
  //   {
  //     pic: "blog-4.jpg",
  //     alt: "blog",
  //     title: "Shelving Burgundy",
  //     text: "Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.",
  //     date: "July 21, 2021",
  //     category: "Travel",
  //   }
  // ];
  // const sidebarItem = [
  //   {
  //     pic: "blog-sm-1.jpg",
  //     alt: "blog",
  //     title: "Curabitur Lobortis News",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-2.jpg",
  //     alt: "blog",
  //     title: "The Brushed Steel",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-3.jpg",
  //     alt: "blog",
  //     title: "Koma and Torus",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-4.jpg",
  //     alt: "blog",
  //     title: "Grip and Allows",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-5.jpg",
  //     alt: "blog",
  //     title: "Pitterarum Formas",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-6.jpg",
  //     alt: "blog",
  //     title: "Shelving Burgundy",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-7.jpg",
  //     alt: "blog",
  //     title: "Anteposue Rarum Formas",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-8.jpg",
  //     alt: "blog",
  //     title: "Posuerit Litterarum Formas",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-9.jpg",
  //     alt: "blog",
  //     title: "KAnteposuerit Litterarum Formas",
  //     date: "July 21 2021",
  //   },
  //   {
  //     pic: "blog-sm-10.jpg",
  //     alt: "blog",
  //     title: "Curabitur Lobortis",
  //     date: "July 21 2021",
  //   },
  // ];
  const sidebar1 = [
    {category:"April 202200000"},
    {category:"January 2021"},
  ]
  const pagination = [
    {number:"1"},
    {number:"2"},
    {number:"3"},
  ]
  const [items,setitems] = useState();
  useEffect(()=>{
    axios.get("http://localhost:313/blog").then((response)=>{
      setitems(response);
    })
  },[])
  const [category,setcategory] = useState();
  useEffect(()=>{
    axios.get("http://localhost:313/blog-category").then((response)=>{
      setcategory(response);
    })
  },[])
  const sidebar = [
    {category:"Videos"},
    {category:"Uncategorized"},
    {category:"Travel"},
    {category:"Music"},
    {category:"Photography"},
    {category:"Images"},
    {category:"Creative"},
    {category:"Azone Post"},
  ]
  // console.log(items?.data);
  return (
    <>
      {/* <BreadCrump></BreadCrump> */}
      <BlogArea items={items?.data}>
        <Sidebar>
          <SidebarItem items={category?.data}></SidebarItem>
          <SidebarItem1 items={items?.data}></SidebarItem1>
          <sidebarItem items={sidebar1}></sidebarItem>
        </Sidebar>
        <Pagination count={pagination}></Pagination>
      </BlogArea>
    </>
  );
};

export default Blog;
