import "./CookiePackPage.css"

export default function CookiePackPage() {
    return (
        <div className={"cookie-pack-page"}>
            <div className={"cookie-pack-page-header"}>
                <h1>Choose Your Box</h1>
            </div>
            <div className={"boxes-container"}>
                <div className={"box"}>
                    <div className={"box-img-container"}></div>
                    <div className={"box-info-container"}>
                        <p>Single</p>
                        <p>$3.99</p>
                    </div>
                </div>
                <div className={"box"}>
                    <div className={"box-img-container"}></div>
                    <div className={"box-info-container"}>
                        <p>4-Pack</p>
                        <p>$14.99</p>
                    </div>
                </div>
                <div className={"box"}>
                    <div className={"box-img-container"}></div>
                    <div className={"box-info-container"}>
                        <p>6-Pack</p>
                        <p>$22.99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}