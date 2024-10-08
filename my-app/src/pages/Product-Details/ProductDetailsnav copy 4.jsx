import { Config } from "../../Utils";
import { useState } from "react";
import { ShowProduct } from "../../Compont/ShowProduct";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ProducDetailsImg = ({ item, picturs, img }) => {
    const [modalStatus, setModalStatus] = useState({
        show: false,
        data: null,
        tittle: null,
        id: null
    });
    // const[c,setC]=useState(0)
    // const[g,setG]=useState
    // ()
  
    const btns=(c, type = 'inc')=>{
        console.log(c,"c")
        if (type == 'inc') {
            if (c < picturs?.length - 1) {
                c += 1
            }else{
                c = 0
            }
        }else{
            if (c > 0) {
                c -= 1
            }else{
                c = picturs?.length - 1
            }
        }
        
        // setC(c)
        setModalStatus({data:window?.$(".show-"+(c)).attr("src"), show: true, id: c})
    
    //    case"c-1": 
    //    setC(c-1)
    //    setModalStatus({data:window?.$(".show-"+(c)).attr("src")})
      
    } 
    // const btnss=(c)=>{
   
    //     setC(c-1)
    //     setModalStatus({data:window?.$(".show-"+(c)).attr("src")})
   
    // } 
    return (
        <>
        {/* <div >
            <button onClick={()=>btns(c+1)}>اضافه</button>

            <img src={modalStatus?.data}></img>
            <button onClick={()=>btnss(c-1)}>حذف</button>
        </div> */}
            <div className="col-xxl-5 col-xl-5 col-lg-5 test">
                <div className="product__details-nav d-sm-flex align-items-start response-gallery-parent">
                    <ul
                        className="response-gallery nav nav-tabs flex-sm-column justify-content-between d-flex flex-nowrap images-product"
                        style={{ maxHeight: "30rem", overflowY: "auto" }}
                        id="productThumbTab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                onClick={(event) => {
                                    handleImg(event, 0);
                                }}
                                id="thumbOne-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#thumbOne"
                                type="button"
                                role="tab"
                                aria-controls="thumbOne"
                                aria-selected="true"
                            >
                                <img
                                    src={Config.shop + "" + item}
                                    alt=""
                                    className={"delete show-0"}
                                    id="u"
                                    style={{ border: "2px solid #ffc107" }}
                                />
                            </button>
                        </li>
                        {picturs?.map((item, i) => {
                            let index = i + 1;
                            return (
                                <li className="nav-item dere" role="presentation">
                                    <button
                                        onClick={(event) => {
                                            handleImg(event, index);
                                        }}
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#thumbOne"
                                        type="button"
                                        role="tab"
                                        aria-controls="thumbOne"
                                        aria-selected="true"
                                    >
                                        <img
                                            src={Config.shop + "" + item?.name}
                                            alt=""
                                            className={"delete show-" + index}
                                        />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="product__details-thumb">
                        <div className="tab-content" id="productThumbContent">
                            <div
                                className="tab-pane fade show active"
                                id="thumbOne"
                                role="tabpanel"
                                aria-labelledby="thumbOne-tab"
                            >
                                <div className="product__details-nav-thumb">
                                    <img
                                        className="preview"
                                        src={Config.shop + "" + item}
                                        alt=""
                                        onClick={(event) =>
                                            setModalStatus({
                                                show: true,
                                                data: window?.$(event.target).attr("src"),
                                                id: window?.$(event.target).attr("data-index")
                                            })
                                        }
                                    />

                                    {modalStatus.show && (
                                        <ShowProduct
                                            key={Math.random()}
                                            setModalStatus={setModalStatus}
                                            modalStatus={modalStatus}
                                       
                                            picturs={picturs}
                                           
                                            btns={btns}
                                        ></ShowProduct>
                                    )}

                                    <FontAwesomeIcon
                                        icon={faSearchPlus}
                                        style={{ fontSize: "25px", cursor: "pointer" }}
                                        className="me-5"
                                        onClick={(event) =>
                                            setModalStatus({
                                                show: true,
                                                data: window?.$(event.target).parent().parent().find(".preview").attr("src"),
                                            })
                                        }
                                    ></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

//showproduct
const handleImg = (event, i) => {
  

    window?.$(".delete").removeAttr("style");
    window?.$(".show-" + i).css({ border: "1px solid #ffc107" });
    window?.$(".show-" + i).attr('data-index', i);

    let preview = window?.$(".product__details-thumb img");
    preview.fadeOut(100);

    preview.attr("src", window?.$(event.target).parent().find("img").attr("src"));
    preview.fadeIn(300);
};
