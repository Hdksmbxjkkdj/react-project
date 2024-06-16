export const Filter=()=>{
    console.log('filter')
    return<>
       <div className="product__filter mb-50">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="product__filter-left d-sm-flex align-items-center">
                                                <div className="product__col">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="FourCol-tab" data-bs-toggle="tab" data-bs-target="#FourCol" type="button" role="tab" aria-controls="FourCol" aria-selected="true">
                                                                <i className="fal fa-border-all"></i>
                                                              </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="FiveCol-tab" data-bs-toggle="tab" data-bs-target="#FiveCol" type="button" role="tab" aria-controls="FiveCol" aria-selected="false">
                                                                <i className="fal fa-th"></i>
                                                              </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                                                                <i className="fal fa-list"></i>
                                                              </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product__result pl-60">
                                                    <p>Showing 1-20 of 29 relults</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                            <div className="product__filter-right d-flex align-items-center justify-content-md-end">
                                                <div className="product__sorting product__show-no">
                                                    <select>
                                                            <option>10</option>
                                                            <option>20</option>
                                                            <option>30</option>
                                                            <option>40</option>
                                                        </select>
                                                </div>
                                                <div className="product__sorting product__show-position ml-20">
                                                    <select>
                                                            <option>Position</option>
                                                            <option>Poduct Name</option>
                                                            <option>Price</option>
                                                        </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        </div>
    </>
}