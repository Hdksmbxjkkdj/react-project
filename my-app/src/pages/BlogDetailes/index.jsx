import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostBox } from "./postbox";

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
  const [comment,setComment] = useState();
  useEffect(()=>{
    axios.get(`http://localhost:313/comments?blog_id=${id}`).then((res)=>{
      setComment(res?.data);
    })
  },[])
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
          <div className="row justify-content-center">
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
