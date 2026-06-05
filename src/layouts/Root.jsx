import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"

const Root = () => {
    return (
        <div>
            <Header />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root