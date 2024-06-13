import { TabPane } from "./flashdeal/tab-pane"
const FlashDeal = ()=> {
    return (
        <>
            <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section__head d-md-flex justify-content-between mb-40">
                                <div className="section__title">
                                    <h3>فلاش بالا<span>معامله</span></h3>
                                </div>
                                <div className="product__nav-tab"> 
                                    <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#computer" type="button" role="tab" aria-controls="computer" aria-selected="true">کامپیوتر</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">سامسونگ</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">HTC</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">نوکیا</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab"  aria-selected="false">تلفن تماس</button>
                                        </li>
                                      </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tab-content" id="flast-sell-tabContent">
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