import { useEffect,useState } from "react"
import {Local} from "../../Utils";
import { Filter,removeFilter } from "../Components/Filter";
// import{Local,lang} from "../../Utils"
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useParams } from "react-router-dom";
import axios from "axios";
export const Color = ({colors,productLength, setItems}) =>{
   
    const eMessage="errore_message"
    const local=Local()
    let searchParam=new URLSearchParams(window.location.search)
    useEffect(()=>{
        SideOffcanvasToggle('.filter-toggle','product__widget')
     
    })
    return<>
        <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              رنگ
                                            </button>
                                        </h2>
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
                                                                        <a href="#" className={childItem.color} onClick={() => Filter(setItems,productLength,'color-id',childItem.id,eMessage,local,'array')}>
                                                                            {/* {console.log(setItems,productLength,'brand',childItem.id)} */}
                                                                        {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
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
                                    </div>
            </div>
        </div>
                           
    </>}