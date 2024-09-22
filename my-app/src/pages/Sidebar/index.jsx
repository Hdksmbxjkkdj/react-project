import {Sizing} from './Sizing';
import {Color} from './Color';
import {TopRate} from './TopRate';
import { DomainPrice } from './DomainPrice';
import { useState ,useEffect} from 'react';
export const Sidebar = ({domain_price,colors,size,productLength,setItems,items,count}) =>{
   //تغییر شکل icon
   const changeIcon =(event)=>{
    //    console.log(window?.$(event.target).hasClass("fas fa-angle-down"))
    //    console.log(window?.$(event.target).hasClass("fas fa-angle-up"))
    
       if(window?.$(event.target).hasClass("fas fa-angle-down"))
           window?.$(event.target).removeClass().addClass("fas fa-angle-up")
       else if(window?.$(event.target).hasClass("fas fa-angle-up"))
           window?.$(event.target).removeClass().addClass("fas fa-angle-down")
           
            // window?.$(event.target).attr("calss").value()
            // window?.$(event.target).removeClass("fas fa-angle-up").addClass("fas fa-angle-down")
        }
   //iconتغییر شکل 

    useEffect(()=>{
        window?.$("select").niceSelect()
     },[])
    //accordion
        const[selected,setSelected]=useState([],"faWindowMinimize");
        const handelClick =(event,id) =>{
        //  window?.$(event.target).className(".accordion-button:after").remove()
        //  window?.$(event.target).css({backgroundColor:"white"})
        // setSelected(backgroundColor:"red")
        let copySelected=[...selected]
        selected.includes(id)
        ?(copySelected=copySelected.filter((item)=>item != id))
        :copySelected.push(id);
    setSelected(copySelected);
    }
    //accordion


    return<>
                <div className="col-xxl-2 col-xl-3 col-lg-4">
                <div className="product__widget">
                     <Color colors={colors} productLength={productLength} setItems={setItems} handelClick={handelClick} selected={selected} setSelected={setSelected} counts={count} changeIcon={changeIcon}></Color>
                    <DomainPrice domain_price={domain_price} setItems={setItems}  handelClick={handelClick} selected={selected} setSelected={setSelected} count={count} changeIcon={changeIcon}></DomainPrice>  
                    <Sizing size={size} productLength={productLength} setItems={setItems}  handelClick={handelClick} selected={selected} setSelected={setSelected} count={count} changeIcon={changeIcon}></Sizing> 
                    <div className="product__widget-item">
                        <h3 className="product__widget-title mb-25">  امتیاز بالا</h3>
                            <div className="product__sm">
                            <ul>            
                                <TopRate items={items}/> 
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
               
       
 </>
      
        
    
    
}
