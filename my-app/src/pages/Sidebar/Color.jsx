export const Color = () =>{
    return<>
          <div className="product__widget-item mb-15">
                                <div className="accordion" id="productWidgetAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Color
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="product__widget-content">
                                                    <div className="product__color pt-10">
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="black"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="blue"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="red"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="yellow"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="pink"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="brown"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="green"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="oragne"></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__widget-item mb-15">
                                <div className="accordion" id="productWidgetAccordion1">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button product__widget-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Price
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#productWidgetAccordion1">
                                            <div className="accordion-body">
                                                <div className="product__widget-content">
                                                    <div className="product__price-slider">
                                                        <div>
                                                            <form action="#">
                                                                <input type="text" id="amount" readonly />
                                                            </form>
                                                        </div>
                                                        <div id="slider-range"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>}