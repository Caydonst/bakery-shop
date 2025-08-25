import "./ProductPage.css"
import { useParams } from "react-router-dom";
import products from "../products.js"
import {useEffect} from "react";

export default function ProductPage() {

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        navbar.classList.add("not-home");
    }, []);

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
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className={"product-buttons"}>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}