import "./OrderPage.css"

export default function OrderPage() {
    return (
        <div className={"order-page"}>
            <div className={"order-page-header"}>
                <h1>Start an Order</h1>
            </div>
            <div className={"order-page-options"}>
                <div className={"order-page-options-inner"}>
                    <div className={"order-page-delivery"}>
                        <i className="fa-solid fa-car"></i>
                        <h1>Delivery</h1>
                    </div>
                    <div className={"order-page-pickup"}>
                        <i className="fa-solid fa-house"></i>
                        <h1>Pickup</h1>
                    </div>
                </div>
                <div className={"order-page-catering"}>
                    <i className="fa-solid fa-bell-concierge"></i>
                    <h1>Catering</h1>
                </div>
            </div>
        </div>
    )
}