import "./OrderingPage.css"
import products from "../products.js"
import Item from "./item.jsx"
import {useState} from "react";

export default function OrderingPage() {
    const [bagItems, setBagItems] = useState([])

    const addItem = (item) => {
        setBagItems(prev => [...prev, item])
    }
    const removeItem = (item) => {

    }

    return (
        <div className={"ordering-page"}>
            <div className={"ordering-page-content-wrapper"}>
                <div className={"ordering-page-bag-wrapper"}>
                    <div className={"ordering-page-bag"}>
                        <div className={"ordering-page-bag-header"}>
                            <h3>Your Bag</h3>
                        </div>
                    </div>
                </div>
                <div className={"ordering-page-items"}>
                    <div className={"ordering-page-items-header"}>
                        <h1>Pick Your Deserts</h1>
                    </div>
                    <div className={"items-wrapper"}>
                        <div className={"cookie-items-container"}>
                            {products[0].cookieProducts.map((product) => (
                                <Item img={product.image} name={product.name} addItem={addItem} />
                            ))}
                        </div>
                        <div className={"cake-items-container"}>

                            {products[1].cakeProducts.map((product) => (
                                <Item img={product.image} name={product.name} addItem={addItem} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"ordering-page-bag-popup-wrapper"}>
                <div className={"ordering-page-bag-popup"}>
                    <p>Your Bag</p>
                    <div className={"ordering-page-bag-popup-content"}>
                        <p>$32.99</p>
                        <div className={"item-amt-container"}>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}