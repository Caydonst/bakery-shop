import {useState} from "react"
import {PlusIcon} from "@heroicons/react/24/outline"
import {MinusIcon} from "@heroicons/react/24/outline"

export default function Item({id, img, name, addItem, removeItem, bagItems, totalItems}) {
    const [quantity, setQuantity] = useState(0);

    const changeQuantity = (num) => {
        setQuantity(prev => prev + num)
        if (num === 1) {
            addItem({id: id, image: img})
        } else if (num === -1) {
            removeItem(id)
        }
    }

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
                <button onClick={() => changeQuantity(-1)} disabled={quantity === 0}><MinusIcon /></button>
                <p>{quantity}</p>
                <button onClick={() => changeQuantity(1)} disabled={bagItems.length === totalItems}><PlusIcon /></button>
            </div>
        </div>
    )
}