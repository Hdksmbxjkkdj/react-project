import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children, useState } from "react"
export const Rank =({setQuality,ClassN,Hover,SetHover,Rate,SetRate,setPreScore,preScore})=>{
    
    //ratesubmite
    //ratesubmite
    // const[Rate,SetRate]=useState()
    // const[Hover,SetHover]=useState()
    const[Animate,SetAnimate]=useState()
   
    // const t =(e)=>{
    //     e.target.removeC
    // }
    return<>
        <ul className="d-flex changss"> 
            {[...Array(5)].map((item,index)=>{
                return<>
                <FontAwesomeIcon icon={faStar}
                 key={index}
                  size={25} 
                //   style={{margin:"1px",color:changColor}}
                style={{margin:"1px"}}

                 className={ClassN(index)}
                   onClick={() => {
                   
                    SetRate(index+1)
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