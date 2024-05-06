import Breadcrumb from './Breadcrumb';
import Menu from '../Components/Menu'
import Main from './Main';
import Sidebar from './Sidebar';
import PageContainer from './PageContainer';

function Product() {
    return <>
 
        <Breadcrumb></Breadcrumb>
        <PageContainer>
            <Sidebar></Sidebar>
            <Main></Main>
        </PageContainer>
    </>
}

export default Product;