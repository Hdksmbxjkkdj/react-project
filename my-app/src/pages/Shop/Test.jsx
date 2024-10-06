import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Config } from "../../Utils";
import { useEffect, useState } from "react"
import axios from "axios";
import { Rate } from "../Product-Details/RateSubmit/Rate";
import { removeFilter } from "../Components/Filter";
export const Test = ({setItems,getData}) => {
  var searchParams = new URLSearchParams(window.location.search)
  const [result, setResult] = useState([]); 

  // const yuy = (e) => {
  //   window?.$(e.target).remove()
  //   console.log("jj")
  // }

  useEffect(() => {
    preparFilterShowing()
  }, [])

  
  const preparFilterShowing = () => {
    var query = searchParams.toString();
    var t = query.split("&")
    let result = [];

    t?.map((item) => {
      switch (item) {
        case "color-id=1":
          result.push(" رنگ :مشکی")
          break
        case "color-id=2":
          result.push(" رنگ :آبی")
          break
        case "color-id=3":
          result.push(" رنگ :قرمز")
          break
        case "color-id=4":
          result.push(" رنگ :زرد")
          break
        case "color-id=5":
          result.push(" رنگ :قهوه ای")
          break
        case "color-id=6":
          result.push(" رنگ : سبز")
          break
        case "color-id=7":
          result.push(" رنگ : نارنجی")
          break
        case "Size-Id=S":
          result.push("s :سایز")
          break
          case "Size-Id=L":
            result.push("L :سایز")
            break
        case "Size-Id=M":
          result.push("M :سایز")
          break
        case "Size-Id=XL":
          result.push("XL:سایز")
          break
        case "Size-Id=XXL":
          result.push("XXL :سایز")
          break
      }
      })
      // console.log(result);
    setResult(result);
  }

  return <>


    <div
      className="container pe-0 rounded w-50 " id="socialMedia"
 
    >
      <div className="row flex-nowrap my-1 me-1 justify-content-center align-items-center">
{/* 
        <div
          className="ps-0 d-flex align-items-center"
          style={{ width: "fit-content" }}
        >

        </div> */}
        <ul className="d-flex">
          {
            result?.map((item) => {
             console.log(item)
              return <>
                <li className="d-flex justify-content-center align-items-center shadow py-1 px-3"  
                  onClick={() => { removeFilter(getData,setItems)}}>
                  <button className="btn rounded-circle text-danger"
                
                    // onClick={(e) => { removeFilter(getData,setItems)}}
                    >
                    x
                  </button>
                  {item }
                </li>
              </>
            })
          }
        </ul>

      </div>
    </div>



  </>
}