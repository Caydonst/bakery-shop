import chocolateChipCookie from "./assets/Cookies/chocolate chip cookie.webp";
import mmCookie from "./assets/Cookies/m&m cookie.webp";
import sugarCookie from "./assets/Cookies/sugar cookie.webp";
import oreoAndCreamCookie from "./assets/Cookies/oreo & cream cookie.webp";
import strawberryWhiteChocolateCookie from "./assets/Cookies/strawberry white chocolate cookie.webp";
import mmChocolateChipCookie from "./assets/Cookies/m&m chocolate chip cookie.webp";
import brownSugarVanillaCreamCake from "./assets/Cakes/brown sugar vanilla cream cake.webp"
import chocolateFruitCake from "./assets/Cakes/chocolate fruit cake.webp"
import doubleFudgeCake from "./assets/Cakes/double fudge cake.webp"
import strawberryCake from "./assets/Cakes/strawberry cake.webp"
import vanillaAndFudgeTwistCake from "./assets/Cakes/vanilla & fudge twist cake.webp"
import vanillaFruitCake from "./assets/Cakes/vanilla fruit cake.webp"



const products = [
    {
        cookieProducts: [
            { id: 1, name: "Chocolate Chip Cookie", image: chocolateChipCookie },
            { id: 2, name: "M&M Cookie", image: mmCookie },
            { id: 3, name: "Sugar Cookie", image: sugarCookie },
            { id: 4, name: "Oreo and Cream Cookie", image: oreoAndCreamCookie },
            { id: 5, name: "Strawberry White Chocolate Cookie", image: strawberryWhiteChocolateCookie },
            { id: 6, name: "M&M Chocolate Chip Cookie", image: mmChocolateChipCookie },
        ]
    },
    {
        cakeProducts: [
            { id: 7, name: "Brown Sugar Vanilla Cream Cake", image: brownSugarVanillaCreamCake },
            { id: 8, name: "Chocolate Fruit Cake", image: chocolateFruitCake },
            { id: 9, name: "Double Fudge Cake", image: doubleFudgeCake },
            { id: 10, name: "Strawberry Cake", image: strawberryCake },
            { id: 11, name: "Vanilla and Fudge Twist Cake", image: vanillaAndFudgeTwistCake },
            { id: 12, name: "Vanilla Fruit Cake", image: vanillaFruitCake }
        ]
    }
]

export default products;