import { Config } from "../Utils";
export const ShowProduct = ({ children, setShowproduct,item })=>{
  
    return (
        <>
          <div
            className="position-fixed w-100 h-100 d-flex align-items-center"
            style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" ,zIndex:"1000"}}
          >
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                  <div className="card bg-white rounded shadow">
                    <div className="d-flex justify-content-between card-header">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                            setShowproduct({ show: false})
                        }
                      >
                        x
                      </button>
                    </div>
                    {/* <div className="card-body">{children}</div> */}
                    {/* <div className="product__details-thumb">
            <div className="tab-content" id="productThumbContent">
                <div className="tab-pane fade show active" id="thumbOne" role="tabpanel" aria-labelledby="thumbOne-tab">
                    <div className="product__details-nav-thumb"> */}
                        <img src={Config.shop+ "" +item} alt=""/>  
                       
                    </div>
                   
                {/* </div>
                </div>
                </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      );

}