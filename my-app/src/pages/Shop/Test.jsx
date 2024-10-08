import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Config } from "../../Utils";
import { useEffect, useState } from "react"
import axios from "axios";
import { Rate } from "../Product-Details/RateSubmit/Rate";
import { Filter } from "../Components/Filter";
import { Local } from "../../Utils";
export const Test = ({setItems,getData,productLength}) => {
  const eMessage="errore_message"
  const local=Local()
  var searchParams = new URLSearchParams(window.location.search)
  const [result, setResult] = useState([]); 

  const yuy = (e) => {
    window?.$(e.target).parent().parent().removeClass()
  }

  useEffect(() => {

    preparFilterShowing()
  }, [])

  
  const preparFilterShowing = () => {
    var query = searchParams.toString();
    var t = query.split("&")
    let result = [];

    t?.map((item) => {
      let field = item.split('=')

      let persianField;
      let persianValue;

      switch (field[0]) {
        case 'color-id':
          persianField = 'رنگ'
          break;
        case 'Size-Id':
          persianField = 'ابعاد'
          break;
          case 'price_lte':
            persianField = 'کمتر از'
            break;
        default:
          break;
      }

      switch (field[1]) {
        case "1":
          persianValue = 'مشکی'
          break;
        case "2":
          persianValue = 'آبی'
          break;
          case "3":
            persianValue = 'قرمز'
            break;
            case "4":
              persianValue = 'زرد'
              break;
              case "5":
                persianValue = 'قهوه ای'
                break;
                case "6":
                  persianValue = 'سبز'
                  break;
                  case "7":
                    persianValue = 'نارنجی'
                    break;
                    case "8":
                      persianValue = 'بنفش'
                      break;
      
        default:
          persianValue = field[1]
          break;
      }

      result.push({persianName: persianField, fieldName: field[0], value: persianValue,fieldValue:field[1]})
    

      // switch (item) {
      //   case "color-id=1":
      //     result.push(" رنگ :مشکی")
      //     break
      //   case "color-id=2":
      //     result.push(" رنگ :آبی")
      //     break
      //   case "color-id=3":
      //     result.push(" رنگ :قرمز")
      //     break
      //   case "color-id=4":
      //     result.push(" رنگ :زرد")
      //     break
      //   case "color-id=5":
      //     result.push(" رنگ :قهوه ای")
      //     break
      //   case "color-id=6":
      //     result.push(" رنگ : سبز")
      //     break
      //   case "color-id=7":
      //     result.push(" رنگ : نارنجی")
      //     break
      //     case "color-id=8":
      //       result.push(" رنگ : بنفش")
      //       break
      //   case "Size-Id=S":
      //     result.push(" سایز: S")
      //     break
      //     case "Size-Id=L":
      //       result.push("سایز :L")
      //       break
      //   case "Size-Id=M":
      //     result.push("سایز :M")
      //     break
      //   case "Size-Id=XL":
      //     result.push("سایز: XL")
      //     break
      //   case "Size-Id=XXL":
      //     result.push({persianName: persianField, fieldName: field[0], value: field[1]})
      //     break
      // }
      })
    setResult(result);
  }

  return <>


   
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">


        <ul className="d-flex">
          {
            result?.map((item) => {
             if (item.value==null)return
              return <>

               <li className="d-flex justify-content-center align-items-center shadow py-1 px-3 rounded-pill border border-4"
                onClick={() => { Filter(getData,setItems, productLength, item.fieldName, item.fieldValue,eMessage,local)}}
  
                >
                  <button className="btn rounded-circle text-danger"
                    //  onClick={(e)=>yuy(e)}     
                    >
                    x
                  
                  </button>
                 
                  {item.persianName}={item.value }
                </li>
              </>
            })
          }
        </ul>

      </div>
   



  </>
}