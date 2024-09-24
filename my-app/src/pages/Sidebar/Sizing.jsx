import {Config} from '../../Utils'
import {Local} from "../../Utils";
import { Filter} from "../Components/FilterSizing";
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useEffect } from 'react';
export const Sizing= ({size,productLength,setItems,handelClick,selected,changeIcon,count, getData})=> {
    const eMessage="errore_message"
    const local=Local()
    let searchParam=new URLSearchParams(window.location.search)
    useEffect(()=>{
        SideOffcanvasToggle('.filter-toggle','product__widget')
     
    })
    return <>
       <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" >
                           سایز
                           <i className="fas fa-angle-down" style={{position:"absolute",left:"1rem"}} onClick={(event)=>{handelClick(event,3);changeIcon(event)}}></i> 

                        </button>
                    </h2>
                    {selected.includes(3) ?(
                         <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#productWidgetAccordion2">
                         <div className="accordion-body">
                             <div className="product__widget-content">
                                 <div className="product__size pt-10">
                                 <ul>
                                 {
                                     size?.data?.map((childItem,index) => {
                                     let filterItem=false;
                                     if (searchParam?.get("Size-Id")?.indexOf(childItem.id)>-1){
                                        count = true
                                         filterItem=true
                                     }
                                     return<>

                                     <li onClick={() => {Filter(getData,setItems,productLength,'Size-Id',childItem.id,eMessage,local)}}>
                                        <a href="javascript:void(0)"
 
                                         >
                                            {childItem.id}
                                         </a>
                                     </li>
                                     </>
                                                                    
                                     })
                     
                                     }
                                                                                                      
                                     </ul>
                                 </div>
                             </div>
                         </div>
                          </div>
                    ): null}




                  
                </div>
            </div>
        </div>
        
        <div className="product__widget-item mb-45">
            <div className="banner__item mb-20 w-img">
                <a href="product-details.html">
                    <img src={Config.banner +"banner-sm-4.jpg"} alt="" />
                </a>
            </div>
        </div>
    </>
}