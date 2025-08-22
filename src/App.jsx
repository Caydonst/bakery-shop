import {useState} from 'react'
import './App.css'
import Navbar from './Navbar/navbar.jsx'
import SideNav from "./SideNav/sideNav.jsx"
import chocolateChipCookie from "./assets/Cookies/chocolate chip cookie.png"
import mmCookie from "./assets/Cookies/m&m cookie.png"
import sugarCookie from "./assets/Cookies/sugar cookie.png"
import oreoAndCreamCookie from "./assets/Cookies/oreo & cream cookie.png"
import strawberryWhiteChocolateCookie from "./assets/Cookies/strawberry white chocolate cookie.png"
import mmChocolateChipCookie from "./assets/Cookies/m&m chocolate chip cookie.png"

function App() {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <>
            <Navbar setSideNavOpen={setSideNavOpen}/>
            <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen}/>
            <div className="banner">
                <img
                    src="https://st3.depositphotos.com/1854227/12969/i/950/depositphotos_129694254-stock-photo-table-with-cakes-cookies-cupcakes.jpg"/>
                <button>Order Now</button>
            </div>
            <div className="title-section">
                <p>Jul 28 - Aug 4</p>
                <h1>This Week's Flavors</h1>
            </div>
            <div className="items-section">
                <div className="item">
                    <div className="img-container">
                        <img src={chocolateChipCookie} loading={"lazy"}/>
                    </div>
                    <h1>Chocolate Chip Cookie</h1>
                    <div className="buttons">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img src={mmCookie} loading={"lazy"}/>
                    </div>
                    <h1>M&M Cookie</h1>
                    <div className="buttons">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img src={sugarCookie} loading={"lazy"}/>
                    </div>
                    <h1>Sugar Cookie</h1>
                    <div className="buttons">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img src={oreoAndCreamCookie} loading={"lazy"}/>
                    </div>
                    <h1>Oreo & Cream Cookie</h1>
                    <div className="buttons">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img src={strawberryWhiteChocolateCookie} loading={"lazy"}/>
                    </div>
                    <h1>Strawberry White Chocolate Cookie</h1>
                    <div className="buttons">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img src={mmChocolateChipCookie} loading={"lazy"}/>
                    </div>
                    <h1>M&M Chocolate Chip Cookie</h1>
                    <div className="buttons">
                        <button>Learn More</button>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
