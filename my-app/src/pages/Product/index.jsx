import Breadcrumb from './breadcrumb';
import Menu from '../Components/Menu'
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import Main from './Main';
import Sidebar from './sidebar';
import Container from './container';

function Product () {
    return<>
    <Header></Header>
    <Breadcrumb></Breadcrumb>
    <Container></Container>
    <Sidebar></Sidebar>

    <Main></Main>
    <Footer></Footer>
    </>
}

export default Product;