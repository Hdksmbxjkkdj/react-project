import {Local} from '../../Utils/Local'
import {Filter} from "../Components/Filter"
import { useEffect } from 'react'
export const Select =({items,setItems})=>{
    useEffect(()=>{
        window?.$("document").ready(function(){
           window?.$("select").niceSelect();
          })
     },[])
    const eMessage = 'error_message'
    const local = Local()
    let searchParam = new URLSearchParams(window.location.search);
    
    return<>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="product__filter-right d-flex align-items-center justify-content-md-end">
                <div className="product__sorting product__show-no">
                
                    <select className='option'>
                        <option selected={searchParam?.get('Number')?.indexOf('10')>-1? true:false} onClick={()=>Filter(setItems,items.length,'Number','10',eMessage)}>10</option>
                        <option selected={searchParam?.get('Number')?.indexOf('20')>-1? true:false} onClick={()=>Filter(setItems,items.length,'Number','20',eMessage)}>20</option>
                        <option selected={searchParam?.get('Number')?.indexOf('30')>-1? true:false} onClick={()=>Filter(setItems,items.length,'Number','30',eMessage)}>30</option>
                        <option selected={searchParam?.get('Number')?.indexOf('40')>-1? true:false} onClick={()=>Filter(setItems,items.length,'Number','40',eMessage)}>40</option>
                    </select>
                </div>
                <div className="product__sorting product__show-position mr-20">
                    <select className='option'>
                            
                            <option selected={searchParam?.get('sort')?.indexOf('desc')>-1? true:false} onClick={() =>Filter(setItems,items.length,'sort','desc',eMessage)}>موقعیت</option>
                            <option selected={searchParam?.get('sort')?.indexOf('popular') > -1 ? true : false} onClick={() => Filter(setItems, items.length, 'sort', 'popular', eMessage)}>نام محصول</option>
                            <option selected={searchParam?.get('sort')?.indexOf('views') > -1 ? true : false} onClick={() => Filter(setItems, items.length, 'sort', 'views', eMessage)}>قیمت محصول</option>
                          
                    </select>
                </div>
            </div>
        </div>
    </>
}