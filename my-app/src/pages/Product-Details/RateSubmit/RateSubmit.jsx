import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children, useState ,useEffect} from "react"
import axios from "axios"
import { User } from "../../../Utils"
import { Notif } from "../../../Utils"
import { Rate } from "./Rate"
import { SendComment } from "../SendComment"
import { Rank } from "./Rank"
export const RateSubmit =({item,setQuality,setPrice})=>{
      
     const [preScore, setPreScore] = useState(0)
     let auth = User()
    let loginMessage = 'first_login';
     let eMessage = 'error_message';
     let sMessage = 'success_message';
     let url = `http://localhost:313/product_comments`
     let user = localStorage.getItem("user");
     user = JSON.parse(user);
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

    // const applyRate = async () => {
    // //    if (auth) {
          
    //         // await axios.post(url, { product_id: item?.data?.id, rate: rate }).then((response) => {
    //         await axios.post(url,{rate: rate, data}).then((response) => {
    //             // console.log(rate)
    //             if (response?.status == 201) {
    //                 // Notif('success', response.data.message,sMessage)
    //                 Notif('success','l')

    //                 console.log('bb',response)
    //                 return
    //             } else {
    //                  Notif('error', response.data.message)
    //                 return
    //             }
    //         }).catch((errors) => {
    //             Notif('error', eMessage)
    //         })


    //         return
    //              }

        // Notif('error', loginMessage)
    // }
    const applyRate = async (rate) => {
    //     if(user!=null){

    //         await axios.post(url, { product_id: user.id, rate: rate ,quality}).then((response) => {
    //             if (response.data.status == 201) {
    //                 console.log(response,'k')
    //                 Notif('success', response.data.message)
    //                 return
    //             } else {
    //                 Notif('error', response.data.message)
    //                 return
    //             }
    //         }).catch((errors) => {
    //             Notif('error', eMessage)
    //         })


    //         return
    //      }

    //     Notif('error', loginMessage)
    // }
    // console.log(user.id,'kk')
    }
    return <>
   
      {/* {
            (item?.data?.length > 0) ? item?.data?.map((rateItem) => {
                if (rateItem.customer_id == auth.id) {
                if (rateItem.id == auth.id) {
                   return <Rate stars={rateItem.rate} type="comment" className="mx-3" />
                    
                    return <Rate stars={rateItem.quality} type="comment" className="ms-3" />
                // }
            }) */}
            {
            // (item?.data?.rate?.length > 0) ? item?.rate?.map((rateItem) => {
                (item?.data?.rate?.length > 0) ? item?.data?.map((rateItem) => {
                // (item?.data?.length > 0) ? item?.data?.map((rateItem) => {

                if (rateItem.id_customer == user.id) {
                // if(user.id!=null)  
                    
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
         <Rank setQuality={setQuality} setPrice={setPrice}></Rank>
        {/* <li><a href="#" onMouseOver={() => setPreScore(1)}  onClick={()=> {setQuality(1);applyRate(1)}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
        <li><a href="#" onMouseOver={() => setPreScore(2)}  onClick={()=> {setQuality(2);applyRate(2)}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
        <li><a href="#" onMouseOver={() => setPreScore(3)}  onClick={()=> {setQuality(3);applyRate(3)}}><FontAwesomeIcon icon={faStar} ></FontAwesomeIcon></a></li>
        <li><a href="#" onMouseOver={() => setPreScore(4)}  onClick={()=> {setQuality(4);applyRate(4)}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li>
        <li><a href="#" onMouseOver={() => setPreScore(5)}  onClick={()=> {setQuality(5);applyRate(5)}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a></li> */}
        </ul>
        
        

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