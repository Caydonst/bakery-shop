import "./HomePage.css"
import CookieItems from "./cookieItems.jsx";
import CakeItems from "./cakeItems.jsx"
import {useState, useEffect} from "react";

export default function HomePage() {
    const [orderNowActive, setOrderNowActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (window.innerWidth < 500) {
                setOrderNowActive(y > 500);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={"HomePage"}>
            <div className="banner">
                <img
                    src="https://st3.depositphotos.com/1854227/12969/i/950/depositphotos_129694254-stock-photo-table-with-cakes-cookies-cupcakes.jpg"/>
                <button>Order Now</button>
            </div>
            <div className="title-section">
                <p>Jul 28 - Aug 4</p>
                <h1>This Week's Flavors</h1>
            </div>
            <div className={"cookie-section-title"}>
                <h1>Cookies</h1>
            </div>
            <CookieItems/>
            <div className={"cakes-section-title"}>
                <h1>Cakes</h1>
            </div>
            <CakeItems />
            <div className={`order-now-popup ${orderNowActive ? "active" : ""}`}>
                <button>Order Now</button>
            </div>
        </div>
    )
}