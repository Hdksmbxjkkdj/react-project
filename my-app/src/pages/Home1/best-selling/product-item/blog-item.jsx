import { Config } from "../../../../Utils/config";
import { Link } from "react-router-dom";
const BlogItem = ({blog}) => {
  return (
    <>
      <div className="blog__item mb-30">
        <div className="blog__thumb fix">
            <img src={Config.blog+"sidebar/"+blog?.pic} alt="" />
        </div>
        <div className="blog__content white-bg">
          <h3>
            <Link to={"/BlogDetaile/:"+blog?.id}>{blog?.title}</Link>
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