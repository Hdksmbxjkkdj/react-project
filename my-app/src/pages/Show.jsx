import { useParams } from "react-router-dom"

export default function Show () {
    const {id} = useParams()
    return <>
        <h1 className="text-danger">{id}</h1>
    </>
}