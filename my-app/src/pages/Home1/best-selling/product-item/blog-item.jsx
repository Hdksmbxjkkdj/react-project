import { Config } from "../../../../Utils/config";
const BlogItem = ({blog}) => {
  console.log(blog)
  return (
    <>
      <div className="blog__item mb-30">
        <div className="blog__thumb fix">
          <a href="blog-details.html">
            <img src={Config.blog+"sidebar/"+blog?.pic} alt="" />
          </a>
        </div>
        <div className="blog__content white-bg">
          <h3>
            <a href="blog-details.html">{blog?.title}</a>
          </h3>
          <div className="blog__meta">
            <span>Post Date:</span>
            <span className="date"> {blog?.date}</span>
          </div>
          <p>
            {blog?.text}
          </p>
        </div>
      </div>
    </>
  );
};

export {BlogItem};