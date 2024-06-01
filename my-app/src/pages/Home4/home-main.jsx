const HomeMain = (props)=> {
    return (
        <>
            <div className="col-xl-10 col-lg-9">
                {props.children}
            </div>
        </>
    )
}

export {HomeMain};