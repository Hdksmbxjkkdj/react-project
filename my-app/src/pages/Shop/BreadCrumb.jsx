import { Link } from "react-router-dom"

export const BreadCrumb = () =>{
    return<>
          <section className="breadcrumb__area box-plr-75">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="breadcrumb__wrapper">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}