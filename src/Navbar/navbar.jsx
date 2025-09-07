import "./navbar.css"
import {useState} from "react";
import {Bars3Icon} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom'

export default function Navbar({setSideNavOpen, navbarNotHome}) {
    const [scrollY, setScrollY] = useState(0);

    window.addEventListener('scroll', () => {
        setScrollY(window.scrollY);
    })

    const alpha = Math.min(scrollY / 100, 1);

    const changeSideNav = () => {
        setSideNavOpen(prev => !prev);
        document.body.classList.add("no-scroll");
    }

    return (
        <div id="navbar"
             className={`navbar ${navbarNotHome ? "navbar not-home" : ""}`}
             style={
                 !navbarNotHome
                     ? {
                         backgroundColor: `rgba(5, 0, 15, ${alpha})`,
                         borderColor: `rgba(255, 255, 255, ${alpha * 0.1})`,
                     }
                     : {}
             }>
            <div className={"navbar-inner"}>
                <button className="menu-btn" onClick={() => changeSideNav()}><Bars3Icon className={"menuIcon"}/>
                </button>
                <Link to={"/order"} className="order-now-btn">Order Now</Link>
            </div>
            <h1 className="title">Batter & Bliss</h1>
        </div>
    )
}