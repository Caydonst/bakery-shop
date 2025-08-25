import React from "react";
import { Link } from "react-router-dom"
import products from "../products.js"

const CookieItems = React.memo(() => {

    return (
        <div className="items-section">
            {products[0].cookieProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="item">
                        <div className="img-container">
                            <img src={product.image}/>
                        </div>
                        <h1>{product.name}</h1>
                        <div className="buttons">
                            <button>Learn More</button>
                            <button>Order Now</button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
});

export default CookieItems;
