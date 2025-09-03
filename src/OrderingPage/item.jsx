import {useState} from "react"

export default function Item({img, name}) {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className={"ordering-page-item"}>
            <div className={"ordering-page-item-info-container"}>
                <img src={img}/>
                <div className={"ordering-page-item-info"}>
                    <p>{name}</p>
                    <p>780 Cals</p>
                </div>
            </div>
            <div className={"item-amt-container"}>
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(prev => prev - 1)}>-</button>
            </div>
        </div>
    )
}