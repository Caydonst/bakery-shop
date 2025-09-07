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
    const [navbarNotHome, setNavbarNotHome] = useState(false)

    return (
        <>
            <div className={`overlay ${sideNavOpen ? "open" : ""}`}></div>
            <Navbar setSideNavOpen={setSideNavOpen} navbarNotHome={navbarNotHome}/>
            <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<HomePage setNavbarNotHome={setNavbarNotHome} />} />
                <Route path={"/product/:id"} element={<ProductPage setNavbarNotHome={setNavbarNotHome} />} />
                <Route path={"/order"} element={<OrderPage setNavbarNotHome={setNavbarNotHome} />} />
                <Route path={"/catering"} element={<CateringPage setNavbarNotHome={setNavbarNotHome} />} />
                <Route path={"/order/carry-out"} element={<CookiePackPage />} />
                <Route path={"/order/delivery"} element={<CookiePackPage />} />
                <Route path={"/order/carry-out/1-pack"} element={<OrderingPage />} />
                <Route path={"/order/carry-out/4-pack"} element={<OrderingPage />} />
                <Route path={"/order/carry-out/6-pack"} element={<OrderingPage />} />
                <Route path={"/order/delivery/1-pack"} element={<OrderingPage />} />
                <Route path={"/order/delivery/4-pack"} element={<OrderingPage />} />
                <Route path={"/order/delivery/6-pack"} element={<OrderingPage />} />

            </Routes>
        </>
    )
}

export default App
