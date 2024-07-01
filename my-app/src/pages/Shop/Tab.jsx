import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderAll } from "@fortawesome/free-solid-svg-icons"
import { faTh } from "@fortawesome/free-solid-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"
import{Select} from "./Select"
import { useState } from "react"
import { Product, ProductList } from "./Product"
export const Tab=({items,setItems})=>{
      //tab
      const [toggleState,setToggleStata]=useState(1)
  
      //tab
    const toggleTab =(index) =>{
        setToggleStata(index)
        console.log(toggleState)
}
    return<>
       <div className="product__filter mb-50">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="product__filter-left d-sm-flex align-items-center">
                                                <div className="product__col">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className={toggleState === 1 ? "nav-link" : "nav-link active"} id="FourCol-tab" data-bs-toggle="tab" data-bs-target="#FourCol"
                                                             type="button" role="tab" aria-controls="FourCol" aria-selected="true" onClick={() => toggleTab(1)}>
                                                               <FontAwesomeIcon icon={faBorderAll} className="fal fa-border-all"></FontAwesomeIcon>
                                                              </button>
                                                        </li>
                                                        {/* <li className="nav-item" role="presentation">
                                                            <button className={toggleState ===2 ? "nav-link" : "nav-link active"} id="FiveCol-tab" data-bs-toggle="tab" 
                                                            data-bs-target="#FiveCol" type="button" role="tab" aria-controls="FiveCol" aria-selected="false" onClick={() => toggleTab(2)}>
                                                            <FontAwesomeIcon icon={faTh} className="fal fa-th"></FontAwesomeIcon>
                                                              </button>
                                                        </li> */}
                                                        <li className="nav-item" role="presentation">
                                                            <button className={toggleState === 2 ? "nav-link" : "nav-link active"} id="list-tab" data-bs-toggle="tab" data-bs-target="#list" 
                                                            type="button" role="tab" aria-controls="list" aria-selected="false" onClick={() => toggleTab(2)}>
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
                      <div className="tab-content" id="productGridTabContent">
                           <div className={toggleState === 1 ? "tab-pane fade" : "tab-pane fade show active"}  id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
                                <div className="row">
                                    <Product key={Math.random()} setItems={setItems} items={items}></Product>
                                </div>
                            </div>
                           
                            <div className={toggleState === 2 ? "tab-pane fade" : "tab-pane fade show active"} id="list" role="tabpanel" aria-labelledby="list-tab">
                                <div className="row">
                                    <ProductList key={Math.random()} setItems={setItems} items={items}></ProductList>
                                </div>
                            </div>
                        </div>
    </>
}
