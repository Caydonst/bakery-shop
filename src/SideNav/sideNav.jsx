import "./sideNav.css"

export default function SideNav({sideNavOpen}) {
    return (
        <div className={`side-nav ${sideNavOpen ? "open" : ""}`}>
            <button>Home</button>
            <button>Order</button>
            <button>Catering</button>
            <button>Locations</button>
        </div>
    )
}