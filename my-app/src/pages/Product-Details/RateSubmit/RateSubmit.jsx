import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children, useState ,useEffect} from "react"
import axios from "axios"
import { Notif } from "../../../Utils"
import { Rate } from "../../Components/Rate"
import { SendComment } from "../SendComment"
export const RateSubmit =({data,sendValue,sendQuality,sendPrice,item})=>{

     const [preScore, setPreScore] = useState(0)
     let auth 
    let loginMessage = 'first_login';
     let eMessage = 'error_message';
     let sMessage = 'success_message';
     let url = `http://localhost:313/product_comments`
//
//  const submit = async (rate) => {
  
//         // e.preventDefault();

//         // if (auth) {
//             // clearErrors()
            
//             await axios.post(url, {data,rate:rate}).then((response) => {                // let message = response.data?.message;
//             //   let message = "Insert";
//                           let message = "پیام شما با موفقیت ارسال شد";

//             //    if (response.data?.status == 201) {
//             //    if (data!= ""&&response?.status == 201) {
//                  if (response?.status == 201) {
//                     Notif('success', message)
//                     // Notif("error", "status خالی میباشد");
                   
//                     // reset()
//                     return
//                 }
//             }).catch((errors) => {
//                 // setError(errors?.response.data?.errors)
//             })

//             // errors?.length > 0 && Notif('error', eMessage)

//             return
//         // }

//         Notif('error', loginMessage)

//     };
//
    const applyRate = async () => {
    //    if (auth) {
          
            // // await axios.post(url, { product_id: item?.data?.id, rate: rate }).then((response) => {
            // await axios.post(url,{rate: rate, data}).then((response) => {
            //     console.log(rate)
            //     if (response?.status == 201) {
            //         // Notif('success', response.data.message,sMessage)
            //         Notif('success','l')

            //         console.log('bb',response)
            //         return
            //     } else {
            //          Notif('error', response.data.message)
            //         return
            //     }
            // }).catch((errors) => {
            //     Notif('error', eMessage)
            // })


            return
        }

        // Notif('error', loginMessage)
    // }
   
    return <>
      {
            (item?.rates?.length > 0) ? item.rates.map((rateItem) => {
                if (rateItem.customer_id == auth.id) {
                    return <Rate stars={rateItem.rate} type="comment" className="ms-3" />
                }
            })
                :
                <>
        {/* <ul> 
           
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(1)} onClick={()=> {sendQuality(1);sendValue(1);sendPrice(1)}}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(2)} onClick={() => {sendQuality(2);sendValue(2);sendPrice(2)}}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(3)} onClick={() => {sendQuality(3);sendValue(3);sendPrice(3)}}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(4)} onClick={() => {sendQuality(4);sendValue(4);sendPrice(4)}}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(5)} onClick={() => {sendQuality(5);sendValue(5);sendPrice(5)}}></FontAwesomeIcon></a></li>
        </ul> */}
         <ul> 
           
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(1)} onClick={()=> {sendQuality(1);setPreScore(1)}}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(2)} onClick={() => sendQuality(2)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(3)} onClick={() => sendQuality(3)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(4)} onClick={() => sendQuality(4)}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faStar}  onMouseOver={() => setPreScore(5)} onClick={() => sendQuality(5)}></FontAwesomeIcon></a></li>
        </ul>
        
        <div className="mx-3 d-flex align-items-start">
                        <span className="mx-1" > {preScore} </span>
                        <span> از </span>
                        <span> 5 </span>

                    </div>

    </> 
   
 }

 </>

  if (item.rates.length > 0) {
    item.rates.map((rateItem) => {
        if (rateItem.customer_id == auth.id) {
            <Rate stars={rateItem?.rate} />
        }
    })
} else {
    return
}

}