export const Select =()=>{
    return<>
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
    </>
}