import { useEffect,useState } from "react"
import {Local} from "../../Utils";
import { Filter,removeFilter } from "../Components/Filter";
// import{Local,lang} from "../../Utils"
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useParams } from "react-router-dom";
import axios from "axios";

export const Color = ({colors,productLength, setItems,handelClick,selected,counts}) =>{
  
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
                        //  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" className={searchParam?.get('parent_category')?.indexOf(item.id) > -1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>

                         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" > 
                         <div className="accordion-body">
                                                     <div className="product__widget-content">
                                                         <div className="product__color pt-10">
                                                             <ul>
                                                                {
                                                                  colors?.data?.map((childItem, index) => {
                                                                
                                                                    let count = false;
                                                                         let filterItem=false;
                                                                         if (searchParam?.get("color-id")?.indexOf(childItem.id)>-1){
                                                                           
                                                                            count = true
                                                                             filterItem=true
                                                                         if (count) {
                                                                            window?.$(`#collapseOne`).addClass('show')
                                                                            window?.$(`#collapseOne`).prev().find('button').removeClass('collapsed')
                                                                        }
                                                                    }
                                                                        
                                                                         return<>
                                                                         <li>
                                                                              <a href="javascript:void(0)" className={childItem.color}  onClick={() => Filter(setItems,productLength,'color-id',childItem.id,eMessage,local,counts)}>
                                                                                                                                                                    {/* <a href="javascript:void(0)" className={childItem.color}  onClick={() => Filter(setItems,productLength,'color-id',childItem.id,eMessage,local)}> */}

                                                                           
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