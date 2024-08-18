import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "./context/CardContext";
import { AboutUs } from "./pages/AboutUs";
import { Checkout } from "./pages/Auth/checkout";
import { Login } from "./pages/Auth/login";
import { Profile } from "./pages/Auth/profile";
import { Register } from "./pages/Auth/register";
import Blog from "./pages/Blog";
import BlogDetaile from "./pages/BlogDetailes";
import { Cart } from "./pages/Cart/cart";
import Footer from "./pages/Components/Footer";
import { Header } from "./pages/Components/Header";
import { BackToTop } from "./pages/Components/backtotop";
import { ContactUs } from "./pages/ContactUs";
import { Home1 } from "./pages/Home1/index";
import { ProducDetails } from "./pages/Product-Details/index";
import { Productpage } from './pages/Productpage';
import { Products } from "./pages/Shop";
import { WishList } from "./pages/WishList/wishlist";
import Modal from "./Compont/Forms/Modal";
import ModalBody from "./Compont/Forms/ModalBody";
import { data } from "jquery";

function App() {
  window?.$(window).on("load", function () {
    window?.$("#loading").fadeOut(500);
  });
  const [cart, setCart] = useState([]);
  const [check, setCheck] = useState([]);
  const [row, setrow] = useState();
  const [use,setUser] = useState();
  const [loader,setLoader] = useState(true);
  useEffect(() => {
    const u = localStorage.getItem("user");
    const user = JSON.parse(u)
    axios.get(`http://localhost:313/register?username=${user?.username}`).then((response)=>{
      setUser(response.data[0]?.id)
      axios.get(`http://localhost:313/wishlist?Uid=${response.data[0]?.id}`).then((res)=>{
      setrow(res)
      setLoader(false)
  })
    })
  }, [use]);
  useEffect(() => {
    axios.get("http://localhost:313/row").then((response) => {
      setCart(response.data);
      setLoader(false)
    });
  }, []);
  useEffect(() => {
    var name = window.location.pathname.split("/").pop();
    if (name == "") {
      name = "Home";
    } else {
      name = name;
    }
    document.getElementsByTagName("title")[0].innerHTML = name;
  },[]);

  // const [modalInfo, setModalInfo] = useState({show: false, data: null, tittle: null});
  
  return (
    <><CartContext.Provider value={{ cart, setCart,check,setCheck,row,setrow,use,setUser,loader,setLoader }}>
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="product/:id" element={<ProducDetails />} />
          <Route path="/" element={<Home1 />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetaile/:id" element={<BlogDetaile />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="Register" element={<Register />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/product" element={<Productpage />} exact={true} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/product-details/:id" element={<ProducDetails />} />
          <Route path="/product" element={<Productpage />} exact={true} />
        </Routes>
        {/* <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div id="object"></div>
            </div>
          </div>
        </div> */}
        <BackToTop></BackToTop>
        <Footer></Footer>
        <ToastContainer />
      </BrowserRouter>
    </CartContext.Provider>
      {/* <div className="container">
        <div className="row">
          <button className="btn btn-primary mt-5" onClick={() => setModalInfo({show: true, data: {name: 'ali', family: 'alavi'}, title: 'نمایش کاربر'})}>
            نمایش مودال
          </button>
          <button className="btn btn-primary mt-5" onClick={() => setModalInfo({show: true, data: {name: 'احسان', family: 'خداوردی'}, title: 'نمایش محصول'})}>
            نمایش مودال دوم
          </button>
        </div>
      </div>
      {modalInfo.show && <Modal setModalInfo={setModalInfo}>
          <ModalBody data={modalInfo.data} />
        </Modal>} */}
    </>
  );
}
export default App;