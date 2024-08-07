// import axios from "axios";
// import { Local, Notif, User } from "../../Utils";
// import { useEffect, useState } from "react";

// export const Favorite = ({items,type = 'md', className = null }) => {
//     // let { items,favorite,products,subjects,keywords } =props;
  
//     let auth = User()
//     let loginMessage = 'first_login'
//     let sMessage = 'success_message'
//     let eMessage = 'error_message'
//     let url = `/${Local()}/product-favorite`
//     let itemClass = `fav-${item.id}`
//     const [is_favorite, setIs_favorite] = useState(false)

//     useEffect(() => {
//         if (item?.bookmarks?.length > 0) {
//             setIs_favorite(true)
//         }
//     }, [])


//     async function handleClick(event) {
        
//         window?.$(event.target).parent().find('.spinner-container').css('display', 'flex')

//         if (auth) {

//                 try {
//                     let status = 200;
//                     let message = sMessage;

//                     await axios.post(url, { product_id: item.id }).then((response) => {
//                         if (response.data.status) status = response.data.status
//                         message = response.data.message
//                     })

//                     switch (status) {
//                         case 200:
//                             setIs_favorite(true)
//                             window?.$(`.${itemClass}`).addClass('text-white bg-danger border-0')
//                             Notif('success', message)
//                             break;

//                         case 201:
//                             setIs_favorite(false)
//                             window?.$(`.${itemClass}`).removeClass('text-white bg-danger border-0')
//                             Notif('success', message)
//                             break;

//                         default:
//                             Notif('error', message)
//                             break;
//                     }

//                 } catch (error) {
//                     Notif('error', eMessage)
//                 }

//                 return
//         }

//         Notif('error', loginMessage)

//         window?.$('.spinner-container').fadeOut(300)
//     }

//     if (auth) {
//         if (is_favorite) {
//             return <>
//                 {
//                     type == 'md' ? <li className="wishlist loading-container">
//                         <a onClick={handleClick} className={className ? `${itemClass} text-white bg-danger border-0 ${className}` : `${itemClass} text-white bg-danger border-0 loading-container`} >
//                             <i className="far fa-heart"></i>
//                         </a>
//                     </li> : <span className="loading-container"><a onClick={()=>handleClick()} className={`${itemClass} cart-btn  text-white bg-danger border-0 loading-container`}>
//                         <i className="far fa-heart"></i>
//                     </a></span>
//                 }
//             </>
//         }
//     }

//     return <>
//         {
//             type == "md" ? <li className="wishlist">
//                 <a onClick={handleClick} className={className ? `${itemClass} ${className} loading-container` : `${itemClass} loading-container`}>
//                     <i className="far fa-heart"></i>
//                 </a>
//             </li> : <span className="loading-container"><a onClick={handleClick} className={`${itemClass} cart-btn loading-container`}>
//                 <i className="far fa-heart"></i>
//             </a></span>
//         }
//     </>
// }