import {useState} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar/navbar.jsx'
import SideNav from "./SideNav/sideNav.jsx"
import HomePage from "./HomePage/HomePage.jsx"
import Footer from "./Footer/footer.jsx"
import ProductPage from "./ProductPage/ProductPage.jsx"


function App() {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <>
            <div className={`overlay ${sideNavOpen ? "open" : ""}`}></div>
            <Navbar setSideNavOpen={setSideNavOpen}/>
            <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/product/:id"} element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
