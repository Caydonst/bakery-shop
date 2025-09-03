import {useState} from "react"
import {PlusIcon} from "@heroicons/react/24/outline"
import {MinusIcon} from "@heroicons/react/24/outline"

export default function Item({img, name, addItem, removeItem}) {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className={"ordering-page-item"}>
            <div className={"ordering-page-item-info-container"}>
                <img src={img}/>
                <div className={"ordering-page-item-info"}>
                    <p className={"name"}>{name}</p>
                    <p className={"cals"}>780 cal</p>
                </div>
            </div>
            <div className={"item-qty-container"}>
                <button onClick={() => setQuantity(prev => prev - 1)} disabled={quantity === 0}><MinusIcon /></button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(prev => prev + 1)}><PlusIcon /></button>
            </div>
        </div>
    )
}