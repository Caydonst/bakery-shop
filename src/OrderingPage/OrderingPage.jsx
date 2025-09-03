import "./OrderingPage.css"
import products from "../products.js"
import Item from "./item.jsx"

export default function OrderingPage() {
    return (
        <div className={"ordering-page"}>
            <div className={"items-container"}>
                {products[0].cookieProducts.map((product) => (
                    <Item img={product.image} name={product.name} />
                ))}
            </div>
        </div>
    )
}