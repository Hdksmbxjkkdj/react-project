const BlogItem = () => {
  return (
    <>
      <div class="blog__item mb-30">
        <div class="blog__thumb fix">
          <a href="blog-details.html">
            <img src={"./img/blog/blog-1.jpg"} alt="" />
          </a>
        </div>
        <div class="blog__content white-bg">
          <h3>
            <a href="blog-details.html">Curabitur Lobortis News</a>
          </h3>
          <div class="blog__meta">
            <span>Post Date:</span>
            <span class="date"> 01-Jul-2020</span>
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