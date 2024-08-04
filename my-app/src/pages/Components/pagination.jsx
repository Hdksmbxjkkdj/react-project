const Pagination = ({ count }) => {
  return (
    <>
    <nav>
      <ul>  
      {count?.paginationLength &&
        [...Array(count.paginationLength)].map((item, index) => {
          return <li>
              <a href="#" onClick={()=>count.setStart(index*4)}>{index+1}</a>
            </li>
        })}
       </ul>
     </nav>
    </>
  );
};

export { Pagination };
