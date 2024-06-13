import { Sidebar } from "../Blog/sidebar";
import { SidebarItem } from "../Blog/sidebar-item";
import { SidebarItem1 } from "../Blog/sidebar-item-1";
import { PostBox } from "./postbox";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

const BlogDetaile = (props) => {
  let {id} = useParams();
  const sidebar = [
    { category: "Videos" },
    { category: "Uncategorized" },
    { category: "Travel" },
    { category: "Music" },
    { category: "Photography" },
    { category: "Images" },
    { category: "Creative" },
    { category: "Azone Post" },
  ];
  const sidebar1 = [
    { category: "April 202200000" },
    { category: "January 2021" },
  ];
  const comment = [
    {
      pic: "avater-1.png",
      name: "Siarhei Dzenisenka",
      date: "- 3 months ago",
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    },
    {
      pic: "avater-2.png",
      name: "Julias Roy",
      date: "- 6 months ago",
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      child:"true",
    },
    {
      pic: "avater-3.png",
      name: "Arista Williamson",
      date: "- 6 months ago",
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
    },
  ];
  const [item,setitem] = useState();
  useEffect(()=>{
    axios.get("http://localhost:313/blog").then((response)=>{
      setitem(response);
    })
  },[])
  return (
    <>
      <section className="blog__area box-plr-75 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-2 col-xl-3 col-lg-4">
              <Sidebar>
                <SidebarItem items={sidebar}></SidebarItem>
                <SidebarItem1 items={item?.data}></SidebarItem1>
                <sidebarItem items={sidebar1}></sidebarItem>
              </Sidebar>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
              <div className="row">
                <div className="col-xxl-12">
                  <PostBox item={comment} id={id} key={Math.random()}></PostBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetaile;
