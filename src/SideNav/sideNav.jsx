import "./sideNav.css"
import {XMarkIcon} from '@heroicons/react/24/outline'

export default function SideNav({sideNavOpen, setSideNavOpen}) {

    const closeSideNav = () => {
        setSideNavOpen(prev => !prev)
    }



    return (
        <div className={`side-nav ${sideNavOpen ? "open" : ""}`}>
            <button className={"close-btn"} onClick={() => closeSideNav()}><XMarkIcon className={"close-icon"}/></button>
            <div className={"nav-links"}>
                <button>Home</button>
                <button>Order</button>
                <button>Catering</button>
                <button>Locations</button>
            </div>
        </div>
    )
}