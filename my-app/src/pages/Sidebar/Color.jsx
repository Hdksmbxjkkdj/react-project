import { Local } from "../../Utils";
import { Filter, removeFilter } from "../Components/Filter";
export const Color = ({ colors, productLength, setItems, handelClick, selected, counts, setSelected, changeIcon, getData }) => {

    const eMessage = "errore_message"
    const local = Local()
    let searchParam = new URLSearchParams(window.location.search)
    return <>
        <div className="product__widget-item mb-15">
            <div className="accordion" id="productWidgetAccordion4">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfive">

                        <button className="accordion-button product__widget-title:" style={{ content: selected }} onClick={(event) => handelClick(event, 1)} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" id="color" aria-expanded="true" aria-controls="collapsefive">
                            <i className="fas fa-angle-down" style={{ position: "absolute", left: "1rem" }} onClick={(event) => { handelClick(event, 1); changeIcon(event) }}></i>

                            رنگ

                        </button>

                    </h2>
                    {selected.includes(1) ? (

                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                                <div className="product__widget-content">
                                    <div className="product__color pt-10">
                                        <ul>
                                            {
                                                colors?.data?.map((childItem, index) => {
                                                    let count = false;
                                                    let filterItem = false;
                                                    if (searchParam?.get("color-id")?.indexOf(childItem.id) > -1) {

                                                        count = true
                                                        filterItem = true

                                                    }

                                                    return <>
                                                        <li>
                                                            <a href="javascript:void(0)" className={childItem.color} onClick={() => { Filter(getData, setItems, productLength, 'color-id', childItem.id, eMessage, local) }}>
                                                                {/* <a href="javascript:void(0)" className={childItem.color}  onClick={() => Filter(setItems,productLength,'color-id',childItem.id,eMessage,local)}> */}


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
                    ) : null}

                </div>
            </div>
        </div>

    </>
}