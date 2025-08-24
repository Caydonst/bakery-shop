import React from "react";
import chocolateChipCookie from "../assets/Cookies/chocolate chip cookie.webp";
import mmCookie from "../assets/Cookies/m&m cookie.webp";
import sugarCookie from "../assets/Cookies/sugar cookie.webp";
import oreoAndCreamCookie from "../assets/Cookies/oreo & cream cookie.webp";
import strawberryWhiteChocolateCookie from "../assets/Cookies/strawberry white chocolate cookie.webp";
import mmChocolateChipCookie from "../assets/Cookies/m&m chocolate chip cookie.webp";

const CookieItems = React.memo(() => {
    return (
        <div className="items-section">
            <div className="item">
                <div className="img-container">
                    <img src={chocolateChipCookie}/>
                </div>
                <h1>Chocolate Chip Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={mmCookie}/>
                </div>
                <h1>M&M Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={sugarCookie}/>
                </div>
                <h1>Sugar Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={oreoAndCreamCookie}/>
                </div>
                <h1>Oreo & Cream Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={strawberryWhiteChocolateCookie}/>
                </div>
                <h1>Strawberry White Chocolate Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={mmChocolateChipCookie}/>
                </div>
                <h1>M&M Chocolate Chip Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    );
});

export default CookieItems;
