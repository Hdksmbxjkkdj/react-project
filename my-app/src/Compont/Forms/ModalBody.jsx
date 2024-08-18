export default function ModalBody ({data}){
    return <>
        <div className="row">
            <div className="col-12">
                <p>
                    {data?.name}
                </p>
                <p>
                    {data?.family}
                </p>
            </div>
        </div>
    </>
}