import {Config} from '../../Utils'
import {Local} from "../../Utils";
import { Filter} from "../Components/FilterSizing";
import {SideOffcanvasToggle} from '../../Utils/SideOffcanvasToggle'
import { useEffect,useState } from 'react';
import { Test } from '../Shop/Test';
import { cleanData } from 'jquery';
export const Sizing= ({size,productLength,setItems,handelClick,selected,changeIcon,count, getData})=> {
    const eMessage="errore_message"
    const local=Local()
    let searchParam=new URLSearchParams(window.location.search)
    useEffect(()=>{
        SideOffcanvasToggle('.filter-toggle','product__widget')
      
    })
    // const changeCss=(e,childItem)=>{
    //     console.log(childItem,"childItem.id")
    //     if (searchParam?.get("Size-Id")?.indexOf(childItem)>-1){
    //        window?.$(e.target).css({backgroundColor:"red"})
    //      }
    //     else {
    //         window?.$(e.target).css({backgroundColor:"#fcb700"})
    //       }
    // }
       
   
    //   if(window?.$(e.target).hasClass("changeCss"))
    //     window?.$(e.target).removeClass()
    // else if(window?.$(e.target).hasClass("fas fa-angle-up"))
    //     window?.$(e.target).removeClass().addClass("fas fa-angle-down")
    // }
    // const[bg,setBg]=useState("white")

    return <>
       <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse"  onClick={(event)=>{handelClick(event,3)}} data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" >
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

                                    {/* <li onClick={(e) => {Filter(getData,setItems,productLength,'Size-Id',childItem.id,eMessage,local);setBg((bg=="white"?"#fcb700":"white"))}} style={{backgroundColor:bg}} id="size"> */}
                                    <li  onClick={(e) => {Filter(getData,setItems,productLength,'Size-Id',childItem.id,eMessage,local)}} >

                                     {/* <li onClick={() => {Filter(getData,setItems,productLength,'Size-Id',childItem.id,eMessage,local);setModal({show:!modal.show,data:childItem.id})}}> */}
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
        {/* {modal.show && (
                            <Test
                              
                                setModal={setModal}
                                modal={modal}
                        
            
                            ></Test>
                        )} */}
        <div className="product__widget-item mb-45">
            <div className="banner__item mb-20 w-img">
                <a href="product-details.html">
                    <img src={Config.banner +"banner-sm-4.jpg"} alt="" />
                </a>
            </div>
        </div>
    </>
}