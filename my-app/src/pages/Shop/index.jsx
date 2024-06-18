import { BreadCrumb } from "./BreadCrumb"
 import{ProductGraidWrapper} from "./ProductGraidWrapper"
import {Filter} from "./Filter"
import {Product} from "./Product"
import { SidebarData } from "../Sidebar/SidebarData"
import { Sidebar } from "../Sidebar"
export const Products = ({sidebars}) =>{
    return<>
        <main>
        <BreadCrumb></BreadCrumb>
        <section class="product__area box-plr-75 pb-70">
            <div class="container-fluid">
                <div class="row">
                    <Sidebar></Sidebar>
                <div class="col-xxl-10 col-xl-9 col-lg-8 order-first order-lg-last">
                    <div class="product__grid-wrapper">
                       <ProductGraidWrapper></ProductGraidWrapper> 
                    </div>
                    <div class="product__grid-item-wrapper pt-70">
                        <Filter></Filter>
                        <div class="tab-content" id="productGridTabContent">
                                    <div class="tab-pane fade  show active" id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
                                        <div class="row">
                                            <Product></Product>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </main>
    </>
}