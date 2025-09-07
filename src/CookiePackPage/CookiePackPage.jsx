import "./CookiePackPage.css"
import {Link} from "react-router-dom";

export default function CookiePackPage() {
    return (
        <div className={"cookie-pack-page"}>
            <div className={"cookie-pack-page-header"}>
                <h1>Choose Your Box</h1>
            </div>
            <div className={"boxes-container"}>
                <Link to={"1-pack"} state={{ quantity: 1 }}>
                    <div className={"box"}>
                        <div className={"box-img-container"}></div>
                        <div className={"box-info-container"}>
                            <p>Single</p>
                            <p>$3.99</p>
                        </div>
                    </div>
                </Link>
                <Link to={"4-pack"} state={{ quantity: 4 }}>
                    <div className={"box"}>
                        <div className={"box-img-container"}></div>
                        <div className={"box-info-container"}>
                            <p>4-Pack</p>
                            <p>$14.99</p>
                        </div>
                    </div>
                </Link>
                <Link to={"6-pack"} state={{ quantity: 6 }}>
                    <div className={"box"}>
                        <div className={"box-img-container"}></div>
                        <div className={"box-info-container"}>
                            <p>6-Pack</p>
                            <p>$22.99</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}