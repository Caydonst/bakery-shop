import "./CateringPage.css"
import CateringImg from "../assets/Cookies/chocolate chip cookie.webp"

export default function CateringPage({setNavbarNotHome}) {

    setNavbarNotHome(true)

    return (
        <div className={"catering-page"}>
            <div className={"light"}></div>
            <div className={"catering-page-info"}>
                <h1>Catering</h1>
                <p>Transform every occasion into a sweet celebration. Just select your nearest store and schedule your order in a few clicks.</p>
                <button>Start a Catering Order</button>
            </div>
            <div className={"catering-page-img"}>
                <img src={CateringImg} />
            </div>
        </div>
    )
}