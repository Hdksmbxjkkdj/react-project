import { Config } from "../../../Utils";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTimes } from "@fortawesiome/free-solid-svg-icons";
import { Rank } from "../../Components/Rank";
export default function ModalBody({ data, showproduct }) {

    return (
    <>
      {/* <div className="row">
            <div className="col-12">
                <p>
                    {data?.name}
                </p>
                <p>
                    {data?.family}
                </p>
            </div>
        </div> */}
       <div className="modal fade quick-view-product" aria-labelledby="exampleModalXlLabel" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered product__modal" role="document">
          <div class="modal-content">
            <div class="product__modal-wrapper p-relative">
              <div class="product__modal-close p-absolute">
                <button data-bs-dismiss="modal">
                  {/* <i class="fa fa-times"></i> */}
                  {/* <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> */}
                </button>
              </div>
              <div class="product__modal-inner">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="product__modal-box">
                      <div class="tab-content" id="modalTabContent">
                        <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                          <div class="product__modal-img w-img">
                            <img src={Config.shop+""+showproduct.data.pic} alt=""/>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                          <div class="product__modal-img w-img">
                            <img src={Config.shop+""+showproduct.data.pic} alt=""/>
                          </div>
                        </div>
                      </div>
                      <ul class="nav nav-tabs" id="modalTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="nav1-tab" data-bs-toggle="tab"data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                            <img src={Config.shop+""+showproduct.data.pic} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={Config.shop+""+showproduct.data.pic} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={Config.shop+""+showproduct.data.pic} alt=""/>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                            <img src={Config.shop+""+showproduct.data.pic} alt=""/>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="product__modal-content">
                      <h4>
                        <a href="product-details.html">
                         {showproduct.data.text}
                        </a>
                      </h4>
                      <div class="product__modal-des mb-40">
                        <p>
                          {showproduct.data.des}
                        </p>
                      </div>
                      <div class="product__stock">
                        <span>وضعیت :</span>
                        <span>موجود</span>
                      </div>
                      <div class="product__stock sku mb-30">
                        <span>عنوان:</span>
                        <span></span>
                      </div>
                      <div class="product__review d-sm-flex">
                        <div class="rating rating__shop mb-15 mr-35">
                         <Rank></Rank>
                        </div>
                      </div>
                      <div class="product__price">
                        <span></span>
                      </div>
                      <div class="product__modal-form mb-30">
                        <form action="#">
                          <div class="pro-quan-area d-lg-flex align-items-center">
                            <div class="product-quantity mr-20 mb-25">
                              <div class="cart-plus-minus p-relative">
                                <input type="text" value="1" />
                              </div>
                            </div>
                            <div class="pro-cart-btn mb-25">
                                {/* <ProductAddbtn></ProductAddbtn> */}
                              <button class="t-y-btn" type="submit" >
                                لیست خرید +
                              </button>
                            </div>
                        
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
