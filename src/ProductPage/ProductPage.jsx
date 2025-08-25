import "./ProductPage.css"
import { useParams } from "react-router-dom";
import products from "../products.js"

export default function ProductPage() {

    const allProducts = [
        ...products[0].cookieProducts,
        ...products[1].cakeProducts
    ];

    const { id } = useParams();
    const product = allProducts.find((p) => p.id === parseInt(id));

    return (
        <div className={"ProductPage"}>
            <div className={"info-container"}>
                <div className={"product-img"}>
                    <img src={product.image} />
                </div>
                <div className={"product-info-container"}>
                    <div className={"product-name"}>
                        <h1>{product.name}</h1>
                    </div>
                    <div className={"product-description"}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}