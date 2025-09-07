import "./HomePage.css"
import CookieItems from "./cookieItems.jsx";
import CakeItems from "./cakeItems.jsx"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Footer from "../Footer/footer.jsx"
import bannerImg from "../assets/Banner/banner.webp"

export default function HomePage({setNavbarNotHome}) {
    const [orderNowActive, setOrderNowActive] = useState(false);

    setNavbarNotHome(false)

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        navbar.classList.remove("not-home");
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (window.innerWidth < 500) {
                setOrderNowActive(y > 500);
            } else {
                setOrderNowActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={"HomePage"}>
                <div className="banner">
                    <img src={bannerImg} />
                    <Link to={"/order"}>Order Now</Link>
                </div>
                <div className="title-section">
                    <p>Jul 28 - Aug 4</p>
                    <h1>This Week's Flavors</h1>
                </div>
                <div className={"cookie-section-title"}>
                    <h1>Cookies</h1>
                </div>
                <CookieItems/>
                {/*<div className={"cakes-section-title"}>
                    <h1>Cakes</h1>
                </div>
                <CakeItems />*/}
                <div className={`order-now-popup ${orderNowActive ? "active" : ""}`}>
                    <Link to={"/order"}>Order Now</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}