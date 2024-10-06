const Pagination = ({ count, getData }) => {
 
    return count?.paginationLength> 1&& (

    <>
      <nav>
        <ul>
         

             {
             ( [...Array(count.paginationLength)].map((item, index) => {
              return (
                <li>
                  <a href="javascript:void(0)" onClick={() => {getData(index+1)}}>
                    {index + 1}
                   
                  </a>
                </li>
              );
            }))
           
            }
        </ul>
      </nav>
    </>
  );
};

export { Pagination };
