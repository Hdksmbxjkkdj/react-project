import { BestSellingHead } from "./best-selling/best-selling-head";
import {TabContent} from "./best-selling/tab-content";
import {ProductSlider} from "./best-selling/product-slider";
const BestSelling = ()=> {
    return (
            <section className="best__sell pt-15 pb-40 grey-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <BestSellingHead></BestSellingHead>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <TabContent></TabContent>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export {BestSelling};