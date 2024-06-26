import { useEffect,useState } from "react"
import {Local} from "../../Utils";
import { Filter,removeFilter } from "../Components/Filter";
// import{Local,lang} from "../../Utils"
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useParams } from "react-router-dom";
import axios from "axios";
export const Color = ({ productLength, setItems}) =>{
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
                                                Color
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="product__widget-content">
                                                    <div className="product__color pt-10">
                                                        <ul>
                                                            {/* {
                                                               brands.map((childItem) => {
                                                                    let filterItem=false;
                                                                    if (searchParam?.get("brands")?.indexOf(childItem.id)>-1){
                                                                        filterItem=true
                                                                    }
                                                                   
                                                               })
                                                            } */}
                                                            <li>
                                                                <a href="#" className="black" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="blue" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="red" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="yellow" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="pink" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="brown" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="green" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="orange" onClick={() => Filter(setItems,productLength,'brand',childItem.id,eMessage,local,'array')}>
                                                                {/* {childItem['name_' + Local()]} ( {childItem['product_count_' + Local()] ? childItem['product_count_' + Local()] : 0} ) */}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </div>
        </div>
                           
    </>}