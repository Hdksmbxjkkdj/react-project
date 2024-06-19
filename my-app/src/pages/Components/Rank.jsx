import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Children } from "react"
export const Rank =()=>{
    const Rank=(event)=>{
        window?.$(event.target).prevAll(event.target).addClass('active-star')
        window?.$(event.target).nextAll().removeClass('active-star')
        
    }

    return<>
        <ul>
            <FontAwesomeIcon icon={faStar} onclick={(event) => Rank(event)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} onclick={(event) => Rank(event)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} onclick={(event) => Rank(event)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} onclick={(event) => Rank(event)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} onclick={(event) => Rank(event)}></FontAwesomeIcon>
        </ul>

    </>
}