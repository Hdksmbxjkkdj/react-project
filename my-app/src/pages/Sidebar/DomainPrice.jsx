import { useEffect } from "react"

export const DomainPrice =()=>{
    useEffect(() => {
        window?.$("#slider-range").slider({
             range: true,
            min: 0,
            max: 500,
             values: [75, 300],
             slide: function (event, ui) {
                window?.$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
         window?.$("#amount").val("$" +window?.$("#slider-range").slider("values", 0) +
             " - $" + window?.$("#slider-range").slider("values", 1));
    


        // window?.$.each( handlers, function( event, handler ) {
		// 	function handlerProxy() {
		// 		if ( !suppressDisabledCheck &&
		// 				( instance.options.disabled === true ||
        //                     window?.$( this ).hasClass( "ui-state-disabled" ) ) ) {
		// 			return;
		// 		}
		// 		return ( typeof handler === "string" ? instance[ handler ] : handler )
		// 			.apply( instance, arguments );
		// 	}

		// 	// Copy the guid so direct unbinding works
		// 	if ( typeof handler !== "string" ) {
		// 		handlerProxy.guid = handler.guid =
		// 			handler.guid || handlerProxy.guid || $.guid++;
		// 	}

		// 	var match = event.match( /^([\w:-]*)\s*(.*)$/ );
		// 	var eventName = match[ 1 ] + instance.eventNamespace;
		// 	var selector = match[ 2 ];

		// 	if ( selector ) {
		// 		delegateElement.on( eventName, selector, handlerProxy );
		// 	} else {
		// 		element.on( eventName, handlerProxy );
		// 	}
		// } );
    },[])


    return<>
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
    </>

}