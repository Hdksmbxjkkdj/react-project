import {Sizing} from './Sizing';
import {Color} from './Color';
import {Rate} from './TopRate';
import { DomainPrice } from './DomainPrice';
import { useState } from 'react';
export const Sidebar = ({domain_price,colors,size,productLength,setItems}) =>{
    //accordion
        const[selected,setSelected]=useState([]);
        const handelClick =(id) =>{
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
                     <Color colors={colors} productLength={productLength} setItems={setItems} handelClick={handelClick} selected={selected} setSelected={setSelected}></Color>
                    <DomainPrice domain_price={domain_price} setItems={setItems}  handelClick={handelClick} selected={selected} setSelected={setSelected}></DomainPrice>  
                    <Sizing size={size} productLength={productLength} setItems={setItems}  handelClick={handelClick} selected={selected} setSelected={setSelected}></Sizing> 
                    <div className="product__widget-item">
                        <h3 className="product__widget-title mb-25">Top Rate</h3>
                            <div className="product__sm">
                            <ul>            
                                <Rate/> 
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
               
       
 </>
      
        
    
    
}
