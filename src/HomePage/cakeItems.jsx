import React from "react";
import "./cakeItems.css"
import brownSugarVanillaCreamCake from "../assets/Cakes/brown sugar vanilla cream cake.webp"
import chocolateFruitCake from "../assets/Cakes/chocolate fruit cake.webp"
import doubleFudgeCake from "../assets/Cakes/double fudge cake.webp"
import strawberryCake from "../assets/Cakes/strawberry cake.webp"
import vanillaAndFudgeTwistCake from "../assets/Cakes/vanilla & fudge twist cake.webp"
import vanillaFruitCake from "../assets/Cakes/vanilla fruit cake.webp"


const CakeItems = React.memo(() => {
    return (
        <div className="items-section">
            <div className="item">
                <div className="img-container">
                    <img src={brownSugarVanillaCreamCake}/>
                </div>
                <h1>Brown Sugar Vanilla Cream Cake</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={chocolateFruitCake}/>
                </div>
                <h1>Chocolate Fruit Cake</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={doubleFudgeCake}/>
                </div>
                <h1>Double Fudge Cake</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={strawberryCake}/>
                </div>
                <h1>Strawberry Cake</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={vanillaAndFudgeTwistCake}/>
                </div>
                <h1>Vanilla & Fudge Twist Cake</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="item">
                <div className="img-container">
                    <img src={vanillaFruitCake}/>
                </div>
                <h1>Vanilla Fruit Cake</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    )
});

export default CakeItems;