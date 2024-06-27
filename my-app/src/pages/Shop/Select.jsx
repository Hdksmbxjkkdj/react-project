import {Local} from '../../Utils/Local'
import {Filter} from "../Components/Filter"
export const Select =({items,setItems})=>{
    const eMessage = 'error_message'
    const local = Local()
    let searchParam = new URLSearchParams(window.location.search);

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
                            
                            <option selected={searchParam?.get('sort')?.indexOf('desc')>-1? true:false} onClick={() =>Filter(setItems,items.length,'sort','desc',eMessage)}>position</option>
                            <option selected={searchParam?.get('sort')?.indexOf('popular') > -1 ? true : false} onClick={() => Filter(setItems, items.length, 'sort', 'popular', eMessage)}>product name</option>
                            <option selected={searchParam?.get('sort')?.indexOf('views') > -1 ? true : false} onClick={() => Filter(setItems, items.length, 'sort', 'views', eMessage)}>price</option>
                            {/* <option selected={searchParam?.get('sort')?.indexOf('p_asc') > -1 ? true : false} onClick={() => Filter(setItems, items.length, 'sort', 'p_asc', eMessage)}></option>
                           <option selected={searchParam?.get('sort')?.indexOf('p_desc') > -1 ? true : false} onClick={() => Filter(setItems, items.length, 'sort', 'p_desc', eMessage)}></option> */} 
                            {/* <option selected={}>Poduct Name</option>
                            <option selected={}>Price</option> */}
                    </select>
                </div>
            </div>
        </div>
    </>
}