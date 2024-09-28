import { useState } from "react"

export const  ProductDetailsDesTab= ({tab,setTab,change,count}) =>{

return<>
<div className="col-xxl-12">
<div className="product__details-des-tab mb-40 mt-110">
    <ul className="nav nav-tabs" id="productDesTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className={tab === 1 ? "nav-link" :"nav-link active"} id="des-tab" data-bs-toggle="tab" data-bs-target="#des"
             type="button" role="tab" aria-controls="des" 
             aria-selected="true"  onClick={() => change(2)}>جزئیات</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className={tab === 2 ? "nav-link" :"nav-link active"} id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
             type="button" role="tab" aria-controls="review"
              aria-selected="false" onClick={() => change(1)}>نظرات({count}) </button>
        </li>
    </ul>
</div>
</div>
</>
}