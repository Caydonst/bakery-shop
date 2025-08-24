import "./sideNav.css"
import {XMarkIcon} from '@heroicons/react/24/outline'

export default function SideNav({sideNavOpen, setSideNavOpen}) {

    const closeSideNav = () => {
        setSideNavOpen(prev => !prev)
        document.body.classList.remove("no-scroll");
    }



    return (
        <div className={`side-nav ${sideNavOpen ? "open" : ""}`}>
            <button className={"close-btn"} onClick={() => closeSideNav()}><XMarkIcon className={"close-icon"}/>
            </button>
            <div className={"all-links"}>
                <div className={"nav-links"}>
                    <button>Home</button>
                    <button>Order</button>
                    <button>Catering</button>
                    <button>Locations</button>
                </div>
                <div className={"socials-container"}>
                    <a href={""}><i className="fa-brands fa-instagram"></i></a>
                    <a href={""}><i className="fa-brands fa-facebook"></i></a>
                    <a href={""}><i className="fa-brands fa-tiktok"></i></a>
                    <a href={""}><i className="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}