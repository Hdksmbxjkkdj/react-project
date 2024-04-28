// import logo from './logo.svg';
// import './App.css';
// import './css/fontAwesome5Pro.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home1} from './pages/Home1/index';
import {Home2} from './pages/Home2/index';
import {Home3} from './pages/Home3/index';
import {Home4} from './pages/Home4/index';
import { Header } from './pages/Components/Header';
import { Menu } from './pages/Components/Menu';
import Footer from './pages/Components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <Home1></Home1> */}
      <Header></Header>
      <Routes>
        <Route path="/Home1" element={<Home1/>}/>
        <Route path='/Home2' element={<Home2/>}/>
        <Route path='/Home3' element={<Home3/>}/>
        <Route path='/Home4' element={<Home4/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
