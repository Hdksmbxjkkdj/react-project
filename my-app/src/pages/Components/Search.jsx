import { Link } from "react-router-dom";
import { AddToCart as AddCartBtn } from "../Cart/AddToCart";
import { Config } from "../../Utils/config";
import axios from "axios";
import { Notif } from "../../Utils/Notif";

const ItemsSearch = () => {
  // const searching = new Promise(function(resolve,reject){
  //   var response = axios.get(`http://localhost:313/best_selling?text_like=${props}`);
  //   resolve(response)
  // }).then((res=>{
  //   console.log(res);
  // }))

    // return <>
    //     {
    //         result?.data.map((item) => {
    //             return <>
    //                 <div className="axil-product-list" key={Math.random()}>
    //                     <div className="thumbnail">
    //                         <Link href={`/http://localhost:313/products/${item.id}`}>
    //                             <img src={Config.shop+""+ item.image} alt={item.name} />
    //                         </Link>
    //                     </div>
    //                     <div className="product-content">
    //                         <h6 className="product-title">
    //                             <Link href={`/http://localhost:313/products/${item.id}`}>
    //                                 {item.name ?? ''}
    //                             </Link>
    //                         </h6>
    //                         <div className="product-cart">
    //                             {/* add icon buy */}
    //                             <AddCartBtn type="sm" item={item} />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </>
    //         })
    //     }
    // </>

    const searching = async (params, setVariable) => {
     
      axios.get(`http://localhost:313/best_selling?text_like=${params}`)
      .then((res) => {
          setVariable(res.data)
      })
    }

    return {searching}
}

export {ItemsSearch};