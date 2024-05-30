export const P= ()=> {
    const img = "https://picsum.photos/291";
    return <>
       <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Price
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#productWidgetAccordion2">
                        <div className="accordion-body">
                            <div className="product__widget-content">
                                <div className="product__size pt-10">
                                    <ul>
                                        <li>
                                            <a href="#">S</a>
                                        </li>
                                        <li>
                                            <a href="#">M</a>
                                        </li>
                                        <li>
                                            <a href="#">L</a>
                                        </li>
                                        <li>
                                            <a href="#">XL</a>
                                        </li>
                                        <li>
                                            <a href="#">XXL</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="product__widget-item mb-45">
            <div className="banner__item mb-20 w-img">
                <a href="product-details.html">
                    <img src={img} alt="" />
                </a>
            </div>
        </div>
    </>
}