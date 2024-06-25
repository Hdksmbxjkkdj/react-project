import {P} from './P';
import {Color} from './Color';
import {Rate} from './TopRate';
import { DomainPrice } from './DomainPrice';
export const Sidebar = ({setItems,sidebars,domain_price}) =>{

    return<>
                <div className="col-xxl-2 col-xl-3 col-lg-4">
                <div className="product__widget">
                    <Color></Color>
                      <DomainPrice domain_price={domain_price} setItems={setItems}></DomainPrice>  
                    <P></P>
                    <div className="product__widget-item">
                        <h3 className="product__widget-title mb-25">Top Rate</h3>
                            <div className="product__sm">
                            <ul>            
                                {/* <Rate items ={sidebars} /> */}
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
               
       
 </>
      
        
    
    
}
