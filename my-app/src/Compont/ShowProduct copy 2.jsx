import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const ShowProduct = ({ setModalStatus, modalStatus, btns}) => {
 

  return (
    <>
      <div
        className="position-fixed w-100 h-100 d-flex align-items-center"
        style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "1000" }}
        // onClick={() =>
        //   setModalStatus({ show: false })
        // }
      >
        
        <div className="container">
      
          <div className="row justify-content-center align-items-center">
        
            <div className="col-12 col-md-6">
            <a href="jvascript:void(0)" className="bg-danger" onClick={() => btns(modalStatus.id)}>vnnnn
        <FontAwesomeIcon icon={faArrowRight} className="fs-1 text-white" ></FontAwesomeIcon>

        </a>
              <div className="card bg-white rounded shadow">
                <div className="d-flex justify-content-between card-header">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      setModalStatus({ show: false })
                    }
                  >
                    x
                  </button>
                </div>
                {/* <img src={modalStatus?.data} alt="" /> */}
                                <img src={modalStatus.data} alt="" />

              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faArrowLeft} className="fs-1 text-white"  onClick={() => btns(modalStatus.id, 'dec')}></FontAwesomeIcon>

      </div>
    </>
  );

}