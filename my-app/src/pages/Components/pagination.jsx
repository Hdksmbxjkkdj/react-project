const Pagination = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="blog.html">
              <i class={(props.count.length)?"fa fa-chevron-left":"fa fa-chevron-left disabled"}></i>
            </a>
          </li>
          {props.count.map((item) => {
            return (
              <>
                <li>
                  <a href="blog.html">{item.number}</a>
                </li>
              </>
            );
          })}
          <li>
            <a href="blog.html">
              <i class={(props.count.length)?"fa fa-chevron-right":"fa fa-chevron-right disabled"}></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Pagination };
