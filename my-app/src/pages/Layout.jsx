import Footer from "./Components/Footer";
import { Header } from "./Components/Header";

export default function Layout ({children}) {
    return <>
        <Header/>
            <mail>
                {children}
            </mail>
        <Footer/>
    </>
}