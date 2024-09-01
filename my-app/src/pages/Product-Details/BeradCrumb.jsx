import { Link } from "react-router-dom"

export const BradCrumb=()=>{
    return<>
        <section class="breadcrumb__area box-plr-75">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12">
                        <div class="breadcrumb__wrapper">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">خانه</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">جزئیات محصول</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}