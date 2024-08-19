import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children, useState ,useEffect} from "react"
import axios from "axios"
import { Notif } from "../../Utils"
import { Rate } from "./Rate"
export const NewRank =()=>{
//     const[item,setItem]=useState()
//     useEffect(() => {
//         axios.get(`http://localhost:313/product_comments`).then((res) => {

//               setItem(res?.data);
//       });
//   }, []);
//   console.log(item,'star')
//     const [preScore, setPreScore] = useState(0)

//     let auth 
//     let loginMessage = 'first_login';
//     let eMessage = 'error_message';
//     let sMessage = 'success_message';
//     let url = `http://localhost:313/star`

//     const applyRate = async (rate) => {
//         if (auth) {

//             await axios.post(url, { product_id: item.id, rate: rate }).then((response) => {
//                 if (response.data.status == 201) {
//                     Notif('success', response.data.message)
//                     return
//                 } else {
//                     Notif('error', response.data.message)
//                     return
//                 }
//             }).catch((errors) => {
//                 Notif('error', eMessage)
//             })


//             return
//         }

//         Notif('error', loginMessage)
//     }
   
    return <>
      {/* {
            (item.rates.length > 0) ? item.rates.map((rateItem) => {
                if (rateItem.customer_id == auth.id) {
                    return <Rate stars={rateItem.rate} type="comment" className="ms-3" />
                }
            })
                :
                <>
        <ul> 
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(1)} onClick={() => applyRate(1)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(2)} onClick={() => applyRate(2)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(3)} onClick={() => applyRate(3)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(4)} onClick={() => applyRate(4)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(5)} onClick={() => applyRate(5)}></FontAwesomeIcon></a></li>
        </ul>

    </> */}
{/* } */}
{/* </>
  if (item.rates.length > 0) {
    item.rates.map((rateItem) => {
        if (rateItem.customer_id == auth.id) {
            <Rate stars={rateItem?.rate} />
        }
    })
} else {
    return
} */}
</>
}