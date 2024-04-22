// import logo from './logo.svg';
// import './App.css';
// import './css/fontAwesome5Pro.css';
import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/backToTop.css';
import './css/default.css';
import './css/jquery.fancybox.min.css';
import './css/meanmenu.css';
import './css/nice-select.css';
// import './css/owl.carousel.min.css';
import './css/preloader.css';
import './css/slick.css';
// import './css/ui-range-slider.css';
import './css/style.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home1} from './pages/Home1/index';
import { Menu } from './pages/Components/Menu';
import Footer from './pages/Components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <Home1></Home1> */}
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
