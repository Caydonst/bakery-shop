import "./navbar.css"
import {useState} from "react";
import {Bars3Icon} from '@heroicons/react/24/outline';

export default function Navbar({setSideNavOpen}) {
    const [scrollY, setScrollY] = useState(0);

    window.addEventListener('scroll', () => {
        setScrollY(window.scrollY);
        console.log(scrollY)
    })

    const alpha = Math.min(scrollY / 200, 1);

    const changeSideNav = () => {
        setSideNavOpen(prev => !prev);
    }

    return (
        <div className="navbar" style={{backgroundColor: `rgba(255, 184, 224, ${alpha})`}}>
            <button className="menu-btn" onClick={() => changeSideNav()}><Bars3Icon className={"menuIcon"} /></button>
            <h1 className="title">Batter & Bliss</h1>
            <button className="order-now-btn">Order Now</button>
        </div>
    )
}