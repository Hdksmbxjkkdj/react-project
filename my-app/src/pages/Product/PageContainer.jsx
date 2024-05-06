// import chaman from '../imegs/chaman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBagShopping} from '@fortawesome/free-solid-svg-icons'
function PageContainer(props){
    console.log(props)
    return <>
          <section  className="product__area box-plr-75 pb-70">
                <div  className="container-fluid">
                    <div  className="row">
                         {props.children} 
                         {/* <img src={chaman}/> */}
                        <FontAwesomeIcon icon={faBagShopping}/>
                    </div>
                    </div>
            </section>
    </>
}
export default PageContainer;