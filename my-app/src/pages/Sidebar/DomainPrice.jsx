import { useEffect,useState } from "react"
import {Local} from "../../Utils";
import { Filter,removeFilter } from "../Components/FilterPrice";
// import{Local,lang} from "../../Utils"
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useParams } from "react-router-dom";
import axios from "axios";
export const DomainPrice =({getData,setItems,productLength,domain_price,handelClick,selected,changeIcon})=>{

    useEffect(() => {
        
        let amount = window?.$('#amount')
        window?.$("#slider-range").slider({
             range: true,
              min: 60,
              max: 900,
            //   values: [200,900],
            // range: true,
            // min: parseInt(amount.attr('min')),
            // max: parseInt(amount.attr('max')),
            values: [amount.attr('min'), amount.attr('max')],
             slide: function (event, ui) {
                 window?.$("#amount").val( ui.values[0]+"/000"+" " +"تا" +" "+ui.values[1]+"/000"+"ت");
               
            }, 
            stop: function (event, ui) {// نمیرود.اurlگر این قطعه نباشد ماکسیمم و مینیمم به 
                rangeIsChanged(ui)
            }
        });
              window?.$("#amount").val(window?.$("#slider-range").slider("values", 0)+"/000"+"ت-" +
              +window?.$("#slider-range").slider("values", 1)+"/000"+"ت");
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
        Filter(getData,setItems, productLength, 'price_lte', ui.values[1], eMessage, local, 'domain')
         

    } 
          
    

    return<>
         <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion1">
                <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" onClick={(event)=>{handelClick(event,2)}} data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          قیمت
                          <i className="fas fa-angle-down" style={{position:"absolute",left:"1rem"}} onClick={(event)=>{handelClick(event,2);changeIcon(event)}}></i> 

                        </button>
                    </h2>
                    {/* {selected.includes(2) ?( */}
                        
                           <div id="collapseTwo"  style={{"direction":"ltr"}} className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#productWidgetAccordion1">
                           <div className="accordion-body">
                             <div className="product__widget-content">
                                   <div className="product__price-slider">
                                       <div>
                                           <form  style={{direction:"rtl"}}>
                                               <input type="text" id="amount" readonly 
                                                //    iniMin={domain_price?.min}
                                                //    iniMax={domain_price?.max}
                                                //    min={searchParam?.get('price_gt') ? searchParam.get('price_gt'): domain_price?.min}
                                                    min={searchParam?.get('price_gt') ? searchParam.get('price_gt'):60}

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

