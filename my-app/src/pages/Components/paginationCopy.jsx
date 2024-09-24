const Pagination = ({ count, getData }) => {
  // console.log(getData,"getData")
  // console.log( count?.paginationLength," paginationLength")
  // return count?.paginationLength> 0&& (
    return count?.paginationLength> 0&& (

    <>
      <nav>
        <ul>
          {/* {count?.paginationLength>0 ?( [...Array(count.paginationLength)].map((item, index) => {
              return (
                <li>
                  <a href="javascript:void(0)" onClick={() => getData(index+1)}>
                    {index + 1}
                  </a>
                </li>
              );
            })):(
              <div class="text-center justify-content-center p-3 Larger rounded">
                <h2 class="d-flex text-center justify-content-center text-warning shadow" style={{"backgroundColor":"#e0e0e0"}}>
                      محصولی وجود ندارد
                </h2>
              </div>
            )
            
           
            } */}

             {
             ( [...Array(count.paginationLength)].map((item, index) => {
              return (
                <li>
                  <a href="javascript:void(0)" onClick={() => {getData(index+1)}}>
                    {index + 1}
                    {/* {count.paginationLength} */}
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
