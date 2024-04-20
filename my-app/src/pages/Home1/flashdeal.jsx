import { TabPane } from "./flashdeal/tab-pane"
const FlashDeal = ()=> {
    return (
        <>
            <section class="flash__sell pt-25 pb-40 grey-bg-2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section__head d-md-flex justify-content-between mb-40">
                                <div class="section__title">
                                    <h3>Top Flash<span>Deals</span></h3>
                                </div>
                                <div class="product__nav-tab"> 
                                    <ul class="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                          <button class="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="true">computer</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">samsung</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">HTC</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Nokia</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab"  aria-selected="false">Cell Phones</button>
                                        </li>
                                      </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="tab-content" id="flast-sell-tabContent">
                                <TabPane></TabPane>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {FlashDeal};