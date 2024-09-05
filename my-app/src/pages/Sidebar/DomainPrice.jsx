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
              min: 75,
              max: 900,
            //   values: [200,900],
            // range: true,
            // min: parseInt(amount.attr('min')),
            // max: parseInt(amount.attr('max')),
            values: [amount.attr('min'), amount.attr('max')],
             slide: function (event, ui) {
                 window?.$("#amount").val( ui.values[0]+"/000"+" " +"تا" +" "+ui.values[1]+"/000"+"تومان");
               
            }, 
            stop: function (event, ui) {// نمیرود.اurlگر این قطعه نباشد ماکسیمم و مینیمم به 
                rangeIsChanged(ui)
            }
        });
              window?.$("#amount").val("تومان" +window?.$("#slider-range").slider("values", 0) +
             " - تومان" + window?.$("#slider-range").slider("values", 1));
    },[])
   
    //css
    const eMessage="errore_message"
    const local=Local()
    let searchParam=new URLSearchParams(window.location.search)
    useEffect(()=>{
        // priceRangeSlider(rangeIsChanged);

        SideOffcanvasToggle('.filter-toggle','product__widget')
     
    }
    )
    const rangeIsChanged=(ui)=>{//فقط مربوط به رنج قیمت است
        Filter(setItems, productLength, 'price_gt', ui.values[0], eMessage, local, 'domain', 'price_lte', ui.values[1])
         

    } 
          
    

    return<>
         <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion1">
                <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" onClick={()=>handelClick(2)}>
                          قیمت
                        </button>
                    </h2>
                    {/* {selected.includes(2) ?( */}
                        
                           <div id="collapseTwo"  style={{"direction":"ltr"}} className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#productWidgetAccordion1">
                           <div className="accordion-body">
                             <div className="product__widget-content">
                                   <div className="product__price-slider">
                                       <div>
                                           <form action="#" style={{direction:"rtl"}}>
                                               <input type="text" id="amount" readonly 
                                                //    iniMin={domain_price?.min}
                                                //    iniMax={domain_price?.max}
                                                //    min={searchParam?.get('price_gt') ? searchParam.get('price_gt'): domain_price?.min}
                                                    min={searchParam?.get('price_gt') ? searchParam.get('price_gt'):75}

                                                   max={searchParam?.get('price_lte') ? searchParam.get('price_lte') :900}
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

