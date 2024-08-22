import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children, useState } from "react"
export const Rank =({setQuality})=>{
    //ratesubmite
    const [preScore, setPreScore] = useState(0)

    //ratesubmite
    const[Rate,SetRate]=useState()
    const[Hover,SetHover]=useState()
    const[Animate,SetAnimate]=useState()
    const ClassN =(index)=>{
        let TempClass
        // Animate === index +1 ? (TempClass= "active animate" ): (TempClass= "active animate" )
        index < (Hover || Rate) ? TempClass= "actives" : TempClass=""
        return TempClass

    }
    return<>
        <ul className="d-flex"> 
            {[...Array(5)].map((item,index)=>{
                return<>
                <FontAwesomeIcon icon={faStar}
                 key={index}
                  size={25} 
                  style={{margin:"1px"}}
                   className={ClassN(index)}
                   onClick={() => {SetRate(index+1)
                    SetAnimate(index+1)
                    setQuality(index+1)
                    
                  
                   }}
                   onMouseOver={()=>{SetHover(index+1)
                    setPreScore(index+1)
                   }
                }
                   onMouseLeave={()=>{SetHover(Rate)}}
                   ></FontAwesomeIcon>
                </> 
            })}
               <div className="mx-3 d-flex align-items-start">
                        <span  > {preScore} </span>
                        <span className="mx-1"> از </span>
                        <span> 5 </span>

                    </div>
        </ul>
     
    </>
}