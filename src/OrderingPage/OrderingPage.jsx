import "./OrderingPage.css"
import products from "../products.js"
import Item from "./item.jsx"
import {useState, useEffect} from "react"
import { useLocation } from "react-router-dom";

export default function OrderingPage() {
    const [bagItems, setBagItems] = useState([])
    const [totalItems, setTotalItems] = useState(6)
    const location = useLocation()

    useEffect(() => {
        if (location.state?.quantity) {
            setTotalItems(location.state.quantity);
        }
    }, [location.state?.quantity]);

    const addItem = (item) => {
        setBagItems(prev => [...prev, item])
    }
    const removeItem = (id) => {
        setBagItems((prevItems) => {
            const index = prevItems.findIndex(item => item.id === id);
            if (index === -1) return prevItems; // not found, no change

            // make a copy of array
            const newItems = [...prevItems];
            // remove only one at that index
            newItems.splice(index, 1);
            return newItems;
        });
    }

    return (
        <div className={"ordering-page"}>
            <div className={"ordering-page-content-wrapper"}>
                <div className={"ordering-page-bag-wrapper"}>
                    <div className={"ordering-page-bag"}>
                        <div className={"cookie-box"}>
                            {bagItems.length > 0 &&
                                bagItems.map((item) => (
                                <img src={item.image} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"ordering-page-items"}>
                    <div className={"ordering-page-items-header"}>
                        <h1>Pick Your Flavors</h1>
                    </div>
                    <div className={"items-wrapper"}>
                        <div className={"cookie-items-container"}>
                            {products[0].cookieProducts.map((product) => (
                                <Item id={product.id} img={product.image} name={product.name} addItem={addItem} removeItem={removeItem} bagItems={bagItems} totalItems={totalItems} />
                            ))}
                        </div>
                    </div>
                    <div className={"ordering-page-bag-popup-wrapper"}>
                        <button className={"ordering-page-bag-popup"} disabled={bagItems.length < totalItems}>
                            {bagItems.length < totalItems
                                ?
                                <p>Add {totalItems - bagItems.length} More</p>
                                :
                                <p>Add to Bag</p>}
                            <p>$32.99</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}