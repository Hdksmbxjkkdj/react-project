import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children, useState } from "react"
export const Rank =()=>{
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
        <ul> 
            {[...Array(5)].map((item,index)=>{
                return<>
                <FontAwesomeIcon icon={faStar}
                 key={index}
                  size={35} 
                  style={{margin:"3px"}}
                   className={ClassN(index)}
                   onClick={() => {SetRate(index+1)
                    SetAnimate(index+1)
                   }}
                   onMouseOver={()=>{SetHover(index+1)}}
                   onMouseLeave={()=>{SetHover(Rate)}}
                   ></FontAwesomeIcon>
                </> 
            })}
        </ul>

    </>
}