const Pagination = ({ count }) => {
  console.log(count?.start)
  return (
    <>
      <nav>
        <ul>
          {count?.paginationLength &&
            [...Array(count.paginationLength)].map((item, index) => {
              return (
                <li >
                  <a href="#" onClick={() => count.setStart(index * 4)} className={(index * 4 == count.start)&&'bg-warning'} >
                    
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
