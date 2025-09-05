import {useState} from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar/navbar.jsx'
import SideNav from "./SideNav/sideNav.jsx"
import ScrollToTop from "./scrollToTop.jsx"
import HomePage from "./HomePage/HomePage.jsx"
import ProductPage from "./ProductPage/ProductPage.jsx"
import OrderPage from "./OrderPage/OrderPage.jsx"
import CateringPage from "./CateringPage/CateringPage.jsx"
import CookiePackPage from "./CookiePackPage/CookiePackPage.jsx"
import OrderingPage from "./OrderingPage/OrderingPage.jsx"


function App() {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <>
            <div className={`overlay ${sideNavOpen ? "open" : ""}`}></div>
            <Navbar setSideNavOpen={setSideNavOpen}/>
            <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/product/:id"} element={<ProductPage />} />
                <Route path={"/order"} element={<OrderPage />} />
                <Route path={"/catering"} element={<CateringPage />} />
                <Route path={"/order/carry-out/cookie-boxes"} element={<CookiePackPage />} />
                <Route path={"/order/delivery/cookie-boxes"} element={<CookiePackPage />} />
                <Route path={"/order/carry-out"} element={<OrderingPage />} />
                <Route path={"/order/delivery"} element={<OrderingPage />} />
            </Routes>
        </>
    )
}

export default App
