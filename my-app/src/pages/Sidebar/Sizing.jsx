import {Config} from '../../Utils'
import {Local} from "../../Utils";
import { Filter} from "../Components/Filter copy";
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useEffect } from 'react';
export const Sizing= ({size,productLength,setItems,handelClick,selected})=> {
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
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" onClick={()=>handelClick(3)}>
                           سایز
                        </button>
                    </h2>
                    {selected.includes(3) ?(
                         <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#productWidgetAccordion2">
                         <div className="accordion-body">
                             <div className="product__widget-content">
                                 <div className="product__size pt-10">
                                 <ul>
                                 {
                                     size?.data?.map((childItem) => {
                                     let filterItem=false;
                                     if (searchParam?.get("size")?.indexOf(childItem.id)>-1){
                                        
                                         filterItem=true
                                     }
                                     return<>
                                     <li>
                                        <a href="#"
 
                                         onClick={() => Filter(setItems,productLength,'Size-Id',childItem.id,eMessage,local)}>
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