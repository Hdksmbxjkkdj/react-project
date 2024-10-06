const Pagination = ({ count }) => {
  return (
    <>
      <nav className="mx-5">
        <ul>
          {count?.paginationLength &&
            [...Array(count.paginationLength)].map((item, index) => {
              return (
                <li >
                  <a type="button" onClick={() => count.setPage(index+1)} className={(index+1 === count.page)?'bg-warning':''} >
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
