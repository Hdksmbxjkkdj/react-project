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
                                    <h3><span>لیست</span>محصولات</h3>
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