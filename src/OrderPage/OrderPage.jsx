import "./OrderPage.css"
import {Link} from "react-router-dom"
import {useEffect} from "react";

export default function OrderPage({setNavbarNotHome}) {

    setNavbarNotHome(true)

    return (
        <div className={"order-page"}>
            <div className={"order-page-header"}>
                <h1>Start an Order</h1>
            </div>
            <div className={"order-page-options"}>
                <div className={"order-page-options-inner"}>
                    <Link to={"delivery"}>
                        <div className={"order-page-delivery"}>
                            <i className="fa-solid fa-car"></i>
                            <h1>Delivery</h1>
                        </div>
                    </Link>
                    <Link to={"carry-out"}>
                        <div className={"order-page-pickup"}>
                            <i className="fa-solid fa-house"></i>
                            <h1>Pickup</h1>
                        </div>
                    </Link>
                </div>
                <div className={"order-page-catering"}>
                    <i className="fa-solid fa-bell-concierge"></i>
                    <h1>Catering</h1>
                </div>
            </div>
        </div>
    )
}