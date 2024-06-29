import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderAll } from "@fortawesome/free-solid-svg-icons"
import { faTh } from "@fortawesome/free-solid-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"
import{Select} from "./Select"
export const Filter=()=>{
    return<>
       <div className="product__filter mb-50">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="product__filter-left d-sm-flex align-items-center">
                                                <div className="product__col">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="FourCol-tab" data-bs-toggle="tab" data-bs-target="#FourCol" type="button" role="tab" aria-controls="FourCol" aria-selected="true">
                                                               <FontAwesomeIcon icon={faBorderAll} className="fal fa-border-all"></FontAwesomeIcon>
                                                              </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="FiveCol-tab" data-bs-toggle="tab" data-bs-target="#FiveCol" type="button" role="tab" aria-controls="FiveCol" aria-selected="false">
                                                            <FontAwesomeIcon icon={faTh} className="fal fa-th"></FontAwesomeIcon>
                                                              </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                                                            <FontAwesomeIcon icon={faList} className="fal fa-list"></FontAwesomeIcon>
                                                              </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product__result pl-60">
                                                    <p>Showing 1-20 of 29 relults</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Select></Select>
                                    </div>
        </div>
    </>
}