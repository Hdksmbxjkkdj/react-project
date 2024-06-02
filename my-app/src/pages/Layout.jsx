import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Shop from "./Shop/Shop";
import { Sidebar } from "./Sidebar";

export default function Layout ({children}) {
    return <>
        <Header/>
            <mail>
                {children}
                
            </mail>
        <Footer/>
    </>
}