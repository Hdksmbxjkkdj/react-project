// import logo from './logo.svg';
// import './App.css';
import { Header } from './pages/Components/Header';
import { Hero } from './pages/Home1/hero';
import { Features } from './pages/Home1/features';
import { BestSelling } from './pages/Home1/best-selling';
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
import {Adds} from './pages/Home1/adds';

function App() {
  return (
    
    <>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Adds></Adds>
      <BestSelling></BestSelling>
    </>
  );
}

export default App;
