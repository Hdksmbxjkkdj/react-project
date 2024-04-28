function PageContainer(props){
    console.log(props)
    return <>
          <section  className="product__area box-plr-75 pb-70">
                <div  className="container-fluid">
                    <div  className="row">
                         {props.children} 

                    </div>
                    </div>
            </section>
    </>
}
export default PageContainer;