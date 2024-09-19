const Pagination = ({ count, getData }) => {
  return (
    <>
      <nav>
        <ul>
          {count?.paginationLength &&
            [...Array(count.paginationLength)].map((item, index) => {
              console.log((index) * count.Limit)
              return (
                <li>
                  <a href="javascript:void(0)" onClick={() => getData(index+1)}>
                    {index + 1}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export { Pagination };
