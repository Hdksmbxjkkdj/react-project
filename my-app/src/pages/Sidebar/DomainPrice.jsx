import { useEffect,useState } from "react"
import {Local} from "../../Utils";
import { Filter,removeFilter } from "../Components/Filter";
// import{Local,lang} from "../../Utils"
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useParams } from "react-router-dom";
import axios from "axios";
export const DomainPrice =({setItems,productLength,domain_price,handelClick,selected})=>{

    useEffect(() => {
        
        let amount = window?.$('#amount')
        window?.$("#slider-range").slider({
             range: true,
              min: 0,
              max: 500,
              values: [75, 500],
             slide: function (event, ui) {
                 window?.$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
               
            }, 
            stop: function (event, ui) {// نمیرود.اurlگر این قطعه نباشد ماکسیمم و مینیمم به 
                rangeIsChanged(ui)
            }
        });
              window?.$("#amount").val("$" +window?.$("#slider-range").slider("values", 0) +
             " - $" + window?.$("#slider-range").slider("values", 1));
    },[])
   
    //css
    const eMessage="errore_message"
    const local=Local()
    let searchParam=new URLSearchParams(window.location.search)
    useEffect(()=>{
        SideOffcanvasToggle('.filter-toggle','product__widget')
     
    }
    )
    const rangeIsChanged=(ui)=>{//فقط مربوط به رنج قیمت است
        Filter(setItems, productLength, 'price', ui.values[0], eMessage, local, 'domain', 'max', ui.values[1])
         

    } 
          
    

    return<>
         <div className="product__widget-item mb-15" style={{"direction":"ltr"}}>
            <div className="accordion" id="productWidgetAccordion1">
                <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" onClick={()=>handelClick(2)}>
                          قیمت
                        </button>
                    </h2>
                    {/* {selected.includes(2) ?( */}
                        
                           <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#productWidgetAccordion1">
                           <div className="accordion-body">
                             <div className="product__widget-content">
                                   <div className="product__price-slider">
                                       <div>
                                           <form action="#">
                                               <input type="text" id="amount" readonly 
                                                   iniMin={domain_price?.min}
                                                   iniMax={domain_price?.max}
                                                   min={searchParam?.get('min') ? searchParam.get('min'): domain_price?.min}
                                                   max={searchParam?.get('max') ? searchParam.get('max') : domain_price?.max}
                                               />
                                           </form>

                                       </div>
                                       <div id="slider-range">
                                      
                                       </div>
                               </div>
                           </div>
                       </div>
                      </div>
                       
                    {/* ): null} */}




             
                </div>
             </div>
         </div>
    </>
    

}

