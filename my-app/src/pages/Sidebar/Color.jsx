import { useEffect,useState } from "react"
import {Local} from "../../Utils";
import { Filter,removeFilter } from "../Components/Filter";
// import{Local,lang} from "../../Utils"
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useParams } from "react-router-dom";
import axios from "axios";

export const Color = ({colors,productLength, setItems,handelClick,selected}) =>{
  

    const eMessage="errore_message"
    const local=Local()
    let searchParam=new URLSearchParams(window.location.search)
    // useEffect(()=>{
    //     SideOffcanvasToggle('.filter-toggle','product__widget')
     
    // })
    return <>
    <div className="product__widget-item mb-15">
         <div className="accordion" id="productWidgetAccordion4">
             <div className="accordion-item">
                 <h2 className="accordion-header" id="headingfive">
                     <button className="accordion-button product__widget-title:" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive" onClick={()=>handelClick(1)}>
                        رنگ
                     </button>
                 </h2>
                    {selected.includes(1) ?(
                         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                         <div className="accordion-body">
                                                     <div className="product__widget-content">
                                                         <div className="product__color pt-10">
                                                             <ul>
                                                                {
                                                                  colors?.data?.map((childItem) => {
                                                                         let filterItem=false;
                                                                         if (searchParam?.get("color")?.indexOf(childItem.id)>-1){
                                                                             filterItem=true
                                                     
                                                                         }
                                                                        
                                                                         return<>
                                                                         <li>
                                                                             <a href="#" className={childItem.color}  onClick={() => Filter(setItems,productLength,'color-id',childItem.id,eMessage,local,'array')}>
                                                                               
                                                                           
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
                           
</>}