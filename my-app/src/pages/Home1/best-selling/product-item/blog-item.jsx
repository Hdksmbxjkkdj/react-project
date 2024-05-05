const BlogItem = () => {
  return (
    <>
      <div className="blog__item mb-30">
        <div className="blog__thumb fix">
          <a href="blog-details.html">
            <img src={"./img/blog/blog-1.jpg"} alt="" />
          </a>
        </div>
        <div className="blog__content white-bg">
          <h3>
            <a href="blog-details.html">Curabitur Lobortis News</a>
          </h3>
          <div className="blog__meta">
            <span>Post Date:</span>
            <span className="date"> 01-Jul-2020</span>
          </div>
          <p>
            Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh.
            In dignissim vitae lorem non mollis.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export {BlogItem};