export const  ProductDetailsDesTab= () =>{
return<>
<div class="col-xxl-12">
<div class="product__details-des-tab mb-40 mt-110">
    <ul class="nav nav-tabs" id="productDesTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="des-tab" data-bs-toggle="tab" data-bs-target="#des" type="button" role="tab" aria-controls="des" aria-selected="true">جزئیات</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">نظرات </button>
        </li>
    </ul>
</div>
</div>
</>
}