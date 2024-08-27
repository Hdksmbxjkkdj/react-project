import { Config } from "../../../../Utils/config";
import { Link } from "react-router-dom";
const BlogItem = ({blog}) => {
  return (
    <>
      <Link to={`/blogDetaile/${blog.id}`}>
      <div className="blog__item mb-30">
        <div className="blog__thumb fix">
            <img className="rounded-1" src={Config.blog+"sidebar/"+blog?.pic} alt="" />
        </div>
        <div className="blog__content white-bg" style={{textAlign:"right"}}>
          <h3>
            {blog?.title}
          </h3>
          <div className="blog__meta">
            <span className="date"> {blog?.date}</span>{" "}
            <span>: تاریخ وبلاگ</span>
          </div>
          <p>
            {blog?.text}
          </p>
        </div>
      </div>
      </Link>
    </>
  );
};

export {BlogItem};